angular.module('video-player').component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    videos: '<',
    onClick: '<'
  },
  controller: function VideoListController() {
    // this.onClick = function() {
    //   //do stuff
    // };
  }
});
