document.getElementById('albumAdd').addEventListener('click', function() {
  var span = this.querySelector('span')
  var otherbutton = document.getElementById('albumListened')
  var otherspan = document.getElementById('albumListened').querySelector('span')

  if (span.classList.contains('glyphicon-ban-circle')) {
    fetch('/albums', {
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
    this.classList.add('unclicked')
    this.classList.remove('clicked')
    span.classList.remove('glyphicon-ok')
    span.classList.add('glyphicon-ban-circle')
    otherbutton.classList.remove('unclicked')
    otherbutton.classList.remove('clicked')
    otherbutton.classList.add('clicked')
    otherspan.classList.remove('glyphicon-ban-circle')
    otherspan.classList.remove('glyphicon-ok')
    otherspan.classList.add('glyphicon-ban-circle')
    dataQueued = false
    albumRemoved()
  }
})

document.getElementById('albumListened').addEventListener('click', function() {
  var span = this.querySelector('span')
  var otherbutton = document.getElementById('albumAdd')
  var otherspan = document.getElementById('albumAdd').querySelector('span')

  if (span.classList.contains('glyphicon-ban-circle') && dataQueued == false ) {
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
    this.classList.add('clicked')
    this.classList.remove('unclicked')
    span.classList.remove('glyphicon-ban-circle')
    span.classList.add('glyphicon-ok')
    otherspan.classList.remove('glyphicon-ban-circle')
    otherspan.classList.add('glyphicon-ok')
    dataQueued = true
    albumAddFinished()
  }
  else if (span.classList.contains('glyphicon-ban-circle')) {
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
    this.classList.add('clicked')
    this.classList.remove('unclicked')
    otherbutton.classList.remove('unclicked')
    otherbutton.classList.remove('clicked')
    otherbutton.classList.add('clicked')
    span.classList.remove('glyphicon-ban-circle')
    span.classList.add('glyphicon-ok')
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
    this.classList.add('unclicked')
    this.classList.remove('clicked')
    span.classList.remove('glyphicon-ok')
    span.classList.add('glyphicon-ban-circle')
    albumNotFinished()
  }
})
