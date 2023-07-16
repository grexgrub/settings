const hapus = document.getElementsByClassName('Delete')

hapus[0].addEventListener('click', function(){
  const ajax = new XMLHttpRequest()
  ajax.open('DELETE', `/delete?delete=${this.dataset.id}`)
  ajax.onreadystatechange = function() {
   if(this.readyState === 4 && status === 200) {
      console.log('OK')
    }
  }
  ajax.send()
})

