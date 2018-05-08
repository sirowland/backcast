var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',
  
  initialize: function(data) {
    console.log('DATA',data);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
