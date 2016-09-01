document.getElementById('albumAdd').addEventListener('click', function() {
  var span = this.querySelector('span')
  var otherspan = document.getElementById('albumListened').querySelector('span')

  if (span.classList.contains('glyphicon-plus')) {
    fetch('/albums', {
      method: 'POST',
      body: JSON.stringify(dataRaw),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.add('glyphicon-remove')
    span.classList.remove('glyphicon-plus')
    this.classList.add('active')
    dataQueued = true
    albumAdded()
  }
  else {
    fetch('/albums?album_id=' + dataId, {
      method: 'DELETE',
      body: JSON.stringify({
        gn_id: dataRaw.gn_id
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-remove')
    span.classList.add('glyphicon-plus')
    this.classList.remove('active')
    otherspan.classList.remove('glyphicon-ok')
    otherspan.classList.remove('glyphicon-remove')
    otherspan.classList.add('glyphicon-ok')
    dataQueued = false
    albumRemoved()
  }
})

document.getElementById('albumListened').addEventListener('click', function() {
  var span = this.querySelector('span')
  var otherspan = document.getElementById('albumAdd').querySelector('span')

  if (span.classList.contains('glyphicon-ok') && dataQueued == false ) {
    fetch('/albumaddasfinished', {
      method: 'POST',
      body: JSON.stringify({
        music: dataRaw,
        finished: true
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-ok')
    span.classList.add('glyphicon-remove')
    otherspan.classList.remove('glyphicon-plus')
    otherspan.classList.add('glyphicon-remove')
    dataQueued = true
    albumAddFinished()
  }
  else if (span.classList.contains('glyphicon-ok')) {
    fetch('/albumstatus', {
      method: 'PATCH',
      body: JSON.stringify({
        gn_id: dataRaw.gn_id,
        finished: true
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-ok')
    span.classList.add('glyphicon-remove')
    albumFinished()
  }
  else {
    fetch('/albumstatus', {
      method: 'PATCH',
      body: JSON.stringify({
        gn_id: dataRaw.gn_id,
        finished: false
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-remove')
    span.classList.add('glyphicon-ok')
    albumNotFinished()
  }
})
