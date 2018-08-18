angular.module('video-player').component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    result: '<',
    search: '<',
    videos: '=',
    currentVideo: '='
  },

  controller: function() {
    // console.log('search', this);
    this.searchString = 'kittens';
    this.cb = e => {
      this.videos = e;
      this.currentVideo = e[0];
    };
  }
});
