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
import { useEffect, useRef } from "react"
import MainSlider from "../components/slider/mainSlider"

const WellbeingPage = () => {
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
      header: file(relativePath: { eq: "08 Well-being/Wellbeing-Header.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      lifestyle: file(
        relativePath: { eq: "08 Well-being/Well-being icon.png" }
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

  const allImages = {
    header: convertToBgImage(getImage(data.header)),
    lifestyle: getImage(data.lifestyle),
  }

  const masonry = [
    {
      image: "well_beign_gallery_2",
      colspan: 2,
      rowspan: 2,
      span: "col-span-2 row-span-2",
    },
    {
      image: "well_beign_gallery_5",
      colspan: 2,
      rowspan: 0,
      span: "col-span-2 row-span-0",
    },
    {
      image: "well_beign_gallery_3",
      colspan: 3,
      rowspan: 0,
      span: "col-span-3 row-span-0",
    },
    {
      image: "well_beign_gallery_6",
      colspan: 2,
      rowspan: 2,
      span: "col-span-2 row-span-2",
    },
    {
      image: "well_beign_gallery_7",
      colspan: 2,
      rowspan: 0,
      span: "col-span-2 row-span-0",
    },
    {
      image: "well_beign_gallery_8",
      colspan: 3,
      rowspan: 0,
      span: "col-span-3 row-span-0",
    },
    {
      image: "well_beign_gallery_1",
      colspan: 2,
      rowspan: 0,
      span: "col-span-2 row-span-0",
    },
    {
      image: "well_beign_gallery_4",
      colspan: 3,
      rowspan: 0,
      span: "col-span-3 row-span-0",
    },
    {
      image: "well_beign_gallery_9",
      colspan: 2,
      rowspan: 0,
      span: "col-span-2 row-span-0",
    },
    {
      image: "well_beign_gallery_10",
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
            {/* <div className="bg-[#171A40]/60 absolute top-0 w-full h-full z-10" /> */}
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
                  Wellbeing
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
              <div className=" font-poppins text-4xl lg:text-start text-center  font-bold lg:max-w-xs leading-snug ">
                Learn about
                <br /> Wellbeing
              </div>
            </Fade>
            <Fade right>
              <div className="xl:max-w-xl text-center lg:text-justify">
                We understand the importance of wellbeing for a fulfilling life,
                which is why our team at Kefi is dedicated to creating healing
                experiences that refresh and rejuvenate the mind and soul. With
                personalised relaxation services, delicious cuisine, and
                tranquil environments, our goal is to help you escape the
                outside world and find inner peace. Discover more about our
                approach to wellbeing and how we can help you create your oasis
                of serenity.
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="">
        <div className="xl:ml-36 lg:ml-36 md:ml-24 ml-14 pt-20 ">
          <MainSlider />
        </div>
        <div className="flex justify-center mt-5">
          <div>
            <div className="swiper-custom-pagination flex items-center mt-2" />
          </div>
        </div>
      </section>
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

export default WellbeingPage
