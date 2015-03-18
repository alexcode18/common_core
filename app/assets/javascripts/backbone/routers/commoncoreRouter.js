App.Routers.Router = Backbone.Router.extend({
	initialize: function() {
	},
	routes: {
		'':'index',
		'books/:id':'modalView',
		'tags/:id':'tagView'
	},
	index: function() {
		console.log('index');
	},
	modalView: function(id) {
		console.log(id);
		App.bookModalViewReloaded = new App.Views.BookModalView();
		App.bookModalViewReloaded.showBook(App.books.get(id));
		// App.bookModalView.renderBook({App.books.get(id)});
		console.log('router modal view');
		console.log(App.books.get(id));
	},
	tagView: function(id) {
		console.log('made it to tagView router: ' + App.tags.get(id));
		var newView = new App.Views.TagView({model: App.tags.get(id)});
		newView.getTagBooks();
	}
})