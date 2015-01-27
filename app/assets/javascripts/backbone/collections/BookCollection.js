App.Collections.BookCollection = Backbone.Collection.extend({
	model: App.Models.Book,
	url: '/books',
	initialize: function() {
		console.log('new Book collection created');
	},
	fetchMoreBooks: function() {
		var offset = 15;
		this.fetch({
			url: this.url + '/get_more',
			data: {offset: offset},
			reset: true
		});
		offset += 15;
	}
});