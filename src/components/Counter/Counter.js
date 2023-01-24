import React, { Component } from "react"
import "./Counter.css"

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      max: props.max,
      min: props.min,
      step: props.step,
    }
  }

  increaseCount = () => {
    let newCount = this.state.count + this.state.step;
    if (this.state.count < this.state.max) {
      this.setState({
        count: newCount,
      })
    } else {
      this.setState({
        count: this.state.count,
      })
    }
  }
  decreaseCount = () => {
    let newCount = this.state.count - this.state.step;
    if (this.state.count > this.state.min) {
      this.setState({
        count: newCount,
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div id="counterDiv">
        <button className="countButton" onClick={this.decreaseCount}>
          -
        </button>
        <div className="midNum">{this.state.count}</div>
        <button className="countButton" onClick={this.increaseCount}>
          +
        </button>
      </div>
    )
  }
}

export default Counter