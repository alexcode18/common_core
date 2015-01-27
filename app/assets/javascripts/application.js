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
	App.books = new App.Collections.BookCollection();
	App.booksListView = new App.Views.BooksListView({collection: App.books});
	App.books.fetch({reset: true});

	App.tags = new App.Collections.TagCollection();
	console.log(App.books);

	App.tagsListView = new App.Views.TagsListView({collection: App.tags});
	App.tags.fetch({reset: true});

	console.log('App.books' + App.books);
	console.log(App.booksListView);
	App.bookModalView = new App.Views.BookModalView();
	$('body').on('mouseenter', '.post_box', renderImageHover);
	$('body').on('mouseleave', '.post_box', hideImageHover);
	$('body').on('mousedown', '#open_menu', displayTagMenu);
	
	$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
    	App.books.fetchMoreBooks();// ajax call get data from server and append to the div
    }
	});
});

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

