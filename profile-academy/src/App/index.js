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
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (data) {
    console.log(data)
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        items: [{
          id: 1,
          name: 'react'
        }, {
          id: 2,
          name: 'diseño de software'
        }, {
          id: 3,
          name: 'redux'
        }]
      })
    }, 3000)
  }

  render () {
    return (<Page>
      <Title message='Lista de cursos' />
      <List onClick={this.handleClick} items={this.state.items} />
    </Page>)
  }
}
