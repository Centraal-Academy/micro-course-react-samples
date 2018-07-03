import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    this.setState({ hasError: true })
    console.error(error, info)
  }

  render () {
    if (this.state.hasError) {
      return <span>Ups, I did it again!</span>
    }
    return this.props.children
  }
}
