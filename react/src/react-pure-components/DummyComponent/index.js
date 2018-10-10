import React from 'react'

export default function DummyComponent (props) {
  const { message = 'Hola Dummy Component' } = props
  console.log('render dummy ' + message)
  return <p>{message}</p>
}
