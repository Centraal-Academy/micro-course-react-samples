import React from 'react'
import { withRouter } from 'react-router-dom'

export function withNavigation (Component) {
  class NavigationElement extends React.Component {
    constructor (props) {
      super(props)
      this._navigate = this._navigate.bind(this)
    }
    _navigate () {
      this.props.history.push(this.props.path)
    }

    render () {
      let { staticContext, ...properties } = this.props
      return (<Component {...properties} onClick={this._navigate} />)
    }
  }

  return withRouter(NavigationElement)
}
