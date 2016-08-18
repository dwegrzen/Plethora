import React from 'react'

import Item from './Item'

class Results extends React.Component {
  render() {
    var items = this.props.items.map(function(item, i){
      return <Item key={i} series={item}  />
    })
    return <div>{items}</div>
  }
}

export default Results
