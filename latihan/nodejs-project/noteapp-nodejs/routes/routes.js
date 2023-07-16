const { getAllNote, createNote,readNote,deleteNote,addNote } = require('../Controller/noteController') 

const Path = require('path')


module.exports = [
  {
    method: 'GET',
    path: '/note',
    handler: getAllNote, 
     
  },
  {
    method: 'POST',
    path: '/note',
    handler: createNote 
  },
  {
    method: 'GET',
    path: '/note/{id}',
    handler: readNote 
  },
  {
    method: 'GET',
    path: '/addNote',
    handler: addNote 
  },
  {
    method: 'DELETE',
    path: '/delete',
    handler: deleteNote 
  },
  {
    method: 'GET',
    path: '/css/{fileOrfolder}/{file?}',
    handler: {
      file: function ( request ){
        if(request.params.file){
          return `css/${ request.params.fileOrfolder }/${request.params.file}.css`
        }
        return `css/${ request.params.fileOrfolder }.css`
      },
    } 
  }, 
  {
    method: 'GET',
    path: '/note/css/{fileOrfolder}/{file?}',
    handler: {
      file: function ( request ){
        if(request.params.file){
          return `css/${ request.params.fileOrfolder }/${request.params.file}.css`
        }
        return `css/${ request.params.fileOrfolder }.css`
      },
    } 
  }, 
  {
    method: 'GET',
    path: '/js/{fileOrfolder}/{file?}',
    handler: {
      file: function ( request ){
        if(request.params.file){
          return `js/${ request.params.fileOrfolder }/${request.params.file}.js`
        }
        return `js/${ request.params.fileOrfolder }.js`
      },
    } 
  }, 
  {
    method: 'GET',
    path: '/note/js/{fileOrfolder}/{file?}',
    handler: {
      file: function ( request ){
        if(request.params.file){
          return `js/${ request.params.fileOrfolder }/${request.params.file}.js`
        }
        return `js/${ request.params.fileOrfolder }.js`
      },
    } 
  }, 
]

