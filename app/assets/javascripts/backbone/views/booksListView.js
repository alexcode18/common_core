App.Views.BooksListView = Backbone.View.extend({
	el: '#columns',
	initialize: function(){
		this.$el.empty();
		this.renderAllPreviewBooks();
		this.listenTo(this.collection, 'add', this.renderAllPreviewBooks);
		// console.log(this.$el.lastChild.innerHTML);
		this.listenTo(this.collection, 'reset', this.renderAllPreviewBooks);
	},
	renderAllPreviewBooks: function(){
		this.$el.empty();
		this.collection.each(this.renderPreviewView, this);
	},
	renderPreviewView: function(book){
		var bookModel = new App.Views.BookPreviewView({model: book});
		this.$el.append(bookModel.$el);
		// this.$el.masonry('appended', bookModel.$el);
		// App.grid.append(bookModel.$el).masonry( 'appended', bookModel.$el ).masonry();
	}
});
