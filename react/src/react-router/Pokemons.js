import React from 'react'
import { Link } from 'react-router-dom'

export default function (props) {
  return (
    <div>
      <h1>Pokemons Page</h1>
      <div>
        <Link to='/pokemons/bulbasaur'>Bulbasaur</Link>
      </div>
      <div>
        <Link to='/pokemons/squirtle'>Vamo a calmaro</Link>
      </div>
      <div>
        <Link to='/pokemons/charmander'>Charmander</Link>
      </div>
    </div>
  )
}
