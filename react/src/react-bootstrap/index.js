import React from 'react'
import { Button } from 'reactstrap'

export default function (props) {
  return (
    <Button color='danger'>{props.message || 'default message'}</Button>
  )
}
