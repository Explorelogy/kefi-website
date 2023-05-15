import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Bars3Icon, XMarkIcon, HomeIcon } from "@heroicons/react/24/outline"

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  return (
    <div>
      <div className="absolute top-0 w-full">
        <div className="flex justify-between px-20 py-5 items-center">
          <div className="w-full z-20">
            <div>
              <StaticImage
                src="../images/01 Navbar and Footer/Kefi logo white.png"
                width={100}
              />
            </div>
          </div>
          <div
            className=""
            onClick={() => {
              setIsSideBarOpen(!isSideBarOpen)
            }}
          >
            {isSideBarOpen ? (
              <XMarkIcon className="text-white w-10 cursor-pointer z-50 relative " />
            ) : (
              <Bars3Icon className="text-white w-10 cursor-pointer z-50 relative" />
            )}
          </div>
        </div>
      </div>
      <div
        className={`absolute h-screen right-0 top-0 bg-primaryDarkBlue duration-300 z-20 ${
          isSideBarOpen ? "w-80 " : "w-0"
        } `}
      >
        {isSideBarOpen ? (
          <div className="absolute">
            <HomeIcon className="text-white duration-300 w-10 cursor-pointer absolute top-[19px] left-20" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Header
