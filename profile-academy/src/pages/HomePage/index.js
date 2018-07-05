import React from 'react'
import HeroHome from './components/HeroHome'

class HomePage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <HeroHome />
        <span>More Stuff</span>
      </React.Fragment>
    )
  }
}

export default HomePage
