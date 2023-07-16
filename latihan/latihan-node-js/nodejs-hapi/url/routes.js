const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'selamat datang di homepage'
    }
  },
  {
    method: 'GET',
    path: '/perkenalan',
    handler: (request, h) => {
        const { nama,alamat } = request.query
        return `Halo ${nama} dari ${alamat}`
    }
  },
  {
    method: ['POST','PUT','DELETE'],
    path: '/',
    handler: (request, h) => {
        return 'Halaman tidak mendukung method'
    }
  },
  {
    method: 'GET',
    path: '/about/{nama?}',
    handler: (request, h) => {
        const { nama = 'kamu'} = request.params
        return `selamat datang di about, ${nama}`
    }
  },
  {
    method: ['POST','PUT','DELETE'],
    path: '/about',
    handler: (request, h) => {
        return `halaman tidak mendukung method`
    }
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
        return `halaman tidak di temukan`
    }
  },

]



module.exports = routes
