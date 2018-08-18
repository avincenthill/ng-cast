angular
  .module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function AppController() {
      //get example videos from local dir
      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = () => {
        //do stuff
      };
      this.searchResults = () => {
        //do more stuff
      };
      this.videoTitleClick = function() {
        //do stuff
        alert('click');
      };
      console.log('app', this);
    }
  });
