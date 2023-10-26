import * as React from "react"
import Layout from "../components/layout"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import bgVideo from "../images//02 Home/videoplayback.mp4"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import Button from "../components/elements/button"
import { useState } from "react"
import Idea from "../components/idea"

const TemplatePage = ({ data }) => {
  const event = data.dataJson
  console.log(event)

  function updateScrollPercentage(event) {
    var scrollSection = event.target
    var scrollPercentage =
      (scrollSection.scrollLeft /
        (scrollSection.scrollWidth - scrollSection.clientWidth)) *
      100

    // Update pagination dots based on scroll percentage
    var dots = document.getElementsByClassName("dot")
    for (var i = 0; i < dots.length; i++) {
      if (scrollPercentage >= i * 16.66 && scrollPercentage <= (i + 1) * 17) {
        dots[i].classList.add("active")
      } else {
        dots[i].classList.remove("active")
      }
    }
  }

  return (
    <Layout>
      <section>
        <div className="relative h-full">
          <div className="bg-[#171A40]/60 absolute top-0 w-full h-full z-10" />
          <GatsbyImage
            image={event.backgroundImage.childImageSharp.gatsbyImageData}
            className="h-[400px]"
            alt="header"
          />
          <div className="py-24 md:px-32 px-10 gap-10 absolute z-20 top-0 inset-0  flex md:flex-row flex-col justify-center items-center h-full">
            <div className="w-24">
              <GatsbyImage
                image={event.icon.childImageSharp.gatsbyImageData}
                className="w-full"
                alt="header"
              />
            </div>
            <div className="flex justify-center font-poppins text-5xl text-white font-bold">
              {event.title}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-200/30 py-24 md:px-32 px-10">
          <div className="flex md:flex-row flex-col  justify-center gap-5 items-center text-primaryDarkBlue">
            <div className=" font-poppins text-4xl lg:text-left text-center  font-bold max-w-xs leading-snug ">
              {event.subTitle}
            </div>
            <div className="max-w-xl lg:text-left text-center">
              {event.desc}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="overflow-x-scroll ml-24  scrollbar-hide"
          onScroll={event => updateScrollPercentage(event)}
        >
          <div className="grid grid-cols-14 relative gap-5 masonry">
            {event.images.map((item, index) => {
              return (
                <div
                  className={`bg-primaryDarkBlue row-span-${item.rowspan} col-span-${item.colspan} `}
                >
                  <GatsbyImage
                    image={item.image.childImageSharp.gatsbyImageData}
                    className="w-full h-full bg-cover "
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className="pagination flex justify-center items-center mt-10 gap-2 ">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      <section>
        <div className="  py-24 idea">
          <Idea />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    dataJson(slug: { eq: $slug }) {
      slug
      backgroundImage {
        publicURL
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      title
      icon {
        publicURL
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
    }
  }
`

export default TemplatePage
