import React from 'react'

class TitleComponent extends React.Component {
  render () {
    return (<h1>{this.props.message}</h1>)
  }
}

export default <TitleComponent message='Hello World' />
