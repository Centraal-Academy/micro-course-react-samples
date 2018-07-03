import React from 'react'
import Page from '../components/Page'
import Title from '../components/Title'
import List from '../components/List'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        items: ['react', 'diseño de software', 'redux']
      })
    }, 3000)
  }

  render () {
    return (<Page>
      <Title message='Lista de cursos' />
      <List items={this.state.items} />
    </Page>)
  }
}
