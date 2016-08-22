import React from 'react'
import ReactDOM from 'react-dom'

import Results from './components/Results'
import tvItem from './components/TVItem'
import musicItem from './components/MusicItem'

ReactDOM.render(
  <div>
    <Results component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows}/>
    <Results component={musicItem} items={MusicItems} finished={userFinishedMusic} queued={userQueuedMusic}/>
  </div>,
    document.getElementById('results')
)
