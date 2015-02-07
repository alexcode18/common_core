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
		App.bookModalView.hide();
		console.log(this.model);
		App.tagID = this.model.get('id');
		var books = new App.Collections.BookCollection();
		books.add(this.model.get('books'));
		console.log('tag books: ' + books);
		App.booksListView = new App.Views.BooksListView({collection: books});
		App.router.navigate('tags/' + App.tagID);
	}
})