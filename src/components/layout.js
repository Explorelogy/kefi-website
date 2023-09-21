import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {

  console.log(window.location.href,'mala');

  return (
    <>
        <Header />
        <main>{children}</main>
        {window.location.pathname == '/' ? (
          <></>
        ):(
          <Footer />
        )}
    </>
  )
}

export default Layout
