import React from 'react'
import ChildComponent from './child'

export default class FatherComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.incrementCounter = this.incrementCounter.bind(this)
  }

  incrementCounter () {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render () {
    const styles = {
      backgroundColor: 'red'
    }
    return (<ChildComponent onClick={this.incrementCounter} style={styles}>{`${this.props.message} ${this.state.counter}`}</ChildComponent>)
  }
}
