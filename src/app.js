import React from 'react'
import logo from './logo.svg'
import './app.css'
import StopWatch from './exercises-final/05-state'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <div>
        <p>
          Here's one of the components from the workshop!
        </p>
        <StopWatch />
      </div>
    </div>
  )
}

export default App
