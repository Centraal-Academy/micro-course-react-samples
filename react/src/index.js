import React from 'react'
import ReactDOM from 'react-dom'
import MyButton from './react-prop-types'
// import 'bootstrap/dist/css/bootstrap.css'

const appContainer = document.getElementById('app-container')

ReactDOM.render(<MyButton message={[]} />, appContainer)
