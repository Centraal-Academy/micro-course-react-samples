import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import ProfilePage from '../../pages/ProfilePage'

export default function AppRouter (props) {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path='/' component={HomePage} />
        <Route path='/profile' component={ProfilePage} />
      </React.Fragment>
    </BrowserRouter>
  )
}
