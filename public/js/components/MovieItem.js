import React from 'react'

class MovieItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      queued: props.queued,
      movies: props.item,
      finished: props.finished
    }
  }

  queueToggle() {
    if (!this.state.queued) {
      fetch('/movies', {
        method: 'POST',
        body: JSON.stringify(this.state.movies),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    else {
      fetch('/movies?movie_id=' + this.state.movies.id, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    this.setState({queued: !this.state.queued})
  }

  finishedToggle() {
    this.setState({finished: !this.state.finished})
    fetch('/moviestatus', {
      method: 'PATCH',
      body: JSON.stringify({
        movie_id: this.state.movies.id,
        finished: !this.state.finished
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    var divStyle = {
      visibility: 'hidden',
      opacity: 0,
    };

    var imgStyle = {
      backgroundImage: 'url(' + this.state.movies.movie_art + ')'
    }

    var queuedIcon = this.state.queued ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-plus'

    var queuedBackground = this.state.queued ? 'btn btn-default active' : 'btn btn-default'

    var finishedBackground = this.state.finished ? 'btn btn-default active' : 'btn btn-default'

    if (!this.props.search) {
      return <div className="col-md-4 col-lg-3">
          <a className="itemLink" href={"/moviedetail/" + this.state.movies.tmdb_id}>
            <div className="item center-block" style={imgStyle}>
              <div className="text-center">
                <div className="hoverLayer">
                  <h2 className="title" style={divStyle}>{this.state.movies.name}</h2>
                  <h5 style={divStyle} className="tvSynopsis center-block" >{this.state.movies.summary ? this.state.movies.summary : 'Sorry! There is no overview available.'}</h5>
                </div>

              </div>
            </div>
          </a>
          <div className="btn-group btn-group-justified">
            <div className="btn-group" role="group">
              <button onClick={() => this.queueToggle() } type="button" className={queuedBackground} id="leftBtn">
                <span className={queuedIcon} aria-hidden="true"></span>
              </button>
            </div>
            <div className="btn-group" role="group">
              <button onClick={() => this.finishedToggle() } type="button" className={finishedBackground} id="rightBtn">
                <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
    }
    //Layout for search page without hover effects
    else {
      return <div id="movieItemsSection">
        <div className="row">
          <div className="col-sm-3 col-sm-offset-1">
            <a className="itemLink" href={"/moviedetail/" + this.state.movies.tmdb_id}>
              <img className="img-responsive center-block searchImage" src={this.state.movies.movie_art} />
            </a>
            <div className="btn-group btn-group-justified">
              <div className="btn-group" role="group">
                <button onClick={() => this.queueToggle() } type="button" className={queuedBackground} id="leftBtn">
                  <span className={queuedIcon} aria-hidden="true"></span>
                </button>
              </div>
              <div className="btn-group" role="group">
                <button onClick={() => this.finishedToggle() } type="button" className={finishedBackground} id="rightBtn">
                  <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <h2 className="title text-left">{this.state.movies.name}</h2>
            <h5 className="tvSynopsisSearch text-left" >{this.state.movies.summary ? this.state.movies.summary : 'Sorry! There is no overview available.'}</h5>
          </div>
        </div>
      </div>
    }
  }
}

export default MovieItem
