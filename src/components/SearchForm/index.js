import React, {Component} from "react"

export default class SearchBar extends Component {
  state = {
    value: "",
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  handSubmit = e => {
    e.preventDefault()

    this.props.onSubmit(this.state.value)

    this.setState({value: ""})
  }

  render() {
    return (
      <form onSubmit={this.handSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    )
  }
}
