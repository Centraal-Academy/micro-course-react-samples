import React from 'react'

function ButtonComponent (props) {
  function sayHello (e) {
    e.stopPropagation()
    e.preventDefault()
    console.log('Hello')
  }
  return (<button onClick={sayHello}> {props.message}</button>)
}

export default ButtonComponent
