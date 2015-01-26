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
	App.tags = new App.Collections.TagCollection();
	
	App.tagsListView = new App.Views.TagsListView({collection: App.tags});
	App.tags.fetch({reset: true});
	// App.authors = new App.Collections.AuthorCollection();
	// App.authors.fetch({reset: true});
	App.booksListView = new App.Views.BooksListView({collection: App.books});
	App.books.fetch({reset: true});
	console.log(App.booksListView);
	$('body').on('mouseenter', '.post_box', renderImageHover);
	$('body').on('mouseleave', '.post_box', hideImageHover);
	// $('body').on('click', '.tag', showTaggedBooks);
	// $('window').on('scroll', 'body', 'scrollAndShow');
	App.bookModalView = new App.Views.BookModalView();
	// $(window).scroll(function() {
 //    if($(window).scrollTop() == $(document).height() - $(window).height()) {
 //           App.booksListView.getMore();// ajax call get data from server and append to the div
 //    }
	// });
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

// function scrollAndShow(){
// 	console.log('scrollAndShow');
// 	App.booksListView.showMore();
// }

