const { connection } = require('../config/Database')
const { nanoid } = require('nanoid')
const ejs = require('ejs')


module.exports = { 
  getAllNote: (request,h) =>{
    return new Promise((resolve,reject) => {
        connection.query(`SELECT * from note`,
          function (err,result,fields){
            if(err) reject(err.message) 
            resolve(h.view('coba',{res : result, title: 'NOTE'},{ layout: 'core/skullHtml' }))
        })
    })
  },

  createNote: (request,h) => {
    const { judul, isi } = request.payload
    const id = nanoid(30)
    const createdAt = new Date().toISOString().split('T')[0]
    const updatedAt = createdAt
    connection.query(`INSERT INTO note (id,judul,isi,created_at,updated_at) VALUES ('${id}','${judul}','${isi}','${createdAt}','${updatedAt}')`,
      function (err,result,fields){
        res = 'Berhasil Menambahkan Note'
    }) 
    return 'good'
  },

  readNote: (request, h) => {
    const id = request.params.id
      return new Promise((resolve,reject) => {
      connection.query(`SELECT * FROM note WHERE id = '${id}'`,(err,result,fields) => {
        if(err) reject(err)
        resolve(h.view('readnote', { res: result[0], title : 'EDIT', id : id }, { layout: 'core/edit'}))
      })
    })
  },

  deleteNote: (request, h) => {
    const id = request.query.delete
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM note WHERE id = '${id}'`, (err, result, fields) => {
        if(err) throw err

      })
    }) 
    return reply().redirect('http://localhost:7000/note')
  },
  addNote: (request,h) => {
    return h.view('addNote', { title: 'addNote'}, { layout: 'core/skullHtml'})
  }

} 
