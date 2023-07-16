const {homePageHandler,addNoteHandler,getAllNotesHandler,editNoteByIdHandler,deleteNoteByIdHandler,getNoteHandler} = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: homePageHandler
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
]


module.exports = routes
