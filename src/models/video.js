var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    console.log(video);
    this.set('id', video.id.videoId);
    this.set('title', video.snippet.title);
    this.set('desc', video.snippet.description);
    this.set('high', video.snippet.thumbnails.high);
  },

  select: function() {
    this.trigger('select', this);
  }

});
