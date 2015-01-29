App.Collections.BookCollection = Backbone.Collection.extend({
	model: App.Models.Book,
	url: '/books',
	initialize: function() {
		console.log('new Book collection created');
		this.offset = 30;
	// },
	// fetchMoreBooks: function() {
	// 	this.fetch({
	// 		url: '/get_more',
	// 		data: {offset: this.offset},
	// 		success: _.bind(function(e){
 //        this.offset += 30;
 //      }, this)    
	// 	});	
	}
});