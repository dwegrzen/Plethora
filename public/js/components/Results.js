import React from 'react'

// import TVItem from './TVItem'

class Results extends React.Component {
  render() {

    var props = this.props
    var Item = this.props.component
    var items = props.items.map(function(item, i){
      var finished = props.finished.includes(item.gn_id)
      var queued = props.queued.includes(item.gn_id)
      return <Item key={i} item={item} finished={finished} queued={queued}/>
    })
    return <div>{items}</div>
  }
}

export default Results
