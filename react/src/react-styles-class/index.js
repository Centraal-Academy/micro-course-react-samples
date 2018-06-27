import React from 'react'
import './index.css'

function ButtonComponent (props) {
  return (<button className='btn-primary'> {props.message}</button>)
}

export default ButtonComponent
