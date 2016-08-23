import React from 'react'
import ReactDOM from 'react-dom'

import Results from './components/Results'
import tvItem from './components/TVItem'
import musicItem from './components/MusicItem'

ReactDOM.render(
  <div>
    <a href="/shows"><h1>TV</h1></a>
    <h2>Queued</h2>
    <div className="row">
      <Results component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} showQueued={true}/>
    </div>
    <h2>Finished</h2>
    <div className="row">
      <Results component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} showFinished={true}/>
    </div>
    <h2>Other</h2>
    <div className="row">
      <Results component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} addToQueue={true}/>
    </div>
    <a href="#"><h1>Music</h1></a>
    <div className="row">
      <Results component={musicItem} items={MusicItems} finished={userFinishedMusic} queued={userQueuedMusic}/>
    </div>
  </div>,
    document.getElementById('results')
)
