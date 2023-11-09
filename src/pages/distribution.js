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
import { Zoom, Bounce } from "react-reveal"

const DistributionPage = () => {
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
      header: file(
        relativePath: {
          eq: "05 Distribution/empty-warehouse-in-logistic-center-warehouse-for-s-2022-12-16-11-54-11-utc.jpg"
        }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      lifestyle: file(
        relativePath: { eq: "05 Distribution/Distribution icon.png" }
      ) {
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

  const allImages = {
    header: convertToBgImage(getImage(data.header)),
    lifestyle: getImage(data.lifestyle),

    // iconBackground: getImage(data.iconBackground),
  }

  const logos = [
    {
      image: "logo-1l",
    },
    {
      image: "logo-2l",
    },
    {
      image: "logo-3l",
    },
    {
      image: "logo-4l",
    },
    {
      image: "kepts men",
    },
    {
      image: "logol",
    },
  ]

  const masonry = [
    {
      image: "Gallery item",
      colspan: 2,
      rowspan: 2,
      span: "col-span-2 row-span-2",
    },
    {
      image: "Gallery item-1",
      colspan: 2,
      rowspan: 0,
      span: "col-span-2 row-span-0",
    },
    {
      image: "Gallery item-2",
      colspan: 3,
      rowspan: 0,
      span: "col-span-3 row-span-0",
    },
    {
      image: "Gallery item",
      colspan: 2,
      rowspan: 2,
      span: "col-span-2 row-span-2",
    },
    {
      image: "Gallery item-1",
      colspan: 2,
      rowspan: 0,
      span: "col-span-2 row-span-0",
    },
    {
      image: "Gallery item-2",
      colspan: 3,
      rowspan: 0,
      span: "col-span-3 row-span-0",
    },
    {
      image: "image",
      colspan: 2,
      rowspan: 0,
      span: "col-span-2 row-span-0",
    },
    {
      image: "Gallery item-3",
      colspan: 3,
      rowspan: 0,
      span: "col-span-3 row-span-0",
    },
    {
      image: "image",
      colspan: 2,
      rowspan: 0,
      span: "col-span-2 row-span-0",
    },
    {
      image: "Gallery item-3",
      colspan: 3,
      rowspan: 0,
      span: "col-span-3 row-span-0",
    },
  ]
  const newLocal = (
    <StaticImage src="../images/05 Distribution/KefiDistributionBanner-02.png" />
  )
  return (
    <Layout>
      <section>
        <div className="relative h-full">
          <BackgroundImage {...allImages.header} className="bg-right-top py-16">
            <div className="bg-[#171A40]/60 absolute top-0 w-full h-full z-10" />
            <div className="py-24 px-32 gap-10  z-20 relative   flex md:flex-row flex-col justify-center items-center h-full">
              <Fade left>
                <div className="md:w-24 w-16">
                  <GatsbyImage
                    image={allImages.lifestyle}
                    className="w-full"
                    alt="header"
                  />
                </div>
              </Fade>
              <Fade right>
                <div className="flex justify-center font-poppins text-5xl text-white font-bold">
                  Distribution
                </div>
              </Fade>
            </div>
          </BackgroundImage>
        </div>
      </section>

      <section>
        <div className="bg-gray-200/30 py-10 md:py-24 lg:px-24 xl:px-32 px-10">
          <div className="flex lg:flex-row flex-col justify-center gap-10 lg:gap-16 xl:gap-5 items-center text-primaryDarkBlue md:text-left text-center">
            <Fade left>
              <div className=" font-poppins text-4xl  font-bold lg:max-w-xs leading-snug ">
                Learn about Distribution
              </div>
            </Fade>
            <Fade right>
              <div className="xl:max-w-xl text-center lg:text-justify">
                Discover how Kefi Hospitality Group's extensive infrastructure
                network can streamline your distribution process and ensure your
                products are delivered on time and in perfect condition. With
                our expert supply chain logistics, you can trust us to handle
                your distribution needs with precision and efficiency, allowing
                you to focus on delivering the best possible customer
                experience. Learn more about our distribution solutions today.
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section>
        <div
          // className="overflow-x-scroll md:ml-24 ml-10 scrollbar-hide mt-16"
          className="overflow-x-scroll  scrollbar-hide"
          onScroll={event => updateScrollPercentage(event)}
        >
          <div className="flex  justify-center">
            <StaticImage src="../images/05 Distribution/KefiDistributionBanner-02.png" />
          </div>
          {/* <div className="grid grid-cols-14 relative gap-5 md:w-[2700px] w-[1800px]">
            {masonry.map((item, index) => {
              return (
                <Zoom>
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
                </Zoom>
              )
            })}
          </div> */}
        </div>
        {/* <Zoom>
          <div className="pagination flex justify-center items-center mt-10 gap-2 ">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </Zoom> */}
      </section>
      <section>
        <Zoom>
          <div className="">
            <Idea />
          </div>
        </Zoom>
      </section>

      <section>
        {/* <div
          // className="md:px-32 px-10  py-24 bg-[#877465] my-10"
          className="md:px-32 px-10  py-24  my-10" */}
        {/* > */}
        {/* <div className="text-center">
            <div className=" font-extrabold font-poppins  text-white text-4xl">
              Distribution Brands
            </div>
            <div className="mt-10 mb-10 text-white max-w-xl mx-auto">
              Kefi Hospitality Group is proud to collaborate with three of the
              most innovative companies in the region to provide pioneering
              solutions that redefine what true hospitality is.
            </div>
          </div> */}
        {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-y-0 md:gap-y-14 sm:gap-y-20 gap-10  items-center h-full ">
            {logos.map((item, index) => {
              return (
                <div className="md:w-1/2 w-1/3 mx-auto ">
                  <GatsbyImage
                    image={getImage(
                      data.allFile.nodes.find(node => node.name === item.image)
                    )}
                    alt={item.image}
                    className="w-full"
                  />
                </div>
              )
            })}
          </div> */}
        {/*          
        </div> */}
      </section>
    </Layout>
  )
}

export default DistributionPage
