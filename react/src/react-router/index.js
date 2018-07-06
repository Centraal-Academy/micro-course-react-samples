import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Pokemons from './Pokemons'
import Pokemon from './Pokemon'

export default function () {
  return (
    <BrowserRouter>
      <React.Fragment>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/about'>About</Link>
        </div>
        <div>
          <Link to='/pokemons'>Pokemons</Link>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route exact path='/pokemons' component={Pokemons} />
        <Route path='/pokemons/:id' component={Pokemon} />
      </React.Fragment>
    </BrowserRouter>
  )
}
