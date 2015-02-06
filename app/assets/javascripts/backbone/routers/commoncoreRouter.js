App.Routers.Router = Backbone.Router.extend({
	initialize: function() {
		App.collection = new App.Collections.BookCollection();
		App.modal = new App.Views.BookModalView();
	},
	routes: {
		'':'index',
		'books/:id':'modalView'
	},
	modalView: function(id) {
		App.modal.renderBook({
			success: function() {
				$('#' + id).find('#popup_book');
			}
		})
	}
})