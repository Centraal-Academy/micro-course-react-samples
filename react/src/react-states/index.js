import React from 'react'

export default class ButtonComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'theme-green'
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        color: 'theme-blue'
      })
    }, 3000)
  }

  render () {
    return (<button className={this.state.color}>{this.props.message}</button>)
  }
}
