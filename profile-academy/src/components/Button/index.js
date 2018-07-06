import React from 'react'

export default function Button (props) {
  const { children, ...properties } = props
  return <button {...properties} >{ children }</button>
}
