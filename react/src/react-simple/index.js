import React from 'react'

const TitleComponent = class extends React.Component {
  render () {
    return React.createElement('h1',
      null,
      `${this.props.message}`
    )
  }
}

const simpleElement = React.createElement(
  TitleComponent,
  { message: 'Hello World' }
)

export default simpleElement
