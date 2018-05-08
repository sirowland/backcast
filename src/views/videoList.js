var VideoListView = Backbone.View.extend({
  
  el: '.list',
  
  initialize: function(exampleVideoData) {
    this.data = exampleVideoData;
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    this.$el.find('div').append(this.data.map(function(video) {
      var newVid = new VideoListEntryView({model: video});
      return newVid.el;
    }));
    
    // _.each(this.data, function(video) {
    //   new VideoListEntryView({model: video});
    // }); 
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
