App.Views.BooksListView = Backbone.View.extend({
	el: '#columns',
	initialize: function(){
		// this.offset = 15;
		this.$el.empty();
		console.log('initialize Books List View');
		console.log(this.collection);
		this.renderAllPreviewBooks();
		this.listenTo(this.collection, 'add', this.renderAllPreviewBooks);
		this.listenTo(this.collection, 'reset', this.renderAllPreviewBooks);
	},
	renderAllPreviewBooks: function(){
		console.log('renderAllPreviewBooks');
		this.collection.each(this.renderPreviewView, this);
	},
	renderPreviewView: function(book){
		console.log('rendered Book Preview');
		var bookModel = new App.Views.BookPreviewView({model: book});
		this.$el.append(bookModel.$el);
	}
});
