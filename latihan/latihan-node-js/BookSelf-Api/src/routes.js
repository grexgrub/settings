const {
	bookAddHandler, getAllBookHandler, getBookById, bookEditById, deleteBookById,
} = require('./handler')

const routes = [
	{
		method: 'POST',
		path: '/books',
		handler: bookAddHandler,
	},
	{
		method: 'GET',
		path: '/books',
		handler: getAllBookHandler,
	},
	{
		method: 'GET',
		path: '/books/{bookId}',
		handler: getBookById,
	},
	{
		method: 'PUT',
		path: '/books/{bookId}',
		handler: bookEditById,
	},
	{
		method: 'DELETE',
		path: '/books/{bookId}',
		handler: deleteBookById,
	},
]

module.exports = routes
