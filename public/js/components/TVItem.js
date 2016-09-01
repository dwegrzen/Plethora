import React from 'react'

class TVItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      queued: props.queued,
      series: props.item,
      finished: props.finished
    }
  }

  queueToggle() {
    if (!this.state.queued) {
      fetch('/shows', {
        method: 'POST',
        body: JSON.stringify(this.state.series),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    else {
      fetch('/shows?show_id=' + this.state.series.id, {
        method: 'DELETE',
        body: JSON.stringify({
          gn_id: this.state.series.gn_id
        }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      this.setState({finished: !this.state.queued})
    }
    this.setState({queued: !this.state.queued})
  }

  finishedToggle() {
    if (!this.state.queued) {
      this.setState({queued: !this.state.queued, finished: !this.state.finished})
      fetch('/showaddasfinished', {
        method: 'POST',
        body: JSON.stringify({
          show: this.state.series,
          finished: !this.state.finished
        }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
    else {
      this.setState({finished: !this.state.finished})
      fetch('/showstatus', {
        method: 'PATCH',
        body: JSON.stringify({
          gn_id: this.state.series.gn_id,
          finished: !this.state.finished
        }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }

  render() {

    var divStyle = {
      visibility: 'hidden',
      opacity: 0,
    }
    var imgStyle = {
      backgroundImage: 'url(' + this.state.series.show_image + ')'
    }
    var queuedIcon = this.state.queued ? 'glyphicon glyphicon-remove' : 'glyphicon glyphicon-plus'
    var queuedBackground = this.state.queued ? 'btn btn-default active' : 'btn btn-default'
    var finishedBackground = this.state.finished ? 'btn btn-default active' : 'btn btn-default'

    //Grid layout for dashboard
    if (!this.props.search) {
      return <div className="col-md-4 col-lg-3">
        <a className="itemLink" href={"/showdetail/" + this.state.series.gn_id}>
          <div className="item center-block" style={imgStyle}>
            <div className="text-center">
              <div className="hoverLayer">
                <h2 className="title" style={divStyle}>{this.state.series.title}</h2>
                <h5 style={divStyle} className="tvSynopsis center-block" >
                  {this.state.series.synopsis ? this.state.series.synopsis : 'Sorry! There is no synopsis available.'}
                </h5>
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
      return <div id="tvItemsSection">
        <div className="row">
          <div className="col-sm-3 col-sm-offset-2">
            <a className="itemLink" href={"/showdetail/" + this.state.series.gn_id}>
              <img className="img-responsive center-block searchImage" src={this.state.series.show_image} />
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
          <div className="col-sm-5">
            <h2 className="title text-left">{this.state.series.title}</h2>
            <h5 className="tvSynopsisSearch text-justify" >{this.state.series.fulldesc ? this.state.series.fulldesc : 'Sorry! There is no synopsis available.'}</h5>
          </div>
        </div>
      </div>
    }
  }
}

export default TVItem
