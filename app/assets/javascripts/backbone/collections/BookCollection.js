App.Collections.BookCollection = Backbone.Collection.extend({
	model: App.Models.Book,
	url: '/books',
	initialize: function() {
		console.log('new Book collection created');
	},
	fetchMoreBooks: function() {
		this.offset = 30;
		this.fetch({
			url: '/get_more',
			data: {offset: this.offset}
		});
		this.offset += 30;
	}
});