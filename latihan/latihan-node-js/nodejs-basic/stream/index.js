const fs = require('fs')

const tulis = fs.createWriteStream('./stream/output.txt')


const baca = fs.createReadStream('./stream/input.txt',{
  highWaterMark: 15
})


baca.on('readable',() => {
  try {
    tulis.write(`${baca.read()} \n`)
  } catch(error){
    consosle.log(error)
  }
})

baca.on('end', () => {
  tulis.end('berhasil')
})
