import React from 'react'

function TitleComponent (props) {
  return (<h1>{props.message || 'Hello World'}</h1>)
}

export default TitleComponent
