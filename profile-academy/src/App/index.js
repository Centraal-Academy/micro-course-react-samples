import React from 'react'
import Page from '../components/Page'
import AppRouter from './AppRouter'
import AppContext from './AppContext'
import FirebaseAdapter from '../modules/FirebaseAdapter'

const authFirebase = FirebaseAdapter.getAuth()

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      auth: false
    }
  }

  componentDidMount () {
    this.unSuscribe = authFirebase().onAuthStateChanged((auth) => {
      if (auth) {
        this.setState({ auth })
      } else {
        this.setState({ auth: false })
      }
    })
  }

  componentWillUnmount () {
    this.unSuscribe()
  }

  render () {
    return (
      <AppContext.Provider value={this.state} >
        <Page>
          <AppRouter />
        </Page>
      </AppContext.Provider>
    )
  }
}
