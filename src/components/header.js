import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import { Bars3Icon, XMarkIcon, HomeIcon } from "@heroicons/react/24/outline"
import { Fade, Zoom } from "react-reveal"

const Header = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  const header = [
    {
      name: "Our Story",
      link: "/about-us",
    },
    // {
    //   name: "Careers",
    //   link: "",
    // },
    {
      name: "Invest",
      link: "/investment",
    },
    {
      name: "Distribution",
      link: "/distribution",
    },
    {
      name: "Food & Beverage",
      link: "/food-and-beverage",
    },
    {
      name: "Lifestyle",
      link: "/lifestyle",
    },
    {
      name: "Wellbeing",
      link: "/wellbeing",
    },
    {
      name: "Contact Us",
      link: "",
    },
  ]

  return (
    <div className="">
      <div className="absolute top-0 w-full">
        <div className="flex justify-between md:px-20 px-10 py-5 items-center">
          <div className="w-full z-20">
            <div className="fixed ">
              <Fade top duration={1000}>
                <div className="md:w-1/2 w-1/3">
                  <StaticImage
                    src="../images/01 Navbar and Footer/Kefi logo white.png"
                    className="w-full"
                  />
                </div>
              </Fade>
            </div>
          </div>
          <div
            className="md:mr-10 mr-10 mt-[5px]"
            onClick={() => {
              setIsSideBarOpen(!isSideBarOpen)
            }}
          >
            {isSideBarOpen ? (
              <XMarkIcon className="text-white md:w-10 w-8 cursor-pointer z-50 fixed " />
            ) : (
              <Bars3Icon className="text-white md:w-10 w-8 cursor-pointer z-50 fixed" />
            )}
          </div>
        </div>
      </div>
      <div
        className={`fixed h-full right-0 top-0 bg-primaryDarkBlue/70 backdrop-blur-md duration-300 z-20 ${
          isSideBarOpen
            ? "sm:w-96 w-full  "
            : "w-0 opacity-0 duration-300 overflow-hidden"
        } `}
      >
        {isSideBarOpen ? (
          <div className="absolute">
            <Link to="/">
              <HomeIcon className="text-white duration-300 md:w-10 w-8 cursor-pointer absolute top-[24px] md:left-20 left-10" />
            </Link>
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-col w-full items-center justify-between h-full py-40">
          <Fade right>
            {header.map((item, index) => {
              return (
                <Link to={item.link}>
                  <div className="text-white text-2xl font-poppins font-semibold cursor-pointer">
                    {item.name}
                  </div>
                </Link>
              )
            })}
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
