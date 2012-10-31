/**************************
* Application
**************************/

App = Em.Application.create();

App.SearchTextField = Em.TextField.extend({
	insertNewline: function() {
		App.booksC.loadBooks();
	}
});