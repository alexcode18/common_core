App.Views.BookPreviewView = Backbone.View.extend({
	tagName: 'div',
	className: 'post_box grid-item col-lg-3 col-md-3 col-sm-4 col-xs-12',
	initialize: function() {
		this.template = HandlebarsTemplates['bookPreview'];
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'remove', this.render);
		this.render();
	},
	events: {
		'click': 'showBookInModal',
		'tap': 'showBookInModal'
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		this.$el.attr('id', this.model.toJSON().id);
	},
	showBookInModal: function() {
		App.bookModalView.showBook(this.model);
	}
});