import React from 'react'
import PropTypes from 'prop-types'

function ButtonComponent (props) {
  return (<button>{props.message}</button>)
}

ButtonComponent.propTypes = {
  message: PropTypes.string
}

export default ButtonComponent
