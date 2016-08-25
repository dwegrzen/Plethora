document.getElementById('movieAdd').addEventListener('click', function() {
  var span = this.querySelector('span')
  var dataRaw = document.getElementById('dataRaw').getAttribute('data-raw')
  var dataId = document.getElementById('dataRaw').getAttribute('data-id')

  if (span.classList.contains('glyphicon-plus')) {
    fetch('/movies', {
      method: 'POST',
      body: dataRaw,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.add('glyphicon-ok')
    span.classList.remove('glyphicon-plus')
    this.classList.add('active')
  }
  else {
    fetch('/movies?movie_id=' + movies.id, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-ok')
    span.classList.add('glyphicon-plus')
    this.classList.remove('active')
  }
})

document.getElementById('movieWatched').addEventListener('click', function() {
  if (!this.classList.contains('active')) {
    fetch('/moviestatus', {
      method: 'PATCH',
      body: ,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-eye-closed')
    span.classList.add('glyphicon-eye-open')
    this.classList.add('active')
  }
  else {
    span.classList.remove('glyphicon-eye-open')
    span.classList.add('glyphicon-eye-closed')
    this.classList.remove('active')
  }
})
