import React from 'react'


// WORKSHOP_START
// So far we've just been using function components.
// Now that we need to worry about state in our component, we need to use the ES6 class syntax.
// To turn an ES6 class into a React component, you extend React.Component
// (or `import {Component} from 'react'` and use that)
//
// Let's take this simple component for example:
//
// function SayHello(props) {
//   return (
//     <div>Hello {props.firstName} {props.lastName}!</div>
//   )
// }
//
// Here's how we'd express this using classes:
//
// class SayHello extends React.Component {
//   render() {
//     return (
//       <div>Hello {this.props.firstName} {this.props.lastName}!</div>
//     )
//   }
// }
//
// From here you can now start using this.state in your render method and call this.setState
// in callback handlers (like onClick).
//
// Here's an example of a component that uses state:
// ```
// class ClickCounter extends React.Component {
//   state = {clicks: 0} // initialize the state (using Public Class Fields, could be in the constructor)
//
//   handleButtonClick = () => {
//     this.setState({
//       clicks: this.state.clicks + 1
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleButtonClick}>Click Me!</button>
//         <div>Clicked {this.state.clicks} times</div>
//       </div>
//     )
//   }
// }
// ```
// WORKSHOP_END

class StopWatch extends React.Component {
  // WORKSHOP_START
  // in here, you should initialize the state with the following properties:
  // - running: false
  // - lapse: 0
  //
  // You'll also need two private properties
  // (proposals are making their way through the TC39 process, for now we'll
  // resort to good ol' _prefixed variable names :D)
  // - _timer = null (keeps track of the setInterval id so you can clear it)
  // - _now = 0 (keeps track of the difference between the actual current
  //   time and when start was started)
  //
  // In your render method, you'll render a div wrapper with a label that renders
  // {this.state.lapse} and two buttons (Start/Stop, and Clear). You'll need to
  // have an onClick handler on the <buttons> and you can define those using
  // Public Class Fields. And you'll also need to have start and stop methods
  // which your click handlers will use to start and stop the setInterval
  // WORKSHOP_END
  // FINAL_START
  state = {
    running: false,
    lapse: 0,
  }

  _now = 0
  _timer = null

  componentWillUnmount() {
    this.stop()
  }

  handleRunClick = () => {
    if (this.state.running) {
      this.stop()
    } else {
      this.start()
    }
  }

  handleClearClick = () => {
    this.stop()
    this._now = 0
    this.setState({lapse: 0})
  }

  start() {
    this._timer = setInterval(() => {
      this.setState({
        lapse: Date.now() - this._now,
      })
    })

    this._now = Date.now() - this.state.lapse
    this.setState({running: true})
  }

  stop() {
    clearInterval(this._timer)
    this._timer = null
    this.setState({running: false})
  }

  // FINAL_END
  render() {
    // WORKSHOP_START
    return (
      <div>Stop Watch!</div>
    )
    // WORKSHOP_END
    // FINAL_START
    const buttonStyles = {
      border: '1px solid #ccc',
      background: '#fff',
      fontSize: '2em',
      padding: '15px',
      margin: '0 5px',
      width: '200px',
    }
    return (
      <div style={{textAlign: 'center'}}>
        <label style={{fontSize: '5em', display: 'block'}}>{this.state.lapse}ms</label>
        <button style={buttonStyles} onClick={this.handleRunClick}>{this.state.running ? 'Stop' : 'Start'}</button>
        <button style={buttonStyles} onClick={this.handleClearClick}>Clear</button>
      </div>
    )
    // FINAL_END
  }
}

// We don't need to do anything fancy here even with props, because the <StopWatch /> component tracks its own state!
export const example = () => (
  <StopWatch />
)

export default StopWatch
