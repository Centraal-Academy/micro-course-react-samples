import React from 'react'

function List (props) {
  return (
    props.items && props.items.length
      ? <ul>
        {props.items.map(item => <li key={item}>{item}</li>)}
      </ul>
      : <span>No hay cursos</span>
  )
}

List.defaultProps = {
  items: []
}

export default List
