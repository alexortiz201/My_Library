/**************************
* Views
**************************/

App.booksV = Em.View.extend({
	loaderBinding: 'App.booksC.loader',
	firstRunBinding: 'App.booksC.firstRun'
});

App.bookV = Em.View.extend(Em.Metamorph, {
	rowEnd: function() {
		var index = this.getPath('_parentView.contentIndex') + 1;
		if(index % 4 == 0) {
			return true;
		}
		return false
	}.property()
});