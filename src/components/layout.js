import React from "react"
import { useLocation } from "@reach/router"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {

  const location = useLocation();

  return (
    <>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GTM-NT94DF9W"
        ></script>
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'GTM-NT94DF9W');
        `}
        </script>
      </Helmet>

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
