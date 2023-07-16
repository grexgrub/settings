const mysql = require('mysql')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zanra24',
    database: 'noteapp'
})



module.exports = {connection}
