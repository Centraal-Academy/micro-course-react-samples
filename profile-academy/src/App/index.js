import React from 'react'
import Page from '../components/Page'
import AppRouter from './AppRouter'

export default class App extends React.Component {
  render () {
    return (
      <Page>
        <AppRouter />
      </Page>
    )
  }
}
