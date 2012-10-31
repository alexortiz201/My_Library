/**************************
* Models
**************************/

App.Book = Em.Object.extend({
	title: null,
	author: null,
	type: null,
	category: null,
	comment: null
});

var data = [
	// Javascript
	{ 
		title: "Javascript Enlightment",
		author: "Cody Lindley",
		type: "PDF",
		category: "Programming: JS",
		comment: "Liked the simplicity and straightforward approach the Cody takes."
	},
	{
		title: "Javascript: The Good Parts",
		author: "Douglas Crockford",
		type: "Book",
		category: "Programming: JS",
		comment: "Technical, and concise."
	},
	{
		title: "Javascript for Web Developers",
		author: "Nicholas C. Zakas",
		type: "Book",
		category: "Programming: JS",
		comment: "Technical, and very in-depth."
	},
	// History
	{
		title: "The 48 Laws of Power",
		author: "Robert Greene",
		type: "Book",
		category: "History",
		comment: "The Three Books By this Author are amazing!"
	},
	{
		title: "The Art of Seduction",
		author: "Robert Greene",
		type: "Book",
		category: "History",
		comment: "The Three Books By this Author are amazing!"
	},
	{
		title: "The 33 Strategies of War",
		author: "Robert Greene",
		type: "Book",
		category: "History",
		comment: "The Three Books By this Author are amazing!"
	},
	// New Age
	{
		title: "Psycho-Cybernetics",
		author: "Maxwell Maltz",
		type: "Book",
		category: "New Age",
		comment: "A must read for everyone, it can help you help you."
	},
	{
		title: "100 Simple Scecrets of Happy People",
		author: "David Niven, Ph.D",
		type: "Book",
		category: "New Age",
		comment: "Quick Tips to keep a smile on your face."
	},
	// Self-Development
	{
		title: "Mastery",
		author: "George Leonard",
		type: "Book",
		category: "Self Dev",
		comment: "Mastery is a slow process."
	},
	{
		title: "The Talent Code",
		author: "Daniel Coyle",
		type: "Book",
		category: "Self Dev",
		comment: "Greatness isn't born it's grown. Scientific look into that magic called skill."
	},
	// Fiction
	{
		title: "Harry Potter and the Sorcerer's Stone",
		author: "J.K. Rowling",
		type: "Book",
		category: "Fiction",
		comment: "Nothing to say except great!"
	},
	{
		title: "Harry Potter and the Chamber of Secrets",
		author: "J.K. Rowling",
		type: "Book",
		category: "Fiction",
		comment: "Nothing to say except great!"
	},
	{
		title: "Harry Potter and the Prisoner of Azkaban",
		author: "J.K. Rowling",
		type: "Book",
		category: "Fiction",
		comment: "Nothing to say except great!"
	},
	{
		title: "Harry Potter and the Goblet of Fire",
		author: "J.K. Rowling",
		type: "Book",
		category: "Fiction",
		comment: "Nothing to say except great!"
	},
	{
		title: "Harry Potter and the Order of the Pheonix",
		author: "J.K. Rowling",
		type: "Book",
		category: "Fiction",
		comment: "Nothing to say except great!"
	},
	{
		title: "Harry Potter and the Half-Blood Prince",
		author: "J.K. Rowling",
		type: "Book",
		category: "Fiction",
		comment: "Nothing to say except great!"
	},
	{
		title: "Harry Potter and the Deathly Hallows",
		author: "J.K. Rowling",
		type: "Book",
		category: "Fiction",
		comment: "Nothing to say except great!"
	},
	{
		title: "Shantaram",
		author: "Gregory David Roberts",
		type: "Book",
		category: "Fiction",
		comment: "Love the depth of the characters, and the rags to riches theme!"
	},
	{
		title: "Atlas Shrugged",
		author: "Ayn Rand",
		type: "Book",
		category: "Fiction",
		comment: "Unread"
	},
	// Health
	{
		title: "Beyond Brawn",
		author: "Stuart McRobert",
		type: "Book",
		category: "Fiction",
		comment: "This Along with Leangains.com is the must read for health nuts! Highly Recommended!"
	},
	// Business
	{
		title: "The E Myth: Why Most Business Don't Work and What to do About It.",
		author: "Gregory David Roberts",
		type: "Book",
		category: "Business",
		comment: "Unread"
	},
	{
		title: "Never Eat Alone",
		author: "Keith Ferrazzi",
		type: "Book",
		category: "Business",
		comment: "You get ahead by who you know, your network is king!"
	},
	{
		title: "Switch",
		author: "Chip & Dan Heath",
		type: "Book",
		category: "Business",
		comment: "Learn the power of influence and the psychology behind it."
	}
	
];