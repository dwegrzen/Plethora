import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      label: "Add to queue",
      series: props.series
    }
  }

  onClick() {
    fetch('/shows', {
      method: 'POST',
      body: JSON.stringify(this.state.series),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.setState({label: "Queued"})
  }

  render() {
    var divStyle = {
      visibility: 'hidden',
      opacity: 0,
    };

    var imgStyle = {
      backgroundImage: 'url(' + this.props.series.show_image + ')'
    }

    return <div className="col-sm-5 col-sm-offset-1 col-md-4 col-lg-3">
      <a className="itemLink" href={"/showdetail/" + this.props.series.gn_id}>
        {/* <img className="searchImage center-block" src="././searchImageTV.jpg"
      // {this.props.series.show_image}
        // ? this.props.series.image : '././searchImageTV.jpg'
        /> */}
        <div className="item center-block" style={imgStyle}>
          <div className="text-center">
            <div className="hoverLayer">
              <h2 className="tvTitle">{this.props.series.title}</h2>
              <h5 style={divStyle} className="tvSynopsis center-block" >{this.props.series.shortdesc ? this.props.series.shortdesc : 'Sorry! There is no synopsis available.'}</h5>
            </div>

          </div>
        </div>
      </a>
      <button className="center-block" onClick={() => this.onClick()}>{this.state.label}</button>
    </div>
  }
}

export default Item
