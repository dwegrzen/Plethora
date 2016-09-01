document.getElementById('movieAdd').addEventListener('click', function() {
  var span = this.querySelector('span')
  var otherspan = document.getElementById('movieWatched').querySelector('span')

  if (span.classList.contains('glyphicon-plus')) {
    fetch('/movies', {
      method: 'POST',
      body: JSON.stringify(dataRaw),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.add('glyphicon-ok')
    span.classList.remove('glyphicon-plus')
    this.classList.add('active')
    dataQueued = true
    movieAdded()
  }
  else {
    fetch('/movies?movie_id=' + dataId, {
      method: 'DELETE',
      body: JSON.stringify({
        tmdb_id: dataRaw.tmdb_id
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-ok')
    span.classList.add('glyphicon-plus')
    this.classList.remove('active')
    otherspan.classList.remove('glyphicon-eye-open')
    otherspan.classList.remove('glyphicon-eye-close')
    otherspan.classList.add('glyphicon-eye-close')
    dataQueued = false
    movieRemoved()
  }
})

document.getElementById('movieWatched').addEventListener('click', function() {
  var span = this.querySelector('span')
  var otherspan = document.getElementById('movieAdd').querySelector('span')

  if (span.classList.contains('glyphicon-eye-close') && dataQueued == false ) {
    fetch('/movieaddasfinished', {
      method: 'POST',
      body: JSON.stringify({
        movie: dataRaw,
        finished: true
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-eye-close')
    span.classList.add('glyphicon-eye-open')
    otherspan.classList.remove('glyphicon-plus')
    otherspan.classList.add('glyphicon-ok')
    dataQueued = true
    movieAddFinished()
  }
  else if (span.classList.contains('glyphicon-eye-close')) {
    fetch('/moviestatus', {
      method: 'PATCH',
      body: JSON.stringify({
        tmdb_id: dataRaw.tmdb_id,
        finished: true
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-eye-close')
    span.classList.add('glyphicon-eye-open')
    movieFinished()
  }
  else {
    fetch('/moviestatus', {
      method: 'PATCH',
      body: JSON.stringify({
        tmdb_id: dataRaw.tmdb_id,
        finished: false
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-eye-open')
    span.classList.add('glyphicon-eye-close')
    movieNotFinished()
  }
})
