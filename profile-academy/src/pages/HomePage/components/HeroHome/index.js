import React from 'react'
import './index.css'
import Button from '../../../../components/Button'
import { withNavigation } from '../../../../components/routing'

export default function HeroHome (props) {
  const NavButton = withNavigation(Button)
  return (
    <div className='Hero-Home'>
      <NavButton path='/profile'>Go to profile</NavButton>
    </div>
  )
}
