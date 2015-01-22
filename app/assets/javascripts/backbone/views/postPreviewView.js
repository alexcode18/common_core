App.Views.PostPreviewView = Backbone.View.extend({
	tagName: 'div',
	className: 'post_box',
	initialize: function() {
		this.template = HandlebarsTemplates['postPreview'];
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'remove', this.render);
		this.render();
	},
	render: function() {
		
		// var tagsArray = this.model.toJSON().tags;
		this.$el.html(this.template(this.model.toJSON()));
		// console.log(tagsArray);
	}
});