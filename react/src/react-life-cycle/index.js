import React from 'react'
export default class extends React.Component {
  componentWillMount () {
    console.log('Component is coming')
  }

  componentDidMount () {
    console.log('Component mounted')
  }

  componentWillReceiveProps () {
    console.log('I will rendered')
  }

  render () {
    console.log('I am rendered')
    return <h1>Hello World</h1>
  }
}
