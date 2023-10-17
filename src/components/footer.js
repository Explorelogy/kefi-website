import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./elements/button"
import { Fade } from "react-reveal"
import { Link } from "gatsby"

const Footer = () => {
  const icons = [
    { name: "facebook", icon: faFacebook, url: "https://www.facebook.com/" },
    { name: "twitter", icon: faTwitter, url: "https://twitter.com/" },
    { name: "instagram", icon: faInstagram, url: "https://www.instagram.com/" },
    { name: "linkedin", icon: faLinkedin, url: "https://www.linkedin.com/" },
  ]

  return (
    <div>
      {/* <Fade bottom>
        <div className="flex justify-center items-center  pt-10">
          <StaticImage
            src="../images/09 Contact/Kefi_Logo_icon.png"
            width={100}
            className=""
          />
        </div>
      </Fade> */}
      {/* <div className="h-[1px] bg-black/20 mb-8"></div> */}
      <div className="px-20">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex justify-center items-center top-0 left-72 h-full w-full md:pl-16">
            {/* Center the image on all screens */}
            <StaticImage
              src="../images/09 Contact/Kefi_Logo_icon.png"
              width={50}
              className="mx-auto" // Center the image horizontally
            />
          </div>
          <Link to="/contact-us">
            <div className="text-sm font-extrabold text-primaryDarkBlue cursor-pointer md:mb-0 mb-6 lg:text-center md:text-center text-right ">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
      {/* <div>
              <div className="flex md:flex-row flex-col justify-between items-center gap-5 ">
                {icons.map((item, index) => (
                  <>
                    <div className="flex justify-start w-full  gap-2 items-center group ">
                      <div className="w-10 h-10 rounded-full bg-primaryDarkBlue/40 group-hover:bg-primaryDarkBlue duration-150 cursor-pointer">
                        <div className="flex justify-center items-center h-full">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon
                              icon={item.icon}
                              className="text-white transition duration-300 ease-in-out "
                              size="lg"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-primaryDarkBlue/40 group-hover:text-primaryDarkBlue duration-150 cursor-pointer">
                        {item.name}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div> */}
      <div className="py-5 mt-8 bg-primaryDarkBlue/40">
        <div className="md:px-20 px-10">
          <div className="flex justify-between items-center text-white text-sm">
            <Fade left>
              <div className="">© kefihospitalitygroup 2023 </div>
            </Fade>
            <Fade right>
              <div>Privacy Policy </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
