import React from 'react'

function ButtonComponent (props) {
  function sayHello (e) {
    e.stopPropagation()
    e.preventDefault()
    console.log(e)
  }
  return (<button onClick={sayHello}> {props.message || 'Hello Button'}</button>)
}

export default ButtonComponent
