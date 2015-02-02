App.Collections.BookCollection = Backbone.Collection.extend({
	model: App.Models.Book,
	url: '/books',
	initialize: function() {
		App.offset = App.starterOffset;
	},
	fetchMoreBooks: function() {
		this.fetch({
			remove: false, //tells it not to replace the data that's already in there but add to it.
			url: '/get_more',
			data: {offset: App.offset,
								tag: App.tagID},
			success: _.bind(function(e){
        App.offset += App.starterOffset;
      }, this)    
		});	
	}
});