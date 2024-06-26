import * as React from "react"
import Layout from "../components/layout"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import bgVideo from "../images//02 Home/videoplayback.mp4"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import Button from "../components/elements/button"
import Idea from "../components/idea"
import { Link } from "gatsby"

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
    header: convertToBgImage(getImage(data.header)),

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
      name: "Food & Beverage",
      icon: "Asset 5",
      desc: "We concoct unique concepts that bring the best food and drinks to its visitors along with a relaxing atmosphere, resulting in unforgettable culinary experiences. Unwind in style with exquisite flavours and a memorable ambience.",
      link: "",
    },
    {
      name: "Wellbeing",
      icon: "Asset 4",
      desc: "We create healing experiences that calm, refresh and rejuvenate the mind and soul. Escape the outside world and indulge in personalized relaxation, with nurturing services, delicious cuisine and tranquil environments.vv",
      link: "",
    },
  ]
  return (
    <Layout>
      <section>
        <BackgroundImage {...allImages.header} className=" relative">
          <div className="bg-[#171A40]/60 absolute top-0 w-full h-full z-10" />
          <div className="py-24 lg:px-32 px-10 z-20 flex justify-center relative ">
            <div className="mt-10">
              <div>
                <div className="flex justify-center font-poppins text-4xl text-white font-bold mb-6">
                  Investment
                </div>
                <div className="text-white max-w-2xl mx-auto text-center">
                  <div>
                    Kefi Hospitality Group’s Investment services help you grow
                    your business and realise your true potential while ensuring
                    customer satisfaction
                  </div>
                  <div>remains at the heart of the experience. </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-5 relative z-20 pb-24 lg:px-32 px-10 ">
            {categories.map((item, index) => {
              return (
                <div>
                  <div className="px-10 py-6   bg-[#B1C4D4]/30 backdrop-blur-md ">
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
                            className="w-1/3 "
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
        </BackgroundImage>
      </section>

      <section>
        <div className="xl:px-32 lg:px-9 px-10 py-24 ">
          <div className="flex mx-auto lg:flex-row flex-col md:items-center justify-between gap-10 xl:gap-14">
            <div className="xl:w-1/2 w-full ">
              <StaticImage src="../images/04 Investment/lifestyle.jpg" />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col justify-between">
              <div className="">
                <div className=" flex lg:justify-start justify-center  ">
                  <div className="  w-1/6   ">
                    <StaticImage src="../images/04 Investment/lifestyle icon.png" />
                  </div>
                </div>
              </div>
              <div className=" font-extrabold font-poppins lg:text-start text-center   text-primaryDarkBlue  mt-6 text-4xl">
                Lifestyle
              </div>
              <div className="mt-6 mb-14 text-center lg:text-justify  ">
                We develop extraordinary lifestyle experiences where creativity
                meets comfort. Expect the unexpected as we craft unforgettable
                stays, blending intimate charm with lavish luxuries to create
                memories that last a lifetime.
              </div>

              <div className="flex lg:justify-start justify-center  flex-wrap">
                <Link to="/lifestyle">
                  <div className="px-5 py-3 border-primaryDarkBlue border-2 rounded-lg text-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryDarkBlue duration-200 hover:text-white   ">
                    Learn More
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:px-32 lg:px-9 px-10 py-24  bg-gray-200/30">
          <div className="flex lg:flex-row md:items-center flex-col  gap-10 xl:gap-14">
            <div className="xl:w-1/2 w-full lg:hidden block ">
              <StaticImage src="../images/04 Investment/Food.png" />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col  justify-between">
              <div className="flex lg:justify-start justify-center ">
                <div className="w-1/6   ">
                  <StaticImage src="../images/04 Investment/Food & Beverage icon.png" />
                </div>
              </div>

              <div>
                <div className=" font-extrabold font-poppins lg:text-start text-center  mt-7 text-primaryDarkBlue  text-4xl">
                  Food & Beverage
                </div>
                <div className="">
                  <div className=" mt-6 mb-14 text-center lg:text-justify  ">
                    We create unique concepts that bring the best food and
                    drinks to its visitors along with a relaxing atmosphere,
                    resulting in unforgettable culinary experiences. Unwind in
                    style with exquisite flavours and a memorable ambience.
                  </div>
                </div>
                <div></div>
                <div className="flex lg:justify-start justify-center  flex-wrap">
                  <Link to="/food-and-beverage">
                    <div className="px-5 py-3 border-primaryDarkBlue border-2 rounded-lg text-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryDarkBlue duration-200 hover:text-white   ">
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl:w-1/2   w-full lg:block hidden ">
              <StaticImage src="../images/04 Investment/Food.png" />
            </div>
          </div>
        </div>

        <div className="xl:px-32 lg:px-9 px-10  py-24">
          <div className="flex lg:flex-row flex-col md:items-center justify-between gap-10 xl:gap-14">
            <div className="xl:w-1/2 w-full ">
              <StaticImage src="../images/04 Investment/Wellbeing.png" />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col justify-between">
              <div className="flex lg:justify-start justify-center">
                <div className="w-1/6 ">
                  <StaticImage src="../images/04 Investment/Wellbeing icon.png" />
                </div>
              </div>
              <div className=" font-extrabold font-poppins lg:text-start text-center  mt-6 text-primaryDarkBlue  text-4xl">
                Wellbeing
              </div>
              <div className="mt-6 mb-14  text-center lg:text-justify">
                We create healing experiences that calm, refresh and rejuvenate
                the mind and soul. Escape the outside world and indulge in
                personalised relaxation, with nurturing services, delicious
                cuisine and tranquil environments.
              </div>
              <div className="flex lg:justify-start justify-center flex-wrap">
                <Link to="/wellbeing">
                  <div className="px-5 py-3 border-primaryDarkBlue border-2 rounded-lg text-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryDarkBlue duration-200 hover:text-white  flex justify-center ">
                    Learn More
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <Idea />
        </div>
      </section>
    </Layout>
  )
}

export default InvestmentPage
