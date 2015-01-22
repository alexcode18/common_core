App.Collections.AuthorCollection = Backbone.Collection.extend({
	model: App.Models.Author,
	url: '/authors',
	initialize: function() {
		console.log('new Author collection created');
	}
});