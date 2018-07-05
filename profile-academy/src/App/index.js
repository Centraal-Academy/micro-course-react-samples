import React from 'react'
import Page from '../components/Page'
import ProfilePage from '../pages/ProfilePage'

export default class App extends React.Component {
  render () {
    return (
      <Page>
        <ProfilePage />
      </Page>
    )
  }
}
