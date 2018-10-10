import React from 'react'

function changeChild (component, index) {
  if (index > 0) {
    return React.cloneElement(component, { style: { color: 'red' } })
  }
  return component
}
export default function Map (props) {
  const childs = React.Children.map(props.children, changeChild)
  return (
    <div>{childs}</div>
  )
}
