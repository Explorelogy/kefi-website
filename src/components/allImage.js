import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const AllImage = () => {
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

      header: file(relativePath: { eq: "03 About us/header-AboutUs.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      coffee: file(relativePath: { eq: "03 About us/coffeshop.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
    }
  `)

  const allImages = {
    header: getImage(data.header),
    coffee: convertToBgImage(getImage(data.coffee)),
  }

  return (
    <div>
      <BackgroundImage {...allImages.coffee} className="realtive">
        <div className=" absolute h-full bg-[#313131]/60 top-0 w-full" />
        <div className="relative z-20 items-center text-center px-32 py-60 ">
          <div className="text-4xl font-bold text-white py-10">
            Join the dream team!
          </div>
          <div className="text-center mx-auto max-w-xl text-white">
            Embark on a Journey of Endless Opportunities, Growth, and Success -
            Join Our Dynamic and Innovative Team and Unleash Your Full Potential
            to Achieve Your Dreams and Beyond!
          </div>
          <div className="flex flex-wrap justify-center py-10">
            <div className=" px-6 py-4 rounded-lg text-lg text-white bg-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryBlue duration-200 hover:text-white  flex justify-center ">
              Check Openings
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default AllImage
