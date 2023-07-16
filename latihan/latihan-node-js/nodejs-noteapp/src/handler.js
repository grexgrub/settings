const notes = require('./notes')
const { nanoid } = require('nanoid')

const homePageHandler = (request,h) => {
  return `halo world`
}

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload

  const id = nanoid(16)
  const createdAt = new Date().toISOString()
  const updatedAt = createdAt

  const newNote = {
    title,tags,body,id,createdAt,updatedAt,
  }

  notes.push(newNote)

  const isSuccess = notes.filter(note => note.id == id).length > 0

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  }
  
  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });

  response.code(500);
  return response;
}
const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes,
  },
})
const editNoteByIdHandler = (request,h) => {
  const { id } = request.params
  const { title, tags, body } = request.payload

  const updatedAt = new Date().toISOString()

  const index = notes.findIndex(note => note.id === id)

  if(index != -1){
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    }

    const response = h.response({
      status: 'success',
      massage: 'Catatan berhasil di perbarui'
    })

    response.code(201)
    return response
  }

  const response = h.response({
    statuss: 'fail',
    massage: 'Catatan tidak dapat di temukan'
  })
  response.code(404)
  return response
}
const deleteNoteByIdHandler = (request,h) => {
  const { id } = request.params

  const index = notes.findIndex(note => note.id === id)

  if(index != -1){
    notes.splice(index, 1)

    const response = h.response({
      status: 'success',
      massage: 'Catatan berhasil di perbarui'
    })

    response.code(200)
    return response
  }
    const response = h.response({
      status: 'fail',
      massage: 'Catatan tidak di temukan'
    })

    response.code(404)
    return response

  
}
const getNoteHandler = (request,h) => {
  const { id } = request.params
  

  const note = notes.filter(note => note.id === id)[0]

  if(note !== undefined){
    return{
    status: 'success',
    data: {
      note
    }}
  }
}

module.exports = {homePageHandler, addNoteHandler, getAllNotesHandler,editNoteByIdHandler,deleteNoteByIdHandler,getNoteHandler}
