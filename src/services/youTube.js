angular.module('video-player').service('youTube', function($http) {
  console.log('youTube', this);
  this.search = function(
    q = 'kittens',
    callback = e => {
      console.log(e);
    },
    key = YOUTUBE_API_KEY
  ) {
    $http({
      params: {
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true,
        maxResults: 5,
        q: q,
        key: key
      },
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search'
    }).then(
      function successCallback(response) {
        return callback(response);
      },
      function errorCallback(response) {
        console.log('ERROR!', response);
      }
    );
  };
  // alert('youTube got called');
});
