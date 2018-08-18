angular
  .module('video-player')

  .component('videoPlayer', {
    templateUrl: 'src/templates/videoPlayer.html',
    bindings: {
      currentVideo: '<'
    },
    controller: function VideoPlayerController() {
      console.log('player', this);
      this.currentVideoUrl = () => {
        let url = `www.youtube.com/embed/${this.currentVideo.id.videoId}`;
        console.log(url);
        return url;
      };
    }
  });
