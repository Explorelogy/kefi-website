import React from "react"
import { useLocation } from "@reach/router"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {

  const location = useLocation();

  return (
    <>
        <Header />
        <main>{children}</main>
        {location.pathname == '/' ? (
          <></>
        ):(
          <Footer />
        )}
    </>
  )
}

export default Layout
