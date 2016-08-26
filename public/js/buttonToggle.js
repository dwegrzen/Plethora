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
    fetch('/movies?movie_id=' + dataId, {
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
  var span = this.querySelector('span')
  var dataId = document.getElementById('dataRaw').getAttribute('data-id')

  if (span.classList.contains('glyphicon-eye-close')) {
    fetch('/moviestatus', {
      method: 'PATCH',
      body: JSON.stringify({
        movie_id: dataId,
        finished: true
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-eye-close')
    span.classList.add('glyphicon-eye-open')
  }
  else {
    fetch('/moviestatus', {
      method: 'PATCH',
      body: JSON.stringify({
        movie_id: dataId,
        finished: false
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-eye-open')
    span.classList.add('glyphicon-eye-close')
  }
})

document.getElementById('albumAdd').addEventListener('click', function() {
  var span = this.querySelector('span')
  var dataRaw = document.getElementById('dataRaw').getAttribute('data-raw')
  var dataId = document.getElementById('dataRaw').getAttribute('data-id')

  if (span.classList.contains('glyphicon-plus')) {
    fetch('/albums', {
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
    fetch('/albums?album_id=' + dataId, {
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

document.getElementById('albumListened').addEventListener('click', function() {
  var span = this.querySelector('span')
  var dataId = document.getElementById('dataRaw').getAttribute('data-id')

  if (span.classList.contains('glyphicon-volume-off')) {
    fetch('/albumstatus', {
      method: 'PATCH',
      body: JSON.stringify({
        album_id: dataId,
        finished: true
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-volume-off')
    span.classList.add('glyphicon-headphones')
  }
  else {
    fetch('/albumstatus', {
      method: 'PATCH',
      body: JSON.stringify({
        album_id: dataId,
        finished: false
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-headphones')
    span.classList.add('glyphicon-volume-off')
  }
})
