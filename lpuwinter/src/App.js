import React from 'react'
import Counter from './components/Efficiency/ErrorBoundaries/Counter'
import ErrorBoundary from './components/Efficiency/ErrorBoundaries/ErrorBoundary'

function App() {
  return (
    <div>
      <h1> ADfar Rasheed</h1>
      <Counter/>
      <ErrorBoundary>
        <Counter/>
        <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
    </div>
  )
}

export default App
