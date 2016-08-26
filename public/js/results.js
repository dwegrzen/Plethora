import React from 'react'
import ReactDOM from 'react-dom'

import Results from './components/Results'
import tvItem from './components/TVItem'
import musicItem from './components/MusicItem'
import movieItem from './components/MovieItem'

var tvResults = []
var musicResults = []
var movieResults = []
var isSearch = window.location.href.includes('/search')

if (typeof TVItems != 'undefined' && TVItems.length !== 0) {
  tvResults = (
    <section className="container">
      <h1 className="mediaCat text-center"><a href="/shows">TV Shows</a></h1>

      <Results label="Queued" component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} showQueued={true} search={isSearch}/>

      <Results label="Watched" component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} showFinished={true} search={isSearch}/>

      <Results label="Add to Queue" component={tvItem} items={TVItems} finished={userFinishedShows} queued={userQueuedShows} addToQueue={true} search={isSearch}/>
    </section>
  )
}

if (typeof MusicItems != 'undefined' && MusicItems.length !== 0) {
  musicResults = (
    <section className="container">
      <h1 className="mediaCat text-center"><a href="/albums">Music</a></h1>

      <Results label="Queued" component={musicItem} items={MusicItems} finished={userFinishedMusic} queued={userQueuedMusic} showQueued={true} search={isSearch}/>

      <Results label="Listened To" component={musicItem} items={MusicItems} finished={userFinishedMusic} queued={userQueuedMusic} showFinished={true} search={isSearch}/>

      <Results label="Add to Queue" component={musicItem} items={MusicItems} finished={userFinishedMusic} queued={userQueuedMusic} addToQueue={true} search={isSearch}/>
    </section>
  )
}

if (typeof MovieItems != 'undefined' && MovieItems.length !== 0) {
  movieResults = (
    <section className="container">
      <h1 className="mediaCat text-center"><a href="/movies">Movies</a></h1>

      <Results label="Queued" component={movieItem} items={MovieItems} finished={userFinishedMovies} queued={userQueuedMovies} showQueued={true} search={isSearch}/>

      <Results label="Watched" component={movieItem} items={MovieItems} finished={userFinishedMovies} queued={userQueuedMovies} showFinished={true} search={isSearch}/>

      <Results label="Add to Queue" component={movieItem} items={MovieItems} finished={userFinishedMovies} queued={userQueuedMovies} addToQueue={true} search={isSearch}/>

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
