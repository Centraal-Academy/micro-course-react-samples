import React from 'react'
import propTypes from 'prop-types'

function Card (props) {
  return (
    <article>
      <header>
        <h3>{props.name}</h3>
      </header>
    </article>
  )
}

Card.propsDefault = {
  name: 'Card title'
}

Card.propTypes = {
  name: propTypes.string
}

export default Card
