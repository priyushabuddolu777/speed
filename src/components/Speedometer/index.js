// Write your code here
import {Component} from 'react'
import './index.css'
class Speedometer extends Component {
  state = {
    speed: 0,
  }
  onClickApplyBrakeButton = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }
  onClickAccelerateButton = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }
  render() {
    const {speed} = this.state
    return (
      <div>
        <div>
          <h1>speedometer</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h1>speed is {speed}mbp</h1>
          <p> min limit is 0mbp,max limit is 200mbps</p>
          <div>
            <button type="button" onClick={this.onClickAccelerateButton}>
              accelerate
            </button>
            <button type="button" onClick={this.onClickApplyBrakeButton}>
              apply brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
