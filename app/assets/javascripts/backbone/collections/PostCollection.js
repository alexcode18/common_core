App.Collections.PostCollection = Backbone.Collection.extend({
	model: App.Models.Post,
	url: '/posts',
	initialize: function() {
		console.log('new Post collection created');
	}
});