import React from 'react'
import './index.css'

export default function UserBoard (props) {
  return (
    <div className='User-Board'>
      <div>
        <img src={props.avatar} />
      </div>
      <div>
        <p>Nombre: {props.name}</p>
        <p>Trabajo: {props.job}</p>
        <button>Dale like :3</button>
      </div>
    </div>
  )
}
