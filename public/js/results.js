import React from 'react'
import ReactDOM from 'react-dom'

import Results from './components/Results'
import tvItem from './components/TVItem'
import musicItem from './components/MusicItem'
import movieItem from './components/MovieItem'

var tvResults = []
var musicResults = []
var movieResults = []

if (typeof TVItems != 'undefined') {
  tvResults = (
    <section className="container">
      <h1 className="text-center"><a href="/shows">TV</a></h1>

      <Results label="Queued" component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} showQueued={true}/>

      <Results label="Watched" component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} showFinished={true}/>

      <Results label="Add to Queue" component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} addToQueue={true}/>
    </section>
  )
}

if (typeof MusicItems != 'undefined') {
  musicResults = (
    <section className="container">
      <h1 className="text-center"><a href="/albums">Music</a></h1>

      <Results label="Queued" component={musicItem} items={MusicItems} finished={userFinishedMusic} queued={userQueuedMusic} showQueued={true}/>

      <Results label="Listened To" component={musicItem} items={MusicItems} finished={userFinishedMusic} queued={userQueuedMusic} showFinished={true}/>

      <Results label="Add to Queue" component={musicItem} items={MusicItems} finished={userFinishedMusic} queued={userQueuedMusic} addToQueue={true}/>
    </section>
  )
}

if (typeof MovieItems != 'undefined') {
  movieResults = (
    <section className="container">
      <h1 className="text-center"><a href="/movies">Movies</a></h1>

      <Results label="Queued" component={movieItem} items={MovieItems} finished={userFinishedMovies} queued={userQueuedMovies} showQueued={true}/>

      <Results label="Watched" component={movieItem} items={MovieItems} finished={userFinishedMovies} queued={userQueuedMovies} showFinished={true}/>

      <Results label="Add to Queue" component={movieItem} items={MovieItems} finished={userFinishedMovies} queued={userQueuedMovies} addToQueue={true}/>

    </section>
  )
}

ReactDOM.render(
  <div>
    {tvResults}
    {musicResults}
    {movieResults}
  </div>,
    document.getElementById('results')
)
