angular
  .module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function AppController($scope, youTube) {
      console.log('app', this);
      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = () => {
        alert('select video called');
      };
      this.searchResults = () => {
        alert('search result called');
      };
      this.videoTitleClick = function() {
        alert('video title click');
      };
      this.search = function(q) {
        youTube.search(q);
      };
    }
  });
