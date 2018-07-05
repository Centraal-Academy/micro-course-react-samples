import React from 'react'
import Course from '../Course'
import './index.css'

export default function CourseList (props) {
  const courses = props.courses.map(
    course => <li key={course.id}><Course {...course} /></li>
  )

  return (
    <div>
      <h3>{props.title}</h3>
      <ul className='Course-List'>
        {courses}
      </ul>
    </div>
  )
}
