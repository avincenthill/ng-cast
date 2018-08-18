angular
  .module('video-player')

  .component('videoPlayer', {
    templateUrl: 'src/templates/videoPlayer.html',
    bindings: {
      currentVideo: '<'
    },
    controller: function VideoPlayerController() {}
  });

//Scratch
// console.log('player', this);
// this.currentVideoUrl = () => {
//   if (this.currentVideo.id) {
//     let url =
//       'https://www.youtube.com/embed/' + this.currentVideo.id.videoId;
//     return url;
//   } else {
//     return false;
//   }
// };
