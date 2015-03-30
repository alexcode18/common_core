 App.Views.BookModalView = Backbone.View.extend({
	el: '#popup_book',
	initialize: function(){
		
		console.log('book modal view initialized')
		this.template = HandlebarsTemplates['bookModal'];
	},
	events: {
		'click .prev_button': 'prevBook',
		'click .next_button': 'nextBook',
		'click .close_button': 'hide' 
	},
	renderBook: function() {
		this.$el.empty();
		console.log(this.model.toJSON());
		this.$el.html(this.template(this.model.toJSON()));
		
		this.show();
	},
	showBook: function(model) {
		console.log('show book');
		this.model = model;
		this.renderBook();
	},
	hide: function() {
<<<<<<< HEAD
		this.$el.parent().css('display', 'none');
=======
		this.$el.parent().fadeOut();
<<<<<<< HEAD

		if (App.tagID) {
			App.router.navigate('tags/' + App.tagID);
		} else {
			App.router.navigate('');
		}	
=======
>>>>>>> button_link_changes
>>>>>>> 584c33e7348811fdd35e0f54a17cb2e374bda9ba
	},
	show: function() {
		this.$el.parent().css('display', 'block');
	},
	prevBook: function() {
		if (App.books.get(this.model.toJSON().id - 1)) {
			this.model = App.books.get(this.model.toJSON().id - 1);
			this.renderBook();
		}
	},
	nextBook: function() {
		if (App.books.get(this.model.toJSON().id + 1)) {	
			this.model = App.books.get(this.model.toJSON().id + 1);
			this.renderBook();
		}
	}
});