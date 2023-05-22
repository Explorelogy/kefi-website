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
      header: file(
        relativePath: {
          eq: "10 Careers/barista-working-in-a-coffee-shop-2021-08-28-02-49-23-utc (1).jpg"
        }
      ) {
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
        <div className="relative h-full mb-10">
          <BackgroundImage
            {...allImages.header}
            className=" py-40 bg-center "
          >
            <div className="bg-[#313131B5]/60 absolute top-0 w-full h-full z-10" />
            <div className="py-24 px-32 gap-10 flex flex-col z-20 relative justify-center items-center h-full">
              <Zoom>
                <div className="flex justify-center font-poppins text-5xl text-white font-bold">
                  Join The Dream Team!
                </div>
              </Zoom>
              <Zoom>
                <div className="flex justify-center font-poppins max-w-2xl text-center font-extralight text-white ">
                  Embark on a Journey of Endless Opportunities, Growth, and
                  Success - Join Our Dynamic and Innovative Team and Unleash
                  Your Full Potential to Achieve Your Dreams and Beyond!
                </div>
              </Zoom>
              <Zoom>
                <div className="px-6 py-4 rounded-lg text-lg text-white bg-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryBlue duration-200 hover:text-white  flex justify-center">
                  Check openings
                </div>
              </Zoom>
            </div>
          </BackgroundImage>
        </div>
      </section>
    </Layout>
  )
}

export default LifestylePage
