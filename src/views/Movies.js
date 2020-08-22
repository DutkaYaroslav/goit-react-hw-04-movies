import React, {Component} from "react"
import {Link} from "react-router-dom"
import tvAPI from "../service/tv-api"
import SearchBar from "../components/SearchForm"
import getQueryParams from "../utils/getQueryString"
export default class Movies extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    const {query} = getQueryParams(this.props.location.search)

    if (query) {
      tvAPI
        .fetchMovieQuery(query)
        .then(movies => this.setState({movies: movies.results}))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {query: prev} = getQueryParams(prevProps.location.search)
    const {query: next} = getQueryParams(this.props.location.search)

    console.log(`prev${prev}`)
    console.log(`next${next}`)

    if (prev !== next) {
      tvAPI
        .fetchMovieQuery(next)
        .then(movies => this.setState({movies: movies.results}))
    }
  }

  handleQuery = query => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    })

    console.log(query)
  }

  render() {
    const {movies} = this.state
    return (
      <>
        <SearchBar onSubmit={this.handleQuery} />

        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${this.props.match.url}/${movie.id}`,
                    state: {from: this.props.location},
                  }}
                >
                  {movie.original_title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    )
  }
}
