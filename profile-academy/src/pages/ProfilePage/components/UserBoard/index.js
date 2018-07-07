import React from 'react'
import './index.css'
import AuthButton from '../AuthButton'

export default function UserBoard (props) {
  return (
    <div className='User-Board'>
      <div>
        <img src={props.avatar} />
      </div>
      <div>
        <p>Nombre: {props.name}</p>
        <p>Trabajo: {props.job}</p>
        { props.auth
          ? <button>Dame un like :3</button>
          : <AuthButton />
        }
      </div>
    </div>
  )
}
