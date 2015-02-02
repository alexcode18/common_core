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
		App.tagID = this.model.get('id');
		pickedBooks = this.model.toJSON().books;
		var books = new App.Collections.BookCollection();
		books.add(this.model.get('books'));
		App.booksListView = new App.Views.BooksListView({collection: books});
	}
})