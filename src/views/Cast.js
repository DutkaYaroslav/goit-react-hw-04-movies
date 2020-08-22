import React from "react"

const Cast = ({castinfo}) => (
  <ul>
    {castinfo &&
      castinfo.map(inf => (
        <li key={inf.id}>
          {inf.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${inf.profile_path}`}
            ></img>
          )}
          <h3>{inf.name}</h3>
        </li>
      ))}
  </ul>
)

export default Cast

// //import React, {Component} from "react"
// import tvIPS from "../service/tv-api"

// export default class Cast extends Component {
//   state = {
//     cast: null,
//   }

//   componentDidMount() {
//     tvIPS
//       .fetchCast(this.props.match.params.movieId)
//       .then(cast => this.setState({cast}))
//   }

//   render() {
//     const {cast} = this.state
//     console.log(cast.cast)
//     return (
//       <h2></h2>
//       // <ul>
//       //   {cast.map(info => (
//       //     <li>
//       //       <h3>{info.name}</h3>
//       //     </li>
//       //   ))}
//       // </ul>,
//     )
//   }
// }
