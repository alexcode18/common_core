// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars
//= require_self
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .
var App = {
	Models: {}, 
	Collections: {}, 
	Views: {}, 
	Routers: {}
};


$(function() {
	App.starterOffset = 30;
	App.books = new App.Collections.BookCollection();
	App.booksListView = new App.Views.BooksListView({collection: App.books});
	App.books.fetch({reset: true});
	App.tags = new App.Collections.TagCollection();
	console.log(App.books);

	App.tagsListView = new App.Views.TagsListView({collection: App.tags});
	App.tags.fetch({reset: true});
	App.tagID = undefined;

	//This variable is mentioned in bookCollection.js and tagView.js
	// It aligns with the limit used in the controller to setup how many books load at a time.
	App.bookModalView = new App.Views.BookModalView();
	$('body').on('mouseenter', '.post_box', renderImageHover);
	$('body').on('mouseleave', '.post_box', hideImageHover);
	$('body').on('mousedown', '#open_menu', displayTagMenu);
	$('body').on('mousedown', 'h1', refreshPage);

	//Infinite scroll feature was causing the tagged book modals to break, 
	//because not all the book information was grabbed from the backend yet.
	// $(window).scroll(function() {
	// 	if ($(window).scrollTop() == $(document).height() - $(window).height()){
 //    	App.books.fetchMoreBooks();// ajax call get data from server and append to the div
 //    }
	// });
});

function refreshPage(){
	App.tagID = undefined;
	App.offset = App.starterOffset;
	App.books = new App.Collections.BookCollection();
	App.booksListView = new App.Views.BooksListView({collection: App.books});
	App.books.fetch({reset: true});
	// App.booksListView = new App.Views.BooksListView({collection: App.books});
	// App.books.fetch({reset: true});
}

function renderImageHover(){
	var imageWidth = $(this).find('.thumbnail').css('width');
	var imageHover = $(this).find('.book_hover');
	imageHover.css('width', imageWidth);
	imageHover.css('display', 'block').hide().fadeIn();
}

function hideImageHover(){
	var imageHover = $(this).find('.book_hover');
	imageHover.css('display', 'none');
}

function displayTagMenu(){
	$('#tags_list').slideToggle({
		duration: 800,
		complete: function(){
			if ($('#tags_list').css('display') == 'none') {
				$('#open_text').text('Grades + Categories').hide().fadeIn(800);	
			} else {
				$('#open_text').text('hide').hide().fadeIn(800);
			}
		}
	});
}

