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
    }
    else {
      fetch('/albums?album_id=' + this.state.music.id, {
        method: 'DELETE',
        // body: JSON.stringify(this.state.series),
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
    fetch('/albumstatus', {
      method: 'PATCH',
      body: JSON.stringify({
        album_id: this.state.music.id,
        finished: !this.state.finished
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render() {

    var imgStyle = {
      backgroundImage: 'linear-gradient(rgba(72, 78, 92, .3), rgba(72, 78, 92, .3)), url(' + this.state.music.album_art + ')'
    }

    var queuedIcon = this.state.queued ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-plus'

    var queuedBackground = this.state.queued ? 'btn btn-default active' : 'btn btn-default'

    var finishedBackground = this.state.finished ? 'btn btn-default active' : 'btn btn-default'

    return <div className="col-md-4 col-lg-3">
      <a className="itemLink" href={'/albumdetail/' + this.state.music.gn_id}>
        <div className="item center-block" style={imgStyle}>
          <div className="text-center">
            <div className="hoverLayer">
              <h2 className="albumName">{this.state.music.name}</h2>
              <h2 className="artistName center-block" >{this.state.music.artist}</h2>
            </div>
          </div>
        </div>
      </a>
      <div className="btn-group btn-group-justified">
        <div className="btn-group" role="group">
          <button onClick={() => this.queueToggle() } type="button" className={queuedBackground}><span className={queuedIcon} aria-hidden="true"></span>
          </button>
        </div>
        <div className="btn-group" role="group">
          <button onClick={() => this.finishedToggle() } type="button" className={finishedBackground}><span className="glyphicon glyphicon-headphones" aria-hidden="true"></span>
          </button>
        </div>

      </div>

      {/* <button className="center-block" onClick={() => this.onClick() }>{this.state.label}</button> */}
    </div>
  }
}

export default MusicItem
