import React from 'react'
import { Link } from 'react-router-dom'

export default function (props) {
  return (
    <div>
      <h1>Pokemons Page</h1>
      <Link to='/pokemons/bulbasaur'>Bulbasaur</Link>
      <Link to='/pokemons/squirtle'>Vamo a calmaro</Link>
      <Link to='/pokemons/charmander'>Charmander</Link>
    </div>
  )
}
