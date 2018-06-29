import React from 'react'

export default function Button (props) {
  return (props.message ? <button>{props.message}</button> : <span>Something is missing</span>)
}
