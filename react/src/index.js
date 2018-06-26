import React from 'react'
import ReactDOM from 'react-dom'
import MyButton from './react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const appContainer = document.getElementById('app-container')

ReactDOM.render(<MyButton message='Bootstrap Button' />, appContainer)
