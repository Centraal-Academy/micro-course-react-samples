import React from 'react'
import Context from './app-context'
export function ChildComponent (props) {
  return (
    <span style={{ color: props.color }}>
      Hola soy un hijo
    </span>
  )
}

export default function ChildComponentContextAPI () {
  return (
    <Context.Consumer>
      { value => <ChildComponent color={value} /> }
    </Context.Consumer>
  )
}
