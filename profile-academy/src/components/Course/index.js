import React from 'react'
import Card from '../Card'

export default function Course (props) {
  return (
    <Card>
      <img src={props.image} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </Card>
  )
}
