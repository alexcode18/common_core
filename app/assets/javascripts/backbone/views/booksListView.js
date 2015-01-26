App.Views.BooksListView = Backbone.View.extend({
	el: '#columns',
	initialize: function(){
		this.$el.empty();
		this.offset = 15;
		// _.bindAll(this, 'offset');
		// _.bindAll(this, 'collection');
		console.log('initialize Books List View');
		this.listenTo(this.collection, 'add', this.renderAllPreviewBooks);
		this.listenTo(this.collection, 'reset', this.renderAllPreviewBooks);
	},
	// events: {
	// 	'click #columns':'showMore'
	// },
	renderAllPreviewBooks: function(){
		console.log('renderAllPreviewBooks');
		this.collection.each(this.renderPreviewView, this);
	},
	renderPreviewView: function(book){
		console.log('rendered Book Preview');
		var bookModel = new App.Views.BookPreviewView({model: book});
		this.$el.append(bookModel.$el);
	},
	getMore: function() {
		console.log('start getting more');
		newOffset = {
			offset: this.offset
		}
		$.get('books/get_more', newOffset)
		.done(function(data){
			console.log(data);
			this.collection = data;
			this.renderAllPreviewBooks();
			this.offset += 15;
		});
	}
});
