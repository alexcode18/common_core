App.Views.TagsListView = Backbone.View.extend({
	el: '#tags_list',
	initialize: function(){
		this.template = HandlebarsTemplates['listTag'];
		this.renderList();
		this.listenTo(this.collection, 'add', this.renderList);
		this.listenTo(this.collection, 'reset', this.renderList);
	},
	events: {
		'click .tag':'getTagPosts'
	},
	renderList: function() {
		this.$el.empty();
		this.collection.each(this.renderEachTag, this);
	},
	renderEachTag: function(tag) {
		this.tag = tag.toJSON().id;
		console.log(this.tag);
		this.$el.append(this.template(tag.toJSON()));
		// this.$el.append(tagLi);
	},
	getTagPosts: function() {
		// pickedTag = this.collection.get(this.data('id'));
		// App.posts = this.model.toJSON().posts;o
		console.log(this['model']);
		console.log(this.id);
		// App.postsListView = new App.Views.PostsListView({collection: App.posts});
		// App.posts.fetch({reset: true});
	},
	displayTagPosts: function(tag) {
		App.posts = tag.posts;
		App.posts.fetch({reset: true});
	}
});