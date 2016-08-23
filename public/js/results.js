import React from 'react'
import ReactDOM from 'react-dom'

import Results from './components/Results'
import tvItem from './components/TVItem'
import musicItem from './components/MusicItem'

ReactDOM.render(
  <div>
    <a href="/shows"><h1 className="text-center">TV</h1></a>

    <Results label="Queued" component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} showQueued={true}/>

    <Results label="Finished" component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} showFinished={true}/>

    <Results label="Other" component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} addToQueue={true}/>

    <a href="#"><h1 className="text-center">Music</h1></a>

    <Results label="" component={musicItem} items={MusicItems} finished={userFinishedMusic} queued={userQueuedMusic}/>
    
  </div>,
    document.getElementById('results')
)
