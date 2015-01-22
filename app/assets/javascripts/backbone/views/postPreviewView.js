App.Views.PostPreviewView = Backbone.View.extend({
	tagName: 'div',
	className: 'post_box',
	initialize: function() {
		this.template = HandlebarsTemplates['postPreview'];
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'remove', this.render);
		this.render();
	},
	events: {
		'click  .book_hover': 'showBookInModal'
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	},
	showBookInModal: function() {
		console.log('telling modal view to render');
		App.bookModalView.showBook(this.model);
	}
});