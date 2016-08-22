import React from 'react'

// import TVItem from './TVItem'

class Results extends React.Component {
  render() {

    var props = this.props
    var items = []
    var Item = this.props.component

    if (props.showQueued) {
      items = props.items.filter(function(item){
        return props.queued.includes(item.gn_id) && !props.finished.includes(item.gn_id)
      })
    }
    else if (props.showFinished) {
      items = props.items.filter(function(item){
        return props.finished.includes(item.gn_id)
      })
    }
    else {
      items = props.items
    }

    items = items.map(function(item, i){
      var finished = props.finished.includes(item.gn_id)
      var queued = props.queued.includes(item.gn_id)
      return <Item key={i} item={item} finished={finished} queued={queued}/>
    })
    return <div>{items}</div>
  }
}

export default Results
