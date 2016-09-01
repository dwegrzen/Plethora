document.getElementById('movieAdd').addEventListener('click', function() {
  var span = this.querySelector('span')
  var otherbutton = document.getElementById('movieWatched')
  var otherspan = document.getElementById('movieWatched').querySelector('span')

  if (span.classList.contains('glyphicon-ban-circle')) {
    fetch('/movies', {
      method: 'POST',
      body: JSON.stringify(dataRaw),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.classList.add('clicked')
    this.classList.remove('unclicked')
    span.classList.add('glyphicon-ok')
    span.classList.remove('glyphicon-ban-circle')
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
    this.classList.add('unclicked')
    this.classList.remove('clicked')
    span.classList.remove('glyphicon-ok')
    span.classList.add('glyphicon-ban-circle')
    otherbutton.classList.remove('unclicked')
    otherbutton.classList.remove('clicked')
    otherbutton.classList.add('unclicked')
    otherspan.classList.remove('glyphicon-ban-circle')
    otherspan.classList.remove('glyphicon-ok')
    otherspan.classList.add('glyphicon-ban-circle')
    dataQueued = false
    movieRemoved()
  }
})

document.getElementById('movieWatched').addEventListener('click', function() {
  var span = this.querySelector('span')
  var otherbutton = document.getElementById('movieAdd')
  var otherspan = document.getElementById('movieAdd').querySelector('span')

  if (span.classList.contains('glyphicon-ban-circle') && dataQueued == false ) {
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
    this.classList.add('clicked')
    this.classList.remove('unclicked')
    span.classList.remove('glyphicon-ban-circle')
    span.classList.add('glyphicon-ok')
    otherspan.classList.remove('glyphicon-ban-circle')
    otherspan.classList.add('glyphicon-ok')
    otherbutton.classList.remove('unclicked')
    otherbutton.classList.add('clicked')
    dataQueued = true
    movieAddFinished()
  }
  else if (span.classList.contains('glyphicon-ban-circle')) {
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
    this.classList.add('clicked')
    this.classList.remove('unclicked')
    span.classList.remove('glyphicon-ban-circle')
    span.classList.add('glyphicon-ok')
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
    this.classList.add('unclicked')
    this.classList.remove('clicked')
    span.classList.remove('glyphicon-ok')
    span.classList.add('glyphicon-ban-circle')
    movieNotFinished()
  }
})
