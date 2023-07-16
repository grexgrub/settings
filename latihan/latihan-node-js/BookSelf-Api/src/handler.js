const { nanoid } = require('nanoid')
const books = require('./books')

const bookAddHandler = (request, h) => {
	const {
		name, year, author, summary, publisher, pageCount, readPage, reading,
	} = request.payload

	if (name == null) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal menambahkan buku. Mohon isi nama buku',
		})
		response.code(400)
		return response
	}

	if (pageCount < readPage) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
		})
		response.code(400)
		return response
	}

	const id = nanoid(16)
	const insertedAt = new Date().toISOString()
	const updatedAt = insertedAt
	let finished
	if (readPage === pageCount) {
		finished = true
	} else {
		finished = false
	}

	const newBook = {
		id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt,
	}

	books.push(newBook)

	const success = books.filter((b) => b.id === id).length > 0

	if (success) {
		const response = h.response({
			status: 'success',
			message: 'Buku berhasil ditambahkan',
			data: {
				bookId: id,
			},
		})

		response.code(201)
		return response
	}
	const response = h.response({
		status: 'fail',
		message: 'internal server error',
	})
	response.code(500)
	return response
}

const getAllBookHandler = (request, h) => {
	const { name, reading, finished } = request.query

	if(reading == 1 && finished == 1){
		let book = books.filter(b => {
			if(b.reading === true && b.finished === true){
				return true
			}
			return false
		})

		const bookAll = []
		book.forEach(b => {
			let bookTemp = {
				id: b.id,
				name: b.name,
				publisher: b.publisher
			}
			bookAll.push(bookTemp)
		})

		if (book.length > 0){
			const response = h.response({
				status: 'success',
				data: {
					books: bookAll.filter(b => b)
				}
			})
			response.code(200)
			return response
		}
		const response = h.response({
			status: 'fail',
			message: 'Buku tidak di temukan'
		})
		response.code(404)
		return response
	}

	if (name != null) {
		const book = []
		books.forEach((b) => {
			if (b.name.toLowerCase().includes(name.toLowerCase())) {
				book.push(b)
			}
		})
		if (book.length > 0) {
			const bookAll = []
			book.forEach((b) => {
				const bookTemp = {
					id: b.id,
					name: b.name,
					publisher: b.publisher,
				}
				bookAll.push(bookTemp)
			})

			const response = h.response({
				status: 'success',
				data: {
					books: bookAll.filter((b) => b),
				},
			})
			response.code(200)
			return response
		}

		const response = h.response({
			status: 'fail',
			message: 'Buku tidak ditemukan',
		})
		response.code(404)
		return response
	}

	if (reading != null) {
		const book = books.filter((b) => b.reading == reading)
		if (book.length > 0) {
			const bookAll = []
			book.forEach((b) => {
				const bookTemp = {
					id: b.id,
					name: b.name,
					publisher: b.publisher,
				}
				bookAll.push(bookTemp)
			})

			const response = h.response({
				status: 'success',
				data: {
					books: bookAll.filter((b) => b),
				},
			})
			response.code(200)
			return response
		}
	}

	if (finished != null) {
		const book = books.filter((b) => b.finished == finished)
		if (book.length > 0) {
			const bookAll = []
			book.forEach((b) => {
				const bookTemp = {
					id: b.id,
					name: b.name,
					publisher: b.publisher,
				}
				bookAll.push(bookTemp)
			})

			const response = h.response({
				status: 'success',
				data: {
					books: bookAll.filter((b) => b),
				},
			})
			response.code(200)
			return response
		}
	}

	const bookAll = []
	books.forEach((b) => {
		const bookTemp = {
			id: b.id,
			name: b.name,
			publisher: b.publisher,
		}
		bookAll.push(bookTemp)
	})

	const response = h.response({
		status: 'success',
		data: {
			books: bookAll.filter((b) => b),
		},
	})
	response.code(200)
	return response
}

const getBookById = (request, h) => {
	const { bookId } = request.params

	const book = books.filter((b) => b.id === bookId)[0]

	if (book !== undefined) {
		const response = h.response({
			status: 'success',
			data: {
				book,
			},
		})
		response.code(200)
		return response
	}
	const response = h.response({
		status: 'fail',
		message: 'Buku tidak ditemukan',
	})
	response.code(404)
	return response
}

const bookEditById = (request, h) => {
	const { bookId } = request.params
	const {
		name, year, author, summary, publisher, pageCount, readPage, reading,
	} = request.payload

	const index = books.findIndex((b) => b.id === bookId)
	if (index === -1) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal memperbarui buku. Id tidak ditemukan',
		})
		response.code(404)
		return response
	}

	if (name == null) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal memperbarui buku. Mohon isi nama buku',
		})
		response.code(400)
		return response
	}

	if (pageCount < readPage) {
		const response = h.response({
			status: 'fail',
			message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
		})
		response.code(400)
		return response
	}

	const updatedAt = new Date().toISOString()
	let finished
	if (readPage === pageCount) {
		finished = true
	} else {
		finished = false
	}

	if (index !== -1) {
		books[index] = {
			...books[index],
			name,
			year,
			author,
			summary,
			publisher,
			pageCount,
			readPage,
			finished,
			reading,
			updatedAt,
		}
	}

	const response = h.response({
		status: 'success',
		message: 'Buku berhasil diperbarui',
	})
	response.code(200)
	return response
}

const deleteBookById = (request, h) => {
	const { bookId } = request.params

	const index = books.findIndex((b) => b.id === bookId)

	if (index !== -1) {
		books.splice(index, 1)
		const response = h.response({
			status: 'success',
			message: 'Buku berhasil dihapus',
		})
		response.code(200)
		return response
	}

	const response = h.response({
		status: 'fail',
		message: 'Buku gagal dihapus. Id tidak ditemukan',
	})
	response.code(404)
	return response
}

module.exports = {
	bookAddHandler, getAllBookHandler, getBookById, bookEditById, deleteBookById,
}
