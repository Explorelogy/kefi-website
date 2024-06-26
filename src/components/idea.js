import React from "react"
import { Link } from "gatsby"

const Idea = () => {
  return (
    <div className="xl:px-56 py-24 lg:px-20 px-10">
      <div className="`flex justify-center items-center lg:px-16 px-8 py-16 bg-gray-200/30">
        <div className="flex lg:flex-row flex-col  justify-between lg:items-end items-center">
          <div>
            <div className=" font-extrabold font-poppins mb-8 lg:text-left text-center   text-primaryDarkBlue lg:max-w-xl max-w-none text-4xl">
              Tell us about your idea!
            </div>
            <div className="max-w-lg lg:text-justify text-center">
              Get in touch with us today and start your journey towards
              constructing a hospitality experience that will be unforgettable
              and unique.
            </div>
          </div>
          <div>
            <Link to="/contact-us">
              <div className="flex flex-wrap lg:mt-0 mt-6  ">
                <div className="px-6 py-4 rounded-lg text-lg text-white bg-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryBlue duration-200 hover:text-white  flex justify-center ">
                  Contact Us
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Idea
