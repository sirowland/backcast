var VideoListView = Backbone.View.extend({
  
  el: '.list',
  
  initialize: function(exampleVideoData) {
    this.data = exampleVideoData;
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    // this.data.map(function(video) {
    //   var newVid = new VideoListEntryView({model: video});
    //   this.$el.append(newVid.el);
    
    var $that = this.$el;
    
    _.each(this.data, function(video) {
      var newVid = new VideoListEntryView({model: video});
      $that.append(newVid.el.children[0]);
    }); 
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
