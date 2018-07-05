import React from 'react'
import Page from '../components/Page'
import HomePage from '../pages/HomePage'

export default class App extends React.Component {
  render () {
    return (
      <Page>
        <HomePage />
      </Page>
    )
  }
}
