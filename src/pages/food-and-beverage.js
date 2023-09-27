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

const FoodAndBeveragePage = () => {
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
      header: file(relativePath: { eq: "11 Food & Beverage/header.jpg" }) {
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
                  Food & Beverage
                </div>
              </Fade>
            </div>
          </BackgroundImage>
        </div>
      </section>

      <section>
        <div className="bg-gray-200/30 py-24 md:px-32 px-10">
          <div className="flex md:flex-row flex-col justify-center gap-10 items-center text-primaryDarkBlue md:text-left text-center">
            <Fade left>
              <div className=" font-poppins text-4xl  font-bold max-w-xs leading-snug ">
                Learn about<br/> Food & Beverage
              </div>
            </Fade>
            <Fade right>
              <div className="max-w-xl">
                At Kefi, we believe that food and drinks are not just about
                nourishment, but also about creating unforgettable experiences.
                Our team of experts develops innovative ideas that blend
                delicious flavours with a relaxing atmosphere to deliver
                exceptional culinary experiences. Discover how our passion for
                food and beverages can help you bring your own unique vision to
                life.
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section>
      <div className="flex  justify-center">
            <StaticImage src="../images/11 Food & Beverage/F&B-Image.png" />
          </div>
        {/* <div
          className="overflow-x-scroll md:ml-24 ml-10 scrollbar-hide mt-16"
          onScroll={event => updateScrollPercentage(event)}
        >
          <div className="grid grid-cols-14 relative gap-5 md:w-[2700px] w-[1800px]">
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
          </div>
        </div>
        <Zoom>
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
          <div className="lg:px-80 px-10 lg:py-24 py-20">
            <Idea />
          </div>
        </Zoom>
      </section>
    </Layout>
  )
}

export default FoodAndBeveragePage
