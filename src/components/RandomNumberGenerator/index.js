// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomNumber = () => {
    this.setState({
      number: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {number} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="button" onClick={this.randomNumber}>
            Generate
          </button>
          <p className="paragraph">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
