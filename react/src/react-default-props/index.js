import React from 'react'

function ButtonComponent (props) {
  return (<button>{props.message}</button>)
}

ButtonComponent.defaultProps = {
  message: 'Default message'
}

export default ButtonComponent
