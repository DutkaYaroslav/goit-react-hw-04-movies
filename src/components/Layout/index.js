import React from "react"
import Header from "../Header"

const styles = {
  maxWidths: 1170,
  marginLeft: "auto",
  marginRight: "auto",
  paddingRight: 12,
  paddingLegt: 12,
}

const Layout = ({children}) => (
  <div style={styles}>
    <Header />
    {children}
  </div>
)

export default Layout
