import React from 'react'

export default function MyButton (props) {
  if (props.message) {
    return <button>{this.props.message}</button>
  }
  return <span>Something is missing</span>
}
