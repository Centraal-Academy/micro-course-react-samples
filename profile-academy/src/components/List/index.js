import React from 'react'
import './index.css'

function List (props) {
  return (
    props.items && props.items.length
      ? <ul {...props} className='List'>
        {props.items.map(item => <li key={item}>{item}</li>)}
      </ul>
      : <span>No hay cursos</span>
  )
}

List.defaultProps = {
  items: []
}

export default List
