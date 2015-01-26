App.Views.TagView = Backbone.View.extend({
	tagName: 'button',
	className: 'tag',
	initialize: function() {
		this.template = HandlebarsTemplates['listTag'];
		this.renderTag();
	},
	events: {
		'click button':'getTagBooks'
	},
	renderTag: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},
	getTagBooks: function() {
		console.log('getTagBooks');
		pickedBooks = this.model.books;
		console.log(pickedBooks);
		// App.books = Book.find();
		// var this = getThis();
		// this.tag = tag.toJSON().id;
		// console.log(this.tag);
		// this.$el.append(this.template(tag.toJSON()));
		
		// App.postsListView = new App.Views.PostsListView({collection: App.posts});
		// App.posts.fetch({reset: true});
	}
})