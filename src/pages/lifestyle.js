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
import Fade from "react-reveal/Fade"
import { useEffect, useRef } from "react"
import { Zoom, Bounce } from "react-reveal"
import MainSlider1 from "../components/slider/mainSlider1"

const LifestylePage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(quality: 100, formats: [AUTO, WEBP])
          }
          name
          publicURL
        }
      }
      header: file(relativePath: { eq: "07 Lifestyle/Lifestyle-Header.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      lifestyle: file(relativePath: { eq: "04 Investment/Asset 3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      Food: file(relativePath: { eq: "04 Investment/Food.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
    }
  `)

  const allImages = {
    header: convertToBgImage(getImage(data.header)),
    lifestyle: getImage(data.lifestyle),

    // iconBackground: getImage(data.iconBackground),
  }

  return (
    <Layout>
      <section>
        <div className="relative  h-full">
          <BackgroundImage {...allImages.header} className="bg-center  py-16">
            <div className="bg-[#171A40]/60 absolute top-0 w-full h-full z-10" />
            <div className="py-24 px-32 gap-10  z-20 relative   flex md:flex-row flex-col justify-center items-center h-full">
              <Zoom>
                <div className="md:w-24 w-16">
                  <GatsbyImage
                    image={allImages.lifestyle}
                    className="w-full"
                    alt="header"
                  />
                </div>
              </Zoom>
              <Zoom>
                <div className="flex justify-center font-poppins text-5xl text-white font-bold">
                  Lifestyle
                </div>
              </Zoom>
            </div>
          </BackgroundImage>
        </div>
      </section>

      <section>
        <div className="bg-gray-200/30 py-10 md:py-24 lg:px-24 xl:px-32 px-10">
          <div className="flex lg:flex-row flex-col justify-center gap-10 lg:gap-16 xl:gap-5 items-center text-primaryDarkBlue md:text-left text-center">
            <Fade>
              <div className=" font-poppins text-4xl  font-bold lg:max-w-xs leading-snug  ">
                Learn about Lifestyle
              </div>
            </Fade>
            <Fade>
              <div className="xl:max-w-xl text-center lg:text-justify">
                Experience the magic of extraordinary lifestyle experiences with
                Kefi Hospitality Group. Our team is dedicated to blending
                creativity and comfort in unexpected ways, crafting
                unforgettable stays that combine intimate charm with lavish
                luxuries, and creating memories that will last a lifetime. Learn
                more about our approach to lifestyle and discover how we can
                help you create your own unforgettable experiences.
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* <section>
        <div
          className="overflow-x-scroll md:ml-24 ml-10  mt-16"
          onScroll={event => updateScrollPercentage(event)}
        >
          <div className="grid grid-cols-14 relative gap-5 md:w-[2700px] w-[1800px]">
            <Zoom>
              {masonry.map((item, index) => {
                return (
                  <div className={`bg-primaryDarkBlue ${item.span}`}>
                    <GatsbyImage
                      image={getImage(
                        data.allFile.nodes.find(
                          node => node.name === item.image
                        )
                      )}
                      alt={item.image}
                      className="w-full h-full bg-cover"
                    />
                  </div>
                )
              })}
            </Zoom>
          </div>
        </div>
        <Zoom>
          <div className="pagination flex justify-center items-center mt-10 gap-2 ">
            <span className="dot"></span>
            <span className="dot"></span>
           
          </div>
        </Zoom>
      </section> */}
      {/* <section>
        <div
          className="overflow-x-scroll hide-scroll md:ml-24 ml-10 mt-16"
          ref={sliderRef}
        >
          <div className="grid grid-cols-14 relative gap-5 md:w-[2700px] w-[1800px]">
            <Zoom>
              {masonry.map((item, index) => (
                <div className={`bg-primaryDarkBlue ${item.span}`} key={index}>
                  <GatsbyImage
                    image={getImage(
                      data.allFile.nodes.find(
                        node => node.name === item.image
                      )
                    )}
                    alt={item.image}
                    className="w-full h-full bg-cover"
                  />
                </div>
              ))}
            </Zoom>
          </div>
        </div>
        <Zoom>
          <div className="pagination flex justify-center items-center mt-10 gap-2 ">
            {masonry.map((item, index) => (
              <span
                key={index}
                className={`dot ${currentSlide  === index  ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </Zoom>
      </section> */}
      <section>
        <div className="md:px-10   px-5 pt-20 mx-auto container">
          <MainSlider1 />
        </div>
        <div className="flex justify-center mt-5">
          <div>
            <div className="swiper-custom-pagination flex items-center mt-2" />
          </div>
        </div>
      </section>
      {/* <section>
        <div className="flex justify-center items-center mt-4 gap-2">
          <button onClick={handleScrollLeft}>Scroll Left</button>
          <button onClick={handleScrollRight}>Scroll Right</button>
        </div>
      </section> */}
      {/* <section>
        <div className="flex justify-center items-center mt-4 gap-2">
          <button onClick={() => handleSlideChange(-1)}>Previous</button>
          <button onClick={() => handleSlideChange(1)}>Next</button>
        </div>
      </section> */}
      <section>
        <Zoom>
          <div className="">
            <Idea />
          </div>
        </Zoom>
      </section>
    </Layout>
  )
}

export default LifestylePage
