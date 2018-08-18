angular.module('video-player').service('youTube', function() {
  console.log(this);
  this.search = function(q) {
    return () => {
      console.log('search was called');
      $http({
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true,
        maxResults: 5,
        q: q,
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search'
      }).then(
        function successCallback(response) {
          console.log(response);
          return response;
        },
        function errorCallback(response) {
          console.log('ERROR!');
        }
      );
    };
  };
  alert('youTube got called');
});
