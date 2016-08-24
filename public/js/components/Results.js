import React from 'react'

// import TVItem from './TVItem'

class Results extends React.Component {
  findId(item) {
    return (typeof item.gn_id === undefined) ? item.id : item.gn_id

    //if (typeof item.gn_id === undefined && typeof item.gn_id === undefined) {
    return 
  }

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
      return <Item key={i} item={item} finished={finished} queued={queued}/>
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
