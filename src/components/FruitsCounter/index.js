// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }
  onMango = () => {
    const {mangoCount} = this.state
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }
  onBanana = () => {
    const {bananaCount} = this.state
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }
  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="top-section">
            <h1 className="sentence">
              Bob ate <span className="count"> {mangoCount} </span> mangoes
              <span className="count"> {bananaCount} </span> bananas
            </h1>
          </div>
          <div className="bottom-section">
            <div className="mango-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <div className="button-container">
                <button className="button" onClick={this.onMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="mango-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <div className="button-container">
                <button className="button" onClick={this.onBanana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
