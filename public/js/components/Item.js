import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      queued: props.queued,
      series: props.series,
      finished: props.finished
    }
  }

  queueToggle() {
    fetch('/shows', {
      method: 'POST',
      body: JSON.stringify(this.state.series),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.setState({queued: !this.state.queued})
  }

  finishedToggle() {
    // fetch('/shows', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state.series),
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    this.setState({finished: !this.state.finished})
  }

  render() {
    var divStyle = {
      visibility: 'hidden',
      opacity: 0,
    };

    var imgStyle = {
      backgroundImage: 'url(' + this.props.series.show_image + ')'
    }

    var queuedIcon = this.state.queued ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-plus'

    var queuedBackground = this.state.queued ? 'btn btn-default active' : 'btn btn-default'

    var finishedBackground = this.state.finished ? 'btn btn-default active' : 'btn btn-default'

    return <div className="col-md-4 col-lg-3">
      <a className="itemLink" href={"/showdetail/" + this.props.series.gn_id}>
        <div className="item center-block" style={imgStyle}>
          <div className="text-center">
            <div className="hoverLayer">
              <h2 className="tvTitle">{this.props.series.title}</h2>
              <h5 style={divStyle} className="tvSynopsis center-block" >{this.props.series.synopsis ? this.props.series.synopsis : 'Sorry! There is no synopsis available.'}</h5>
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
          <button onClick={() => this.finishedToggle() } type="button" className={finishedBackground}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
          </button>
        </div>

      </div>

      {/* <button className="center-block" onClick={() => this.onClick() }>{this.state.label}</button> */}
    </div>
  }
}

export default Item
