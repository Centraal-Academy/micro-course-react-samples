import React from 'react'

export default class PokemonList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pokemons: [
        { id: 1, name: 'Bulbasaur' },
        { id: 4, name: 'Squirtle' },
        { id: 7, name: 'Charmander' }
      ]
    }
  }

  render () {
    const pokemons = this.state.pokemons.map(
      pokemon => <li key={pokemon.id}>{pokemon.name}</li>
    )
    return (<ul>{pokemons}</ul>)
  }
}
