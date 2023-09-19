import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {

  console.log(window.location.href,'mala');

  return (
    <>
    

      {window.location.pathname == '/' ? (<>
        
        <Header />
        <main>{children}</main>
      
      </>) : (<>
        <Header />
        <main>{children}</main>
          <Footer />
        </>)
      }
      
    </>
  )
}

export default Layout
