document.getElementById('showAdd').addEventListener('click', function() {
  var span = this.querySelector('span')
  var otherbutton = document.getElementById('showWatched')
  var otherspan = document.getElementById('showWatched').querySelector('span')

  if (span.classList.contains('glyphicon-ban-circle')) {
    fetch('/shows', {
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
    showAdded()
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
    showRemoved()
  }
})

document.getElementById('showWatched').addEventListener('click', function() {
  var span = this.querySelector('span')
  var otherbutton = document.getElementById('showAdd')
  var otherspan = document.getElementById('showAdd').querySelector('span')

  if (span.classList.contains('glyphicon-ban-circle') && dataQueued == false ) {
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
    this.classList.add('clicked')
    this.classList.remove('unclicked')
    span.classList.remove('glyphicon-ban-circle')
    span.classList.add('glyphicon-ok')
    otherspan.classList.remove('glyphicon-ban-circle')
    otherspan.classList.add('glyphicon-ok')
    otherbutton.classList.remove('unclicked')
    otherbutton.classList.add('clicked')
    dataQueued = true
    showAddFinished()
  }
  else if (span.classList.contains('glyphicon-ban-circle'))   {
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
    this.classList.add('clicked')
    this.classList.remove('unclicked')
    span.classList.remove('glyphicon-ban-circle')
    span.classList.add('glyphicon-ok')
    showFinished()
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
    this.classList.add('unclicked')
    this.classList.remove('clicked')
    span.classList.remove('glyphicon-ok')
    span.classList.add('glyphicon-ban-circle')
    showNotFinished()
  }
})
