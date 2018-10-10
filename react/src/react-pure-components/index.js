import React from 'react'
import PureWrapper from './PureWrapper'
import DummyComponent from './DummyComponent'
export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      x: 1
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState () {
    this.setState({
      x: 1
    })
  }
  render () {
    console.log('rendering father')
    return (
      <div>
        <PureWrapper />
        <DummyComponent />
        <button onClick={this.changeState}>Click</button>
      </div>
    )
  }
}
