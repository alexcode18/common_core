App.Models.Tag = Backbone.Model.extend({
	url: '/tags',
	initialize: function(){
		console.log('created New Tags Model.');
		this.posts = new App.Models.Post;
    this.posts.url = '/mailbox/' + this.id + '/posts';
    this.posts.on("reset", this.updateCounts);
	}
	// relations: [{
	// 	type: Backbone.HasMany,
	// 	key: 'posts',
	// 	relatedModel: 'Post',
	// 	collectionType: 'PostCollection',
	// 	reverseRelation: {
	// 		key: 'tags',
	// 		includeinJSON: true
	// 	}
	// }]
})