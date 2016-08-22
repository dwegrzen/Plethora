import React from 'react'
import ReactDOM from 'react-dom'

import Results from './components/Results'
import tvItem from './components/Item'
import musicItem from './components/Item'

ReactDOM.render(
  <div>
    <Results component={tvItem} items={railsItems} finished={userFinishedShows} queued={userQueuedShows}/>
    {/* <Results component={musicItem} items={railsItems} finished={userFinishedShows} queued={userQueuedShows}/> */}
  </div>,
    document.getElementById('results')

)
