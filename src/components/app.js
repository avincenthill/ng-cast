angular
  .module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function AppController() {
      //get example videos from local dir
      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = () => {
        alert('select video called');
      };
      this.searchResults = () => {
        alert('search result called');
      };
      this.videoTitleClick = function() {
        //do stuff
        alert('video title click');
      };
      // this.result = function() {
      //   //do stuff
      //   alert('result');
      // };
      // console.log('app', this);
    }
  });
