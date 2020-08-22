import React from "react"
import {NavLink} from "react-router-dom"
import routes from "../../routes"

const Navigation = () => (
  <ul className="menu">
    <li>
      <NavLink
        exact
        to={routes.home}
        className="navlink"
        activeClassName="navlink-activ"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.movie}
        className="navlink"
        activeClassName="navlink-activ"
      >
        Movies
      </NavLink>
    </li>
  </ul>
)

export default Navigation
