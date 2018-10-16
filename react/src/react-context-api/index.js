import React from 'react'
import Context, { theme } from './app-context'
import FatherComponent from './father-component'
export default function () {
  return (
    <Context.Provider value={theme}>
      <FatherComponent />
    </Context.Provider>
  )
}
