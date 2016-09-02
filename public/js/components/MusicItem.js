import React from 'react'

class MusicItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      queued: props.queued,
      music: props.item,
      finished: props.finished
    }
  }

  queueToggle() {
    if (!this.state.queued) {
      fetch('/albums', {
        method: 'POST',
        body: JSON.stringify(this.state.music),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      albumAdded()
    }
    else {
      fetch('/albums?album_id=' + this.state.music.id, {
        method: 'DELETE',
        body: JSON.stringify({
          gn_id: this.state.music.gn_id
        }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      this.setState({finished: !this.state.queued})
      albumRemoved()
    }
    this.setState({queued: !this.state.queued})
  }

  finishedToggle() {
    if (!this.state.queued) {
      this.setState({queued: !this.state.queued, finished: !this.state.finished})
      fetch('/albumaddasfinished', {
        method: 'POST',
        body: JSON.stringify({
          music: this.state.music,
          finished: !this.state.finished
        }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      albumAddFinished()
    }
    else {
      this.setState({finished: !this.state.finished})
      fetch('/albumstatus', {
        method: 'PATCH',
        body: JSON.stringify({
          gn_id: this.state.music.gn_id,
          finished: !this.state.finished
        }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (this.state.finished) {
        albumNotFinished()
      }
      else {
        albumFinished()
      }
    }
  }

  render() {
    var divStyle = {
      visibility: 'hidden',
      opacity: 0,
    }

    var imgStyle = {
      backgroundImage: 'url("' + this.state.music.album_art + '")'
    }

    var queuedIcon = this.state.queued ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-ban-circle'
    var finishedIcon = this.state.finished ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-ban-circle'
    var queuedBackground = this.state.queued ? 'btn clicked' : 'btn unclicked'
    var finishedBackground = this.state.finished ? 'btn clicked' : 'btn unclicked'

    //Grid layout for dashboard
    if (!this.props.search) {
      return <div className="col-md-4 col-lg-3">
        <a className="itemLink" href={'/albumdetail/' + this.state.music.gn_id}>
          <div className="item center-block" style={imgStyle}>
            <div className="text-center">
              <div className="hoverLayer">
                <h2 className="albumName" style={divStyle}>{this.state.music.name}</h2>
                <h2 className="artistName center-block" style={divStyle} >{this.state.music.artist}</h2>
              </div>
            </div>
          </div>
        </a>
        <div className="btn-group btn-group-justified">
          <div className="btn-group" role="group">
            <button onClick={() => this.queueToggle() } type="button" className={queuedBackground} id="leftBtn">
              <span className={queuedIcon} aria-hidden="true"></span>
              &nbsp;&nbsp;Queued?
            </button>
          </div>
          <div className="btn-group" role="group">
            <button onClick={() => this.finishedToggle() } type="button" className={finishedBackground} id="rightBtn">
              <span className={finishedIcon} aria-hidden="true"></span>
              &nbsp;&nbsp;Listened?
            </button>
          </div>
        </div>
      </div>
    }

    //Layout for search page without hover effects
    else {
      return <div className="musicItemsSection col-sm-6">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <a className="itemLink" href={"/albumdetail/" + this.state.music.gn_id}>
              <img className="img-responsive center-block searchImage musicSearchImage" src={this.state.music.album_art} />
            </a>
            <div className="btn-group btn-group-justified">
              <div className="btn-group" role="group">
                <button onClick={() => this.queueToggle() } type="button" className={queuedBackground} id="leftBtn">
                  <span className={queuedIcon} aria-hidden="true"></span>
                  <h6 className="text-center">Queued?</h6>
                </button>
              </div>
              <div className="btn-group" role="group">
                <button onClick={() => this.finishedToggle() } type="button" className={finishedBackground} id="rightBtn">
                  <span className={finishedIcon} aria-hidden="true"></span>
                  <h6 className="text-center">Listened?</h6>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xs-12 hidden-sm hidden-md hidden-lg hidden-xl albumSearchMobile">
            <h3 className="albumTitleSearchMobile title text-center">{this.state.music.name}</h3>
            <h4 className="artistNameSearch text-center">{this.state.music.artist}</h4>
          </div>
          <div className="hidden-xs col-sm-6 col-md-8">
            <h2 className="albumTitleSearch title text-left">{this.state.music.name}</h2>
            <h3 className="artistNameSearch text-left">{this.state.music.artist}</h3>
          </div>
        </div>
      </div>
    }
  }
}

export default MusicItem
