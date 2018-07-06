import React from 'react'

function TitleComponent (props) {
  return React.createElement('h1',
    null,
    `${props.message || 'Hello World'}`
  )
}

export default TitleComponent
