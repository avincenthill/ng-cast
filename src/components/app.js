angular
  .module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function AppController($scope, youTube) {
      // console.log('app', this);
      this.selectVideo = () => {
        alert('select video called');
      };
      this.searchResults = data => {
        //TBD this is pointless
        // alert('search result called returning ' + data);
      };
      this.videoTitleClick = function(data) {
        // console.log(data);
        // console.log(this);
        this.currentVideo = data;
      }.bind(this); //bind click action to app (this)
      this.search = function(q, cb) {
        youTube.search(q, cb);
      };
      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];

      this.init = function() {
        this.search('kittens', e => {
          this.videos = e;
          this.currentVideo = e[0];
          // console.log('data', this.videos);
        });
      };
      this.init();
    }
  });
