import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export function LoginRoute ({ component: Component, auth, ...rest }) {
  return (
    <Route {...rest}
      render={(props) => !auth
        ? <Component {...rest} />
        : <Redirect to={{pathname: '/profile', state: {from: props.location}}} />}
    />
  )
}

export function ProtectedRoute ({ component: Component, auth, ...rest }) {
  console.log('protected ', auth)
  return (
    <Route {...rest}
      render={(props) => auth
        ? <Component {...rest} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}
