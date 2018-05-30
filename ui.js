const { h, Component, Color } = require('ink')

class RootComponent  extends Component {
  constructor(props) {
    super(props)
    this.state = {
      i: 0,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(state => ({
        i: state.i + 1,
      }))
    }, 100)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
                hello!! hello!!
        <Color green>
          {this.state.i}
        </Color>
      </div>
    )
  }
}


module.exports = RootComponent
