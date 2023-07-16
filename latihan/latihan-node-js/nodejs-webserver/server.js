const http = require('http')

const requestListener = (request, response) => {
    const { method,url } = request
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');


    if(method === 'POST'){
      let body = []
      
      request.on('data', chunk => body.push(chunk))
      request.on('end', () => {
          body = Buffer.concat(body).toString(); 
      })
    }

    if(url === '/'){
      if(method === 'GET'){
        response.statusCode = 200
        response.end(JSON.stringify({
          massage: 'selamat datang di homepage',
        }))
      }else{
        response.statusCode = 400
        response.end(`<h1>method ${method} tidak di dukung<h1>`)
      }
    }else if(url === '/about'){
      if(method === 'GET'){
        response.statusCode = 200
        response.end(JSON.stringify({
          massage: 'selamat datang di about!',
        }))
      }else if(method === 'POST'){
        let body = []
        response.statusCode = 200
        request.on('data', chunk => body.push(chunk))
        request.on('end', () => {
          body = Buffer.concat(body).toString()
          const { nama } = JSON.parse(body)
          response.end(JSON.stringify({
            massage: `selamat datang di about ${nama}`,
          }))
        })
      }else{
        response.statusCode = 400
        response.end(`<h1>method ${method} tidak di dukung<h1>`) 
      }
    }else {
      response.statusCode = 404
      response.end(JSON.stringify({
          massage: 'Halaman tidak di temukan!',
      }))
    }
 
    response.statusCode = 200;
};


const server = http.createServer(requestListener)

const port = 5000
const host = 'localhost'

server.listen(port,host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`)
})
