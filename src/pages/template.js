import * as React from "react"
import Layout from "../components/layout"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import bgVideo from "../images//02 Home/videoplayback.mp4"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import Button from "../components/elements/button"
import { useState } from "react"

const TemplatePage = () => {
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
      header: file(relativePath: { eq: "04 Investment/header.jpg" }) {
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
      Wellbeing: file(relativePath: { eq: "04 Investment/Wellbeing.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
    }
  `)

  const allImages = {
    header: getImage(data.header),
    lifestyle: getImage(data.lifestyle),

    // iconBackground: getImage(data.iconBackground),
  }

  const categories = [
    {
      name: "Lifestyle",
      icon: "Asset 3",
      desc: "We develop extraordinary lifestyle experiences where creativity meets comfort. Expect the unexpected as we craft unforgettable stays, blending intimate charm with lavish luxuries to create memories that last a lifetime.",
      link: "",
    },
    {
      name: "Food & Beverages",
      icon: "Asset 3",
      desc: "We concoct unique concepts that bring the best food and drinks to its visitors along with a relaxing atmosphere, resulting in unforgettable culinary experiences. Unwind in style with exquisite flavours and a memorable ambience.",
      link: "",
    },
    {
      name: "Wellbeing",
      icon: "Asset 3",
      desc: "We create healing experiences that calm, refresh and rejuvenate the mind and soul. Escape the outside world and indulge in personalized relaxation, with nurturing services, delicious cuisine and tranquil environments.vv",
      link: "",
    },
  ]
  return (
    <Layout>
      <section>
        <div className="relative h-full">
          <div className="bg-[#171A40]/60 absolute top-0 w-full h-full z-10" />
          <GatsbyImage
            image={allImages.header}
            className="h-[400px]"
            alt="header"
          />
          <div className="py-24 px-32 gap-10 absolute z-20 top-0 inset-0 flex justify-center items-center h-full">
            <div className="w-24">
              <GatsbyImage
                image={allImages.lifestyle}
                className="w-full"
                alt="header"
              />
            </div>
            <div className="flex justify-center font-poppins text-5xl text-white font-bold">
              Lifestyle
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-200/30 py-24 px-32">
          <div className="flex justify-center gap-5 items-center text-primaryDarkBlue">
            <div className=" font-poppins text-4xl  font-bold max-w-xs leading-snug ">
              Learn about lifestyle
            </div>
            <div className="max-w-xl">
              Experience the magic of extraordinary lifestyle experiences with
              Kefi. Our team is dedicated to blending creativity and comfort in
              unexpected ways, crafting unforgettable stays that combine
              intimate charm with lavish luxuries, creating memories that will
              last a lifetime. Learn more about our approach to lifestyle and
              discover how we can help you create your own unforgettable
              experiences.
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-x-scroll mx-24">
        <div className="grid grid-cols-6 relative gap-5 w-[3000px]">
          <div className="bg-primaryDarkBlue row-span-2 py-40"></div>
          <div className="bg-primaryDarkBlue  py-40"></div>
          <div className="bg-primaryDarkBlue  py-40"></div>
          <div className="bg-primaryDarkBlue  py-40"></div>
          <div className="bg-primaryDarkBlue  py-40"></div>
          <div className="bg-primaryDarkBlue row-span-2 py-40"></div>
          <div className="bg-primaryDarkBlue  py-40"></div>
          <div className="bg-primaryDarkBlue  py-40"></div>
          <div className="bg-primaryDarkBlue  py-40"></div>
          <div className="bg-primaryDarkBlue  py-40"></div>
        </div>
      </section>
    </Layout>
  )
}

export default TemplatePage
