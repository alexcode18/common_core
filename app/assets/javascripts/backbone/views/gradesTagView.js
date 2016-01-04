App.Views.GradesTagView = Backbone.View.extend({
	tagName: 'div',
	className: 'btn col-lg-12 col-md-12 col-sm-12 col-xs-12',
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