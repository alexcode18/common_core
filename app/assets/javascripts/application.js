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
<<<<<<< HEAD
	App.books = new App.Collections.BookCollection();
=======
	App.router = new App.Routers.Router();
	App.starterOffset = 50;

	App.tags = new App.Collections.TagCollection();
			//The tags can only be routed after the router variable has been set.
	App.tags.fetch({
		reset: true,
		success: function() {
			console.log('finished loading tags');
		}
	});
	App.tagsListView = new App.Views.TagsListView({collection: App.tags});
	App.tagID = undefined;

	App.books = new App.Collections.BookCollection();
	App.books.fetch({
		reset: true,
		//The router can only be called after all the books have been fetched
		success: function() {
			console.log('finished loading books');
			App.router.on('route:modalView', function(id){
				App.bookModalView.showBook(App.books.get(id));
			});
			App.router.on('route:tagView', function(id){

			});
		}
	});
>>>>>>> button_link_changes
	App.booksListView = new App.Views.BooksListView({collection: App.books});
	App.books.fetch({reset: true});
	App.tags = new App.Collections.TagCollection();
	console.log(App.books);

	App.tagsListView = new App.Views.TagsListView({collection: App.tags});
	App.tags.fetch({reset: true});

	console.log('App.books' + App.books);
	console.log(App.booksListView);
	App.bookModalView = new App.Views.BookModalView();
<<<<<<< HEAD
=======

>>>>>>> button_link_changes
	$('body').on('mouseenter', '.post_box', renderImageHover);
	$('body').on('mouseleave', '.post_box', hideImageHover);
	$('body').on('mousedown', '#open_menu', displayTagMenu);
	$('body').on('mousedown', 'h1', refreshPage);
<<<<<<< HEAD
	// $(window).on('scroll', '#open_menu', displayTagMenu);

	// $(window).scroll(function() {
	// 	if ($(window).scrollTop() == $(document).height() - $(window).height()){
 //    	console.log('trying to see how many times this runs');
 //    	App.books.fetchMoreBooks();// ajax call get data from server and append to the div
 //    }
	// });
=======
	$('body').on('mousedown', '#popup_bkgd', hideModal);
	//Infinite scroll feature was causing the tagged book modals to break, 
	//because not all the book information was grabbed from the backend yet.
	$(window).scroll(function() {
		if ($(window).scrollTop() > $('body').height() / 2){
    	App.books.fetchMoreBooks();// ajax call get data from server and append to the div
    }
	});

	Backbone.history.start();
>>>>>>> button_link_changes
});

function refreshPage(){
	console.log('refreshPage');
	App.books = new App.Collections.BookCollection();
	App.booksListView = new App.Views.BooksListView({collection: App.books});
	App.books.fetch({reset: true});
<<<<<<< HEAD
=======
	App.router.navigate('');
	App.bookModalView.hide();
>>>>>>> button_link_changes
	// App.booksListView = new App.Views.BooksListView({collection: App.books});
	// App.books.fetch({reset: true});
}

function renderImageHover(){
	console.log('should be rendering HoverHeight');
	var imageHeight = $(this).find('.thumbnail').css('height');
	var imageHover = $(this).find('.book_hover');
	imageHover.css('height', imageHeight);
	imageHover.css('display', 'block');
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
				$('#open_menu').text('show more');	
			} else {
				$('#open_menu').text('hide');
			}
		}
	});
}

