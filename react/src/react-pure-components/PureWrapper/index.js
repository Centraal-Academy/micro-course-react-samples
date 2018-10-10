import React from 'react'
import DummyComponent from '../DummyComponent'

export default class PureWrapper extends React.PureComponent {
  render () {
    return (
      <DummyComponent message='Estoy en un pure Wrapper' />
    )
  }
}
