App.Collections.BookCollection = Backbone.Collection.extend({
	model: App.Models.Book,
	url: '/books',
	initialize: function() {
		this.offset = 30;
	},
	fetchMoreBooks: function() {
		this.fetch({
			remove: false, //tells it not to replace the data that's already in there but add to it.
			url: '/get_more',
			data: {offset: this.offset},
			success: _.bind(function(e){
        this.offset += 30;
      }, this)    
		});	
	}
});