import React from 'react'
import ReactDOM from 'react-dom'
import MyButton from './react-states'

const appContainer = document.getElementById('app-container')

ReactDOM.render(<MyButton message='i am a button' />, appContainer)
