import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

const ContactUs = () => {
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
      Distribution: file(relativePath: { eq: "03 About us/icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      Food: file(relativePath: { eq: "03 About us/icon-2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      Lifestyle: file(relativePath: { eq: "03 About us/icon-1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      Wellbeing: file(relativePath: { eq: "03 About us/icon-3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
    }
  `)

  const areas = [
    {
      name: "Distribution",
      icon: "icon",
      link: "",
    },
    {
      name: "Food & Beverages",
      icon: "icon-2",
      link: "",
    },
    {
      name: "Lifestyle",
      icon: "icon-1",
      link: "",
    },
    {
      name: "Wellbeing",
      icon: "icon-3",
      link: "",
    },
  ]

  const allImages = {
    header: getImage(data.header),
    coffee: convertToBgImage(getImage(data.coffee)),
  }

  return (
    <Layout>
      <section>
        <div className="px-32 py-24">
          <div className="flex justify-center items-center">
            <div className="flex gap-20 justify-center">
              {" "}
              <div className="w-2/4">
                <div className="w-1/5">
                  <StaticImage
                    src="../images/09 Contact/Kefi_Logo_icon.png"
                    className="w-96 "
                    
                  />
                </div>

                <div className=" font-extrabold font-poppins mb-8 mt-8   text-primaryDarkBlue max-w-xl text-4xl leading-normal">
                  Connect With Us
                </div>

                <div>
                  
                <div className=" text-primaryDarkBlue text-lg">
                  We love hearing new ideas and receiving new challenges, so get
                  in touch with us today! If you want to build a hospitality
                  concept that will leave a lasting impression and stand out
                  from the rest, let's work together to create something truly
                  magical.
                  </div>

                  <div className=" flex flex-row gap-4 mt-10">
                  <div className="flex gap-4">
                    <div className=" w-16 h-16 bg-primaryDarkBlue">
                      <div>
                        <StaticImage
                          src="../images/09 Contact/icon.png"
                          className="w-8 h-8 top-4 left-4"
                        />
                      </div>
                    </div>

                    <div className="flex j flex-col justify-items-center ">
                      <div className="text-base font-poppins leading-6 font-bold align-top">
                        Call us
                      </div>
                      <div className=" font-montserrat font-normal text-lg align-top">
                        +971&nbsp;55&nbsp;318&nbsp;8676
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 ">
                    <div className=" w-16 h-16 bg-primaryDarkBlue">
                      <div>
                        <StaticImage
                          src="../images/09 Contact/Group.png"
                          className="w-8 h-8 top-4 left-4"
                        />
                      </div>
                    </div>

                    <div className="flex j flex-col justify-items-center">
                      <div className="text-base font-poppins leading-6 font-bold align-top">
                        Emal us
                      </div>
                      <div className=" font-montserrat font-normal text-lg align-top">
                        info@kefihospitalitygroup.com
                      </div>
                    </div>
                  </div>
                </div>
                  
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div>
                  <div className=" max-w-xl mb-10 mx-auto font-poppins font-extrabold text-4xl text-primaryDarkBlue">
                    Drop a Message
                  </div>

                  <div>
                    <div className="font-montserrat text-lg text-primaryDarkBlue">
                      Enter Your Name
                    </div>
                    <div className="font-montserrat text-gray-400 text-lg mt-3  ">
                      <input
                        type="text"
                        className="block p-2.5 w-full   border-solid border-2 border-primaryDarkBlue rounded-lg py-2 shadow-[0px_ 1px_10px_rgba(0,0,0,0.4)] "
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="font-montserrat text-lg text-primaryDarkBlue">
                      Enter Email
                    </div>
                    <div className="  mt-3 ">
                      <input
                        type="text"
                        className="block p-2.5  w-full  border-solid border-2 border-primaryDarkBlue rounded-lg py-2 shadow-[0px_ 1px_10px_rgba(0,0,0,0.4)] font-montserrat text-gray-400 text-lg "
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="font-montserrat text-lg text-primaryDarkBlue">
                      Enter Your Message
                    </div>
                    <div className=" font-montserrat text-gray-400 text-lg mt-3 ">
                      <textarea
                        rows="4"
                        className="block p-2.5 w-full  rounded-lg border-solid border-2 border-primaryDarkBlue font-montserrat text-gray-400 text-lg"
                        placeholder="Your Message"
                      />
                    </div>
                  </div>

                  <div className=" mt-8 ">
                    <div className="px-6 py-4 rounded-lg text-lg text-white bg-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryBlue duration-200 hover:text-white  flex justify-center ">
                      Submit Message
                    </div>
                  </div>

                  {/* <div className="flex ml-16">
                    <div className="grid grid-cols-2 grid-rows-2">
                      


                      {areas.map((item, index) => {
                        return (
                          <div key={index} className="flex m-2 ">
                            <GatsbyImage
                              image={getImage(
                                data.allFile.nodes.find(
                                  node => node.name === item.icon
                                )
                              )}
                              alt={item.alt}
                              className="w-[96px] h-[96px]"
                            />
                            <div className="text-xl mt-5 font-semibold py-4 px-5">
                              {item.name}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <BackgroundImage {...allImages.coffee} className="realtive">
          <div className=" absolute h-full bg-[#313131]/60 top-0 w-full" />
          <div className="relative z-20 items-center text-center px-32 py-60 ">
            <div className="text-4xl font-bold text-white py-10">
              Join the dream team!
            </div>
            <div className="text-center mx-auto max-w-xl text-white">
              Embark on a Journey of Endless Opportunities, Growth, and Success
              - Join Our Dynamic and Innovative Team and Unleash Your Full
              Potential to Achieve Your Dreams and Beyond!
            </div>
            <div className="flex flex-wrap justify-center py-10">
              <div className=" px-6 py-4 rounded-lg text-lg text-white bg-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryBlue duration-200 hover:text-white  flex justify-center ">
                Check Openings
              </div>
            </div>
          </div>
        </BackgroundImage>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Us" />

export default ContactUs
