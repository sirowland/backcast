var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    this.collection.each(this.renderVideo, this)
    
    return this.$el;
  },
  
  renderVideo: function(video) {
    this.$('.video-list').append(
      new VideoListEntryView({
        model: video
      }).render().el
    ) 
  },

  template: templateURL('src/templates/videoList.html')
});
