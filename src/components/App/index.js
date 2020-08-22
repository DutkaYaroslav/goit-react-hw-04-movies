import React, {lazy, Suspense} from "react"
import {Switch, Route} from "react-router-dom"
import Layout from "../Layout"
// import Home from "../../views/Home"
// import Movies from "../../views/Movies"
// import NotFound from "../../views/NotFound"
// import MovieDetails from "../../views/MovieDetailsHome"
import routes from "../../routes"

const asyncMovies = lazy(() =>
  import("../../views/Movies" /* webpackChunkName: "moviesChunk"*/),
)

const asyncDetails = lazy(() =>
  import("../../views/MovieDetailsHome" /* webpackChunkName: "detailsChunk"*/),
)

const asyncNotFound = lazy(() =>
  import("../../views/NotFound" /* webpackChunkName: "notFoundChunk"*/),
)

const asyncHome = lazy(() =>
  import("../../views/Home" /* webpackChunkName: "homeChunk"*/),
)

const App = () => (
  <Layout>
    <Suspense fallback={<h1>loading</h1>}>
      <Switch>
        <Route path={routes.home} component={asyncHome} exact />
        <Route path={routes.movie} exact component={asyncMovies} />
        <Route path={routes.detail} component={asyncDetails} />
        <Route component={asyncNotFound} />
      </Switch>
    </Suspense>
  </Layout>
)

export default App
