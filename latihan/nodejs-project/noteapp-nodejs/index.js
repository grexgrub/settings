'use strict'
const Hapi = require('@hapi/hapi')
const Path = require('path')
const Hoek = require('@hapi/hoek')
const routes = require('./routes/routes')


const init = async () => {
  const server = Hapi.server({
    port: 7000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      },
      files: {
        relativeTo: Path.join(__dirname, 'public')
      }
    }
  })

  await server.register([require('@hapi/vision'), require('@hapi/inert')])

  server.views({
    engines:{
      hbs: require('handlebars')
  },
  relativeTo: __dirname,
  path: 'views',
  })

  server.route(routes)

  await server.start()
  console.log(`Server runing in ${server.info.uri}`)
}

init()
