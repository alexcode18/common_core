 App.Views.BookModalView = Backbone.View.extend({
	el: '#popup_book',
	initialize: function(){
		this.template = HandlebarsTemplates['bookModal'];
	},
	events: {
		'click .prev_button': 'prevBook',
		'click .next_button': 'nextBook',
		'click .close_button': 'hide' 
	},
	renderBook: function() {
		this.$el.empty();
		this.$el.html(this.template(this.model.toJSON()));
		
		this.show();
	},
	showBook: function(model) {
		this.model = model;
		this.renderBook();
	},
	hide: function() {
		this.$el.parent().fadeOut().css('display', 'none');
	},
	show: function() {
		this.$el.parent().css('display', 'block').fadeIn();
	},
	prevBook: function() {
		var prevID = $('#' + this.model.toJSON().id).prev().attr('id');
		console.log(prevID);
		// if (prevID != undefined){
		// } else {
		// 	prevID = $('#' + prevID).prev().attr('id');
		// }

		this.model = App.books.get(prevID);
		this.renderBook();
	},
	nextBook: function() {
		var nextID = $('#' + this.model.toJSON().id).next().attr('id');
		console.log(nextID);

		// if (nextID != undefined) {	
			
		// } else {
		// 	nextID = $('#' + nextID).next().attr('id');
		// }
		this.model = App.books.get(nextID);
		this.renderBook();
		
	}
});