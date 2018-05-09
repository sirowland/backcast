var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.videos.on('all', this.render, this);
    this.videos.search('cats');
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    
    new SearchView();
    
    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.at(0),
      collection: this.videos
    });
    
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    });
    
    return this.$el;
  },

  template: templateURL('src/templates/app.html')
});
