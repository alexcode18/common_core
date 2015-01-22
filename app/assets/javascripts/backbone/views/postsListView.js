App.Views.PostsListView = Backbone.View.extend({
	el: '#columns',
	initialize: function(){
		console.log('initialize Posts List View');
		this.listenTo(this.collection, 'add', this.renderAllPreviewPosts);
		this.listenTo(this.collection, 'reset', this.renderAllPreviewPosts);
	},
	renderAllPreviewPosts: function(){
		console.log('renderAllPreviewPosts');
		this.$el.empty();
		this.collection.each(this.renderPreviewView, this);
	},
	renderPreviewView: function(post){
		console.log('rendered Post Preview');
		var postModel = new App.Views.PostPreviewView({model: post});
		this.$el.append(postModel.$el);
	}
});
