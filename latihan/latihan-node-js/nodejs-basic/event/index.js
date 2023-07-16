const { EventEmitter } = require('events')


const birthDayEventHandler = (nama) => {
    console.log(`Selamat ulang tahun ${nama}!`)
}


const eventEmitter = new EventEmitter();


eventEmitter.on('birthday', birthDayEventHandler)
eventEmitter.emit('birthday', 'Rikza')
