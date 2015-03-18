App.Routers.Router = Backbone.Router.extend({
	initialize: function() {
	},
	routes: {
		'':'index',
		'books/:id':'modalView',
		'tags/:id':'tagView'
	},
	index: function() {
	},
	modalView: function(id) {
 	// 	App.modal.renderBook({
		// 	success: function() {
		// 		$('#' + id).find('#popup_book');
		// 	}
		// });
		console.log(id);
		App.bookModalView.showBook(App.books.get(id));
	},
	tagView: function(id) {
		console.log('made it to tagView router: ' + App.tags.get(id));
		var newView = new App.Views.TagView({model: App.tags.get(id)});
		newView.getTagBooks();
	}
})