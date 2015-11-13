App.Views.TagsListView = Backbone.View.extend({
	el: '#tags_list',
	// className: 'col-lg-12 col-md-12 col-sm-12 col-xs-12',
	initialize: function(){
		this.renderTagList();
		this.listenTo(this.collection, 'add', this.renderTagList);
		this.listenTo(this.collection, 'reset', this.renderTagList);
	},
	//Tells each row in the tags database to convert into menu button/ 
	renderTagList: function() {
		this.collection.each(this.renderTag, this);
	},
	renderTag: function(tag) {
		
		if (tag.get('name').match(/\d+/)) {
			var tagModel = new App.Views.TopicsTagView({model: tag});
			//adds the tag to the grades category if it starts with a number
			this.$el.find('#grades').append(tagModel.$el);
		} else {
			var tagModel = new App.Views.GradesTagView({model: tag});
			//when in doubt, it adds the tag under categories 
			this.$el.find('#categories').append(tagModel.$el);
		}
	}
});