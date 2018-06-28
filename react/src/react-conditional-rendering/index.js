import React from 'react'

export default function MyButton (props) {
  if (props.message) {
    return <button>{props.message}</button>
  }
  return <span>Something is missing</span>
}
