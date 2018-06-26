import React from 'react'

export default function ButtonComponent (props) {
  return (<button className={props.color}>{props.message}</button>)
}
