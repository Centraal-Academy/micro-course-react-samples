import React from 'react'
import Context, { theme } from './app-context'
import FatherComponent from './father-component'
export default function () {
  return (
    <React.Fragment>
      <Context.Provider value={theme}>
        <FatherComponent />
      </Context.Provider>
      <FatherComponent />
    </React.Fragment>
  )
}
