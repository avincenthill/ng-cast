angular
  .module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function MainController() {
      this.selectVideo = () => {
        //do stuff
      };
      this.searchResults = () => {
        //do more stuff
      };
      this.currentVideo = {};
      this.videos = [];
    }
  });
