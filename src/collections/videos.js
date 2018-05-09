var Videos = Backbone.Collection.extend({

  model: Video,
  
  initialize: function() {
  },
  
  search: function(query) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        'key': window.YOUTUBE_API_KEY,
        'maxResults': '5',
        'part': 'snippet',
        'q': query,
        'type': 'video',
        'videoEmbeddable': 'true'
      },
      success: function(data) {
        console.log('SUCCESSFULLY RETRIEVED DATA!');
        console.log(data.items);
        return data.items;
      },
      error: function(data) {
        console.error('backcast: Failed to fetch', data);
      }    
    });
  }
});
