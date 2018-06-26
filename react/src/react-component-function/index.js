import React from 'react'

function TitleComponent (props) {
  return (<h1>{props.message}</h1>)
}

export default <TitleComponent message='Hello World' />
