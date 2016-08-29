import React from 'react'

class Results extends React.Component {
  findId(item) {
    return (typeof item.gn_id === 'undefined') ? item.tmdb_id : item.gn_id
  }

  render() {

    var props = this.props
    var items = []
    var Item = this.props.component

    if (props.showQueued) {
      items = props.items.filter((item) => {
        var id = this.findId(item)
        return props.queued.includes(id) && !props.finished.includes(id)
      })
    }
    else if (props.showFinished) {
      items = props.items.filter((item) => {
        var id = this.findId(item)
        return props.finished.includes(id)
      })
    }
    else if (props.addToQueue) {
      items = props.items.filter((item) => {
        var id = this.findId(item)
        return !props.finished.includes(id) && !props.queued.includes(id)
      })
    }
    else {
      items = props.items
    }

    items = items.map((item, i) => {
      var id = this.findId(item)
      var finished = props.finished.includes(id)
      var queued = props.queued.includes(id)
      // console.log(queued, item)
      return <Item key={i} item={item} finished={finished} queued={queued} search={props.search}/>
    })

    if (items.length) {
      return (
        <div>
          <h2>{this.props.label}</h2>
          <div className="row">
            {items}
          </div>
        </div>
      )
    }

    return <div></div>

  }
}

export default Results
