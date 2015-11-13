App.Views.TopicsTagView = Backbone.View.extend({
	tagName: 'button',
	className: 'tag col-lg-6 col-md-6 col-sm-6 col-xs-6',
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
		$('html, body').animate({ scrollTop: 0 }, 0);
		App.tagID = this.model.get('id');
		App.books = new App.Collections.BookCollection();
		App.books.fetchTagBooks();
		App.router.navigate('tags/' + App.tagID);
	}
})