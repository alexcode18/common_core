App.Routers.Router = Backbone.Router.extend({
	initialize: function() {
		App.collection = new App.Collections.BookCollection();
		App.modal = new App.Views.BookModalView();
	},
	routes: {
		'':'index',
		'books/:id/modal':'modalView'
	},
<<<<<<< HEAD
	modalView: function() {
		App.modal.renderBook({
			success: function() {
				$('#' + id).find('#popup_book');
			}
		})
=======
	index: function() {
		console.log('happy time');
		App.tagID = undefined;
		App.offset = App.starterOffset;
		App.books = new App.Collections.BookCollection();
		App.booksListView = new App.Views.BooksListView({collection: App.books});
		App.books.fetch({reset: true});
	},
	modalView: function(id) {
		console.log(id);
		this.tagView(App.tagID);
		App.books = new App.Collections.BookCollection();
		App.books.fetch({
			success: function(){
				App.bookModalView.showBook(App.books.get(id));
			}
		});
	},
	tagView: function(id) {
		console.log('made it to tagView router: ' + id);
		App.tags = new App.Collections.TagCollection();
		App.tags.fetch({
			success: function() {
				console.log('made it to tagView router: ' + App.tags.get(id));
				var newView = new App.Views.TagView({model: App.tags.get(id)});
				newView.getTagBooks();
			}
		});
>>>>>>> button_link_changes
	}
})