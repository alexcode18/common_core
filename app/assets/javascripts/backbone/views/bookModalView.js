 App.Views.BookModalView = Backbone.View.extend({
	el: '#popup_book',
	initialize: function(){
		this.template = HandlebarsTemplates['bookModal'];
	},
	events: {
		'click .prev_button': 'prevBook',
		'click .next_button': 'nextBook',
		'click .close_button': 'hide',
		'click #popup_bkgd': 'hide',
		'click .tag':'renderTagBooks'
	},
	renderBook: function() {
		this.$el.empty();
		this.$el.html(this.template(this.model.toJSON()));
		this.$el.find('book_info').hide().fadeIn();
		
		if (this.$el.parent().css('display') == 'block') {
			// this.$el.html().hide().fadeIn(800);
		} else {
			this.show();
		}
		
	},
	showBook: function(model) {
		this.model = model;
		this.renderBook();
	},
	hide: function() {
		this.$el.parent().fadeOut();
	},
	show: function() {
		this.$el.parent().css('display', 'block').hide().fadeIn();
	},
	prevBook: function() {
		var prevID = $('#' + this.model.toJSON().id).prev().attr('id');
		console.log(prevID);
		if (prevID != undefined){
			this.model = App.books.get(prevID);
			this.renderBook();
		}
	},
	nextBook: function() {
		var nextID = $('#' + this.model.toJSON().id).next().attr('id');
		console.log(nextID);

		if (nextID != undefined) {
			this.model = App.books.get(nextID);
			this.renderBook();	
		}
	},
	renderTagBooks: function(tag){
		pickedTag = App.tags.get($(tag.currentTarget).attr('id'));
		console.log(pickedTag);
		newTagList = new App.Views.TagView({model: pickedTag});
		newTagList.getTagBooks();
	}
});