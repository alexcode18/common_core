App.Views.TagView = Backbone.View.extend({
	tagName: 'button',
	className: 'tag',
	initialize: function() {
		this.template = HandlebarsTemplates['listTag'];
		this.renderTag();
	},
	events: {
		'click':'getTagBooks'
	},
	renderTag: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},
	getTagBooks: function() {
		console.log('getTagBooks');
		pickedBooks = this.model.toJSON().books;
		console.log(pickedBooks);
		var books = new App.Collections.BookCollection();
		books.add(this.model.get('books'));
		App.booksListView = new App.Views.BooksListView({collection: books});
		// pickedBooks.fetch({reset: true});
	}
})