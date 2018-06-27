import React from 'react'
import style from './index.css'

function ButtonComponent (props) {
  return (<button className={style['btn-primary']}> {props.message}</button>)
}

export default ButtonComponent
