import React from 'react'

export default function Marker (props) {
  const { style = { color: 'blue' } } = props
  return (
    <p style={style}>Soy un marcador</p>
  )
}
