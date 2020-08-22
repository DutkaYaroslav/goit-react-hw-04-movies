import React, {Component} from "react"

import {Route, NavLink, Switch} from "react-router-dom"
import Cast from "../views/Cast"
import Reviews from "../views/Reviews"
import tvIPS from "../service/tv-api"
import routes from "../routes"

export default class MovieDetails extends Component {
  state = {
    movie: null,
    cast: [],
    review: [],
  }

  componentDidMount() {
    tvIPS
      .fetchMovieDetail(this.props.match.params.movieId)
      .then(movie => this.setState({movie}))

    tvIPS
      .fetchCast(this.props.match.params.movieId)
      .then(cast => this.setState({cast}))

    tvIPS
      .fetchReview(this.props.match.params.movieId)
      .then(review => this.setState({review: review.results}))
  }

  // fetchCast() {
  //   tvIPS
  //     .fetchCast(this.props.match.params.movieId)
  //     .then(cast => this.setState({cast}))
  // }

  handleBack = () => {
    if (this.props.location.state && this.props.location.state.from) {
      return this.props.history.push(this.props.location.state.from)
    }

    this.props.history.push("/movies")
  }

  render() {
    const {movie, cast, review} = this.state

    console.log(this.state)
    return (
      <>
        <button type="button" onClick={this.handleBack}>
          Go back
        </button>
        <br />
        {movie && (
          <div>
            <div className="film-detail">
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                className="list-info"
                alt={movie.original_title}
              ></img>
              <div>
                <h2>{movie.original_title}</h2>
                <p>{movie.vote_average * 10 + "%"}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <ul>
                  {movie.genres &&
                    movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
              </div>
            </div>

            {cast && (
              <>
                <ul className="more-details">
                  <li className="navlink">
                    <NavLink to="/movies/:movieId/cast"> Cast</NavLink>
                  </li>

                  <li className="navlink">
                    <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
                  </li>
                </ul>
                <Switch>
                  <Route path={`${this.props.match.path}/cast`}>
                    <Cast castinfo={cast.cast} />
                  </Route>
                  <Route path="/movies/:movieId/reviews">
                    <Reviews reviewinfo={review} />
                  </Route>
                </Switch>
              </>
            )}
          </div>
        )}
      </>
    )
  }
}
