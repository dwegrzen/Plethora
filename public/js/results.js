import React from 'react'
import ReactDOM from 'react-dom'

import Results from './components/Results'
import tvItem from './components/TVItem'
import musicItem from './components/MusicItem'

var tvResults = []
var musicResults = []

if (typeof TVItems != 'undefined') {
  tvResults = (
    <section className="container">
      <a href="/shows"><h1 className="text-center">TV</h1></a>

      <Results label="Queued" component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} showQueued={true}/>

      <Results label="Finished" component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} showFinished={true}/>

      <Results label="Other" component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} addToQueue={true}/>
    </section>
  )
}

if (typeof MusicItems != 'undefined') {
  musicResults = (
    <section className="container">
      <a href="/albums"><h1 className="text-center">Music</h1></a>

      <Results label="" component={musicItem} items={MusicItems} finished={userFinishedMusic} queued={userQueuedMusic}/>
    </section>
  )
}

ReactDOM.render(
  <div>
    {tvResults}
    {musicResults}
  </div>,
    document.getElementById('results')
)
