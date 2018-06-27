import React from 'react'

function ButtonComponent (props) {
  const styles = {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '2rem'
  }
  return (<button style={styles}> {props.message}</button>)
}

export default ButtonComponent
