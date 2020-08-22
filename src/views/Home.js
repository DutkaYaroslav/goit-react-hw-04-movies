import React, {Component} from "react"
import tvAPI from "../service/tv-api"
import {Link} from "react-router-dom"
import routes from "../routes"

// ${this.props.match.url}

export default class Home extends Component {
  state = {
    trend: [],
  }

  componentDidMount() {
    tvAPI.fetchHome().then(data => this.setState({trend: data.results}))
  }

  render() {
    const {trend} = this.state
    console.log(this.props.match.url)
    return (
      <>
        {trend && (
          <div>
            <h1>Trending today</h1>
            <ul>
              {trend.map(film => (
                <li key={film.id}>
                  <Link to={`${routes.movie}/${film.id}`}>
                    {film.name || film.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}
