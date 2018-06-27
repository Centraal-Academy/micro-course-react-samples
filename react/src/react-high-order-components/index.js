import React from 'react'
import Button from './Button'

const ButtonWithUserAuthenticated = (Component) => {
  class ButtonAuth extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        onClick: this.clickHandler.bind(this),
        style: {
          backgroundColor: 'green'
        }
      }
    }

    clickHandler (event) {
      console.log('go for the suscription')
    }

    render () {
      return <Component {...this.props} {...this.state} />
    }
  }
  ButtonAuth.displayName = 'ButtonWithUserAuthenticated'
  return ButtonAuth
}

const ButtonWithOutUserAuthenticated = (Component) => {
  class ButtonNoAuth extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        onClick: this.clickHandler.bind(this),
        style: {
          backgroundColor: 'red'
        }
      }
    }

    clickHandler (event) {
      console.log('go to login')
    }

    render () {
      return <Component {...this.props} {...this.state} />
    }
  }
  ButtonNoAuth.displayName = 'ButtonWithUserAuthenticated'
  return ButtonNoAuth
}

export default class SuscriptionButton extends React.Component {
  render () {
    var ButtonElement
    if (this.props.auth) {
      ButtonElement = ButtonWithUserAuthenticated(Button)
    } else {
      ButtonElement = ButtonWithOutUserAuthenticated(Button)
    }
    return (<ButtonElement {...this.props}>Suscribete</ButtonElement>)
  }
}
