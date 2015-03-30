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
		console.log(tag.name);
		if (tag.get('name').match(/\d+/)) {
			this.$el.find('#grades').append(tagModel.$el);
		} else {
			this.$el.find('#categories').append(tagModel.$el);
		}
	}
});