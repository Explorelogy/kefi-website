import * as React from "react"
import Layout from "../components/layout"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import bgVideo from "../images//02 Home/videoplayback.mp4"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import Button from "../components/elements/button"

const InvestmentPage = () => {
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
      lifestyle: file(relativePath: { eq: "04 Investment/lifestyle.png" }) {
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
            className="h-[650px]"
            alt="header"
          />
          <div className="py-24 px-32 absolute z-20 top-0 inset-0 flex justify-center ">
            <div className="mt-10">
              <div>
                <div className="flex justify-center font-poppins text-4xl text-white font-bold mb-6">
                  Investments
                </div>
                <div className="text-white max-w-2xl mx-auto text-center">
                  Kefi Hospitality Group’s Investment services help you grow
                  your business and realise your true potential while ensuring
                  customer satisfaction remains at the heart of the experience.{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="py-24 px-32 absolute z-20 top-0 inset-0 flex justify-between items-end gap-5 ">
            {categories.map((item, index) => {
              return (
                <div>
                  <div className="px-32 py-6   bg-[#B1C4D4]/30 backdrop-blur-md ">
                    <div className="flex justify-center items-center">
                      <div>
                        <div className="flex justify-center w-full">
                          <GatsbyImage
                            image={getImage(
                              data.allFile.nodes.find(
                                node => node.name === item.icon
                              )
                            )}
                            alt={item.alt}
                            className="w-1/3"
                          />
                        </div>
                        <div className=" font-semibold font-poppins text-center mt-6 text-white max-w-xl text-lg">
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="px-32 py-24">
          <div className="flex justify-between gap-14">
            <div className="w-1/2 ">
              <StaticImage src="../images/04 Investment/lifestyle.png" />
            </div>
            <div className="w-1/2 flex flex-col justify-between">
              <div className="w-1/6 ">
                <StaticImage src="../images/04 Investment/lifestyle icon.png" />
              </div>
              <div className=" font-extrabold font-poppins  mt-8 text-primaryDarkBlue max-w-xl text-4xl">
                Lifestyle
              </div>
              <div className="mt-14 mb-10 max-w-xl">
                We develop extraordinary lifestyle experiences where creativity
                meets comfort. Expect the unexpected as we craft unforgettable
                stays, blending intimate charm with lavish luxuries to create
                memories that last a lifetime.
              </div>
              <div className="flex flex-wrap">
                <div className="px-5 py-3 border-primaryDarkBlue border-2 rounded-lg text-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryDarkBlue duration-200 hover:text-white  flex justify-center ">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-32 py-24 bg-gray-200/30">
          <div className="flex justify-between gap-14">
            <div className="w-1/2 flex flex-col justify-between">
              <div className="w-1/6 ">
                <StaticImage src="../images/04 Investment/lifestyle icon.png" />
              </div>
              <div className=" font-extrabold font-poppins  mt-8 text-primaryDarkBlue max-w-xl text-4xl">
                Lifestyle
              </div>
              <div className="mt-14 mb-10 max-w-xl">
                We develop extraordinary lifestyle experiences where creativity
                meets comfort. Expect the unexpected as we craft unforgettable
                stays, blending intimate charm with lavish luxuries to create
                memories that last a lifetime.
              </div>
              <div className="flex flex-wrap">
                <div className="px-5 py-3 border-primaryDarkBlue border-2 rounded-lg text-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryDarkBlue duration-200 hover:text-white  flex justify-center ">
                  Learn More
                </div>
              </div>
            </div>
            <div className="w-1/2 ">
              <StaticImage src="../images/04 Investment/lifestyle.png" />
            </div>
          </div>
        </div>

        <div className="px-32 py-24">
          <div className="flex justify-between gap-14">
            <div className="w-1/2 ">
              <StaticImage src="../images/04 Investment/lifestyle.png" />
            </div>
            <div className="w-1/2 flex flex-col justify-between">
              <div className="w-1/6 ">
                <StaticImage src="../images/04 Investment/lifestyle icon.png" />
              </div>
              <div className=" font-extrabold font-poppins  mt-8 text-primaryDarkBlue max-w-xl text-4xl">
                Lifestyle
              </div>
              <div className="mt-14 mb-10 max-w-xl">
                We develop extraordinary lifestyle experiences where creativity
                meets comfort. Expect the unexpected as we craft unforgettable
                stays, blending intimate charm with lavish luxuries to create
                memories that last a lifetime.
              </div>
              <div className="flex flex-wrap">
                <div className="px-5 py-3 border-primaryDarkBlue border-2 rounded-lg text-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryDarkBlue duration-200 hover:text-white  flex justify-center ">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-80 pb-24">
          <div className="`flex justify-center items-center px-16 py-16 bg-gray-200/30">
            <div className="flex justify-between items-end">
              <div>
                <div className=" font-extrabold font-poppins mb-8   text-primaryDarkBlue max-w-xl text-4xl">
                  Tell us about your idea!
                </div>
                <div className="max-w-lg">
                  Get in touch with us today and start your journey towards
                  constructing a hospitality experience that will be
                  unforgettable and unique.
                </div>
              </div>
              <div>
                <div className="flex flex-wrap ">
                  <div className="px-6 py-4 rounded-lg text-lg text-white bg-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryBlue duration-200 hover:text-white  flex justify-center ">
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default InvestmentPage
