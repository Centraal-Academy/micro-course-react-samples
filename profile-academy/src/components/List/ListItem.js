import React from 'react'

export default function ListItem (props) {
  return <li onClick={(event) => props.onClick(props.item)}>{props.item.name}</li>
}
