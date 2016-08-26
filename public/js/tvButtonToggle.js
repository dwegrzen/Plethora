document.getElementById('showAdd').addEventListener('click', function() {
  var span = this.querySelector('span')
  var dataRaw = document.getElementById('dataRaw').getAttribute('data-raw')
  var dataId = document.getElementById('dataRaw').getAttribute('data-id')

  if (span.classList.contains('glyphicon-plus')) {
    fetch('/shows', {
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
    fetch('/shows?shows_id=' + dataId, {
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

document.getElementById('showWatched').addEventListener('click', function() {
  var span = this.querySelector('span')
  var dataId = document.getElementById('dataRaw').getAttribute('data-id')

  if (span.classList.contains('glyphicon-eye-close')) {
    fetch('/showstatus', {
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
    fetch('/showstatus', {
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
