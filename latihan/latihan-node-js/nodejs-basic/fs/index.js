const fs = require('fs')


const read = (error, data) => {
  if(error){
    if(error.errno == -2){
      console.log('data tidak di temukan')
      return
    }
    console.log('gagal membaca berkas')
    return
  }
  console.log(data)
}


fs.readFile('notes.txt','UTF-8', read)

const readStream = fs.createReadStream('./fs/notes.txt',{
  highWaterMark: 10
})

readStream.on('readable', () => {
  try{
    process.stdout.write(`[${readStream.read()}]`);
  }catch (error){
    console.log(error)
  }
}
)

readStream.on('end', () => {
  console.log('Done')
})
