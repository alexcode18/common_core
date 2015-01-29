App.Views.TagsListView = Backbone.View.extend({
	el: '#tags_list',
	initialize: function(){
		this.renderTagList();
		this.listenTo(this.collection, 'add', this.renderTagList);
		this.listenTo(this.collection, 'reset', this.renderTagList);
	},
	renderTagList: function() {
		this.collection.each(this.renderTag, this);
	},
	renderTag: function(tag) {
		var tagModel = new App.Views.TagView({model: tag});
		if (tag.get('name').match(/\d+/)) {
			this.$el.find('#grades').append(tagModel.$el);
		} else {
			this.$el.find('#categories').append(tagModel.$el);
		}
	}
	// renderModalTags: function() {
	// 	this.collection.each(this.getModalTag, this);
	// },
	// getModalTag: function(tag) {
	// 	var tagModel = new App.Views.TagView({model: tag});
	// 	$('.tags_container').append(tagModel.$el);
	// }
});