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
    return <div className="col-sm-3">
      <img className="searchImage" src={this.props.series.image ? this.props.series.image : '././noCoverTV.jpeg'} />


      <a href={"/showdetail/" + this.props.series.gn_id}>
        <h2>{this.props.series.title}</h2>
      </a>
      <h5>{this.props.series.shortdesc ? this.props.series.shortdesc : 'No synopsis available.'}</h5>
      <button onClick={() => this.onClick()}>{this.state.label}</button>
    </div>
  }
}

export default Item
