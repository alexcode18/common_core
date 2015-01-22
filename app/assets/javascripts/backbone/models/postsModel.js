App.Models.Post = Backbone.Model.extend({
	urlRoot: '/posts',
	initialize: function(){
		console.log('created New Posts Model.');
		// this.tags = new App.Models.Tag;
  //   this.tags.url = '/posts/' + this.id + '/tags';
  //   this.tags.on("reset", this.updateCounts);
		// this.tags = new App.Models.Tag();
	 //  this.tags.url = '/posts/' + this.id + '/tags';
	 //  this.tags.on("reset", this.updateCounts);
	}
	// relations: [{
	// 	type: Backbone.HasMany,
	// 	key: 'tags',
	// 	relatedModel: 'Tag',
	// 	collectionType: 'TagCollection',
	// 	reverseRelation: {
	// 		key: 'posts',
	// 		includeinJSON: true
	// 	}	
	// }]
})