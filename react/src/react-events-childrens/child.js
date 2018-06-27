import React from 'react'

export default function (props) {
  return (<button {...props}>{props.children}</button>)
}
