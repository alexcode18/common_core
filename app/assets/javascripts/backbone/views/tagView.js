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
		// App.books = pickedBooks;
		console.log(pickedBooks);
		// var this = getThis();
		// this.tag = tag.toJSON().id;
		// console.log(this.tag);
		// this.$el.append(this.template(tag.toJSON()));
		App.booksListView = new App.Views.BooksListView({collection: this.model.collection});
		// pickedBooks.fetch({reset: true});
	}
})