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
		this.$el.parent().css('display', 'none');
	},
	show: function() {
		this.$el.parent().css('display', 'block');
	},
	prevBook: function() {
		this.model = App.books.get(this.model.toJSON().id - 1);
		console.log(this.model);
		this.renderBook();
	},
	nextBook: function() {
		this.model = App.books.get(this.model.toJSON().id + 1);
		console.log(this.model);
		this.renderBook();
	}
});