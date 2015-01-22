App.Views.TagView = Backbone.View.extend({
	el: '#tags_box',
	tagName: 'p',
	className: 'tag',
	initialize: function() {
		renderTag();
	},
	renderAllTags: function() {
		console.log('renderAllTags');
		this.$el.empty();
		this.collection.each(this.renderTag, this);
	},
	renderTag: function() {
		tagName = this.model.toJSON().name;
		pTag = $('<p>').text(tagName);
		this.$el.append(pTag);
	}
})