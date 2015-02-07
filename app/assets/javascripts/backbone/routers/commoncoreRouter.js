App.Routers.Router = Backbone.Router.extend({
	initialize: function() {
		App.collection = new App.Collections.BookCollection();
		App.modal = new App.Views.BookModalView();
	},
	routes: {
		'':'index',
		'books/:id':'modalView',
		'tags/:id':'tagView'
	},
	index: function() {
		$(document.body).append('this route works!');
	},
	modalView: function(id) {
		console.log(id);
		App.bookModalView.showBook(App.books.get(id));
	},
	tagView: function(id) {
		console.log('made it to tagView router: ' + App.tags.get(id));
		var newView = new App.Views.TagView({model: App.tags.get(id)});
		newView.getTagBooks();
		// var tag = App.tags.get(id);
		// tagBooks = new App.Views.BooksListView({collection: tag.get('books')});
	}
})