/**************************
* Controllers
**************************/

App.booksC = Em.ArrayController.create({
    content: [],
	loader: false,
	firstRun: true,
    loadBooks: function() {
        var me = this;
        var term = me.get('term');
		var first = me.get('firstRun');
		//show loader
		me.set('loader', true);
		//no longer the first run.
		if(first == true)
			me.set('firstRun', false);

        if ( data ) {
			var books = data;
			me.set('content', []);
			$(books).each(function(index, book){
				var t = App.Book.create({
						title: book.title,
						author: book.author,
						type: book.type,
						category: book.category,
						comment: book.comment
				});
				me.pushObject(t);
			});
			me.set('loader', false);
        }
    }
});