import React from 'react'

class TitleComponent extends React.Component {
  render () {
    return (<h1>{this.props.message || 'Hello World'}</h1>)
  }
}

export default TitleComponent
