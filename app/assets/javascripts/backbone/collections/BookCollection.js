App.Collections.BookCollection = Backbone.Collection.extend({
	model: App.Models.Book,
	url: '/books',
	initialize: function() {
		console.log('new Book collection created');
	}
});