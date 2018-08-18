angular.module('video-player').service('youTube', function($http) {
  // console.log('youTube', this);
  this.search = function(q = 'kittens', callback, key = YOUTUBE_API_KEY) {
    console.log('search called');
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
        console.log('http successful');
        console.log(callback); //cb undefined
        callback(response.data.items);
      },
      function errorCallback(response) {
        console.log('ERROR!', response);
      }
    );
  };
});
