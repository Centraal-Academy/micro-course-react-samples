import React from 'react'

export default function ListItem (props) {
  const Component = props.component
  return <li onClick={(event) => props.onClick(props.item)}><Component {...props.item} /></li>
}
