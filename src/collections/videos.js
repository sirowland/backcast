var Videos = Backbone.Collection.extend({

  model: Video,
  
  initialize: function(videos) {
    _.each(videos, function(video) {
      new Video(video);
    });
  }
});
