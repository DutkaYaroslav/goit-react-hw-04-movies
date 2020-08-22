import React from "react"
import {Link} from "react-router-dom"
import imagePath from "../img/aggressiveretsuko.png"
import routes from "../routes"

const styles = {
  container: {textAlign: "center"},
  status: {fontSize: 96, marginBottom: 16},
}

const NotFound = () => (
  <div style={styles.container}>
    {" "}
    <h1 style={styles.status}>404</h1>
    <img src={imagePath} width="320" alt="error" />
    <p>
      виглядає, немов ви заблукали. ось{" "}
      <Link to={routes.home}>посиланнян на головну сторінку</Link>
    </p>
  </div>
)

export default NotFound
