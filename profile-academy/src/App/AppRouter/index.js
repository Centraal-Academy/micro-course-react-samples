import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import ProfilePage from '../../pages/ProfilePage'
import { LoginRoute, ProtectedRoute } from '../../components/GuardRouter'
import LoginPage from '../../pages/LoginPage'
import AppContext from '../../App/AppContext'

function AppRouter (props) {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path='/' component={HomePage} />
        <LoginRoute path='/login' component={LoginPage} {...props} />
        <ProtectedRoute path='/profile' component={ProfilePage} {...props} />
      </React.Fragment>
    </BrowserRouter>
  )
}

export default function (props) {
  return (
    <AppContext.Consumer>
      {
        (data) => <AppRouter {...data} />
      }
    </AppContext.Consumer>
  )
}
