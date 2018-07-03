import React from 'react'
import FailedComponent from './FailedComponent'
import ErrorBoundary from './ErrorBoundary'

export default function () {
  return (
    <ErrorBoundary>
      <FailedComponent />
    </ErrorBoundary>
  )
}
