App.Models.Author = Backbone.Model.extend({
	url: '/authors',
	initialize: function(){
		console.log('created New Authors Model.');
    this.posts = new App.Models.Post;
    this.posts.url = '/author/' + this.id + '/posts';
    this.posts.on("reset", this.updateCounts);
	}
	// relations: [{
	// 	type: Backbone.HasMany,
	// 	key: 'posts',
	// 	relatedModel: 'Post',
	// 	collectionType: 'PostCollection',
	// 	reverseRelation: {
	// 		type: Backbone.HasOne,
	// 		key: 'author',
	// 		includeinJSON: true
	// 	}
	// }]
})