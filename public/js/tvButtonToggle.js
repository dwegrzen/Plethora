document.getElementById('showAdd').addEventListener('click', function() {
  var span = this.querySelector('span')
  var otherspan = document.getElementById('showWatched').querySelector('span')

  if (span.classList.contains('glyphicon-plus')) {
    fetch('/shows', {
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
  }
  else {
    fetch('/shows?show_id=' + dataId, {
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
    otherspan.classList.remove('glyphicon-eye-open')
    otherspan.classList.remove('glyphicon-eye-close')
    otherspan.classList.add('glyphicon-eye-close')
    dataQueued = false
  }
})

document.getElementById('showWatched').addEventListener('click', function() {
  var span = this.querySelector('span')
  var otherspan = document.getElementById('showAdd').querySelector('span')

  if (span.classList.contains('glyphicon-eye-close') && dataQueued == false ) {
    fetch('/showaddasfinished', {
      method: 'POST',
      body: JSON.stringify({
        show: dataRaw,
        finished: true
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    span.classList.remove('glyphicon-eye-close')
    span.classList.add('glyphicon-eye-open')
    otherspan.classList.remove('glyphicon-remove')
    otherspan.classList.add('glyphicon-plus')
    dataQueued = true
  }
  else if (span.classList.contains('glyphicon-eye-close'))   {
    fetch('/showstatus', {
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
    span.classList.remove('glyphicon-eye-close')
    span.classList.add('glyphicon-eye-open')
  }
  else {
    fetch('/showstatus', {
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
    span.classList.remove('glyphicon-eye-open')
    span.classList.add('glyphicon-eye-close')
  }
})
