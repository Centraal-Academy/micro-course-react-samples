/* global fetch */
import React from 'react'
import Container from '../../components/Container'
import UserBoard from './components/UserBoard'
import CourseList from '../../components/CourseList'

class ProfilePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {},
      courses: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:3000/profile')
      .then(response => response.json())
      .then(profile => {
        this.setState({
          user: profile.user,
          courses: profile.courses
        })
      })
  }

  render () {
    return (
      <Container>
        <UserBoard {...this.state.user} />
        <CourseList title='Cursos aprobados' courses={this.state.courses} />
      </Container>
    )
  }
}

export default ProfilePage
