import React from 'react'
import './index.css'
import ListItem from './ListItem'

function List (props) {
  return (
    props.items && props.items.length
      ? <ul className='List'>
        {props.items.map(item => <ListItem key={item.id} onClick={props.onClick} item={item} />)}
      </ul>
      : <span>No hay cursos</span>
  )
}

List.defaultProps = {
  items: []
}

export default List
