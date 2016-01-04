App.Views.BooksListView = Backbone.View.extend({
	el: '#columns',
	initialize: function(){
		this.$el.empty();
		this.renderAllPreviewBooks();
		this.listenTo(this.collection, 'add', this.renderAllPreviewBooks);
		this.listenTo(this.collection, 'reset', this.renderAllPreviewBooks);
	},
	renderAllPreviewBooks: function(){
		this.$el.empty();
		this.collection.each(this.renderPreviewView, this);
	},
	renderPreviewView: function(book){

		console.log(book.attributes.isbn);

		// $.ajax({
		// 	type: HEAD,
		// 	url: 'http://img2.imagesbn.com/p/' + book.isbn + '_p0_v3_s260x420.JPG',
		// 	success: function() {
		// 		var bookModel = new App.Views.BookPreviewView({model: book, url: 'http://img2.imagesbn.com/p/' + book.isbn + '_p0_v3_s260x420.JPG'});
		// 		this.$el.append(bookModel.$el);
		// 	},
		// 	error: function() {
		// 		var bookModel = new App.Views.BookPreviewView({model: book, });
		// 		this.$el.append(bookModel.$el);
		// 	}
		// });

		var bookModel = new App.Views.BookPreviewView({model: book});
		this.$el.append(bookModel.$el);
		
	}
});
