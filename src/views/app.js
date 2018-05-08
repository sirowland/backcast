var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView();
    new VideoPlayerView();
    new VideoListView(window.exampleVideoData);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
