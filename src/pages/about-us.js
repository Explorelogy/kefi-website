import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

const AboutUs = () => {
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

  const allImages = {
    header: getImage(data.header),
    coffee: convertToBgImage(getImage(data.coffee)),
  }

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

  const cdata = [
    {
      name: "Open and Honest Relationships through Communication and Trust",
    },
    {
      name: "Let your Actions be your Words (Act with Integrity)",
    },
    {
      name: "Be an Open Book(Transparancy with Investors)",
    },
    {
      name: "Strive for Raving fans (Create passionate Guest & Customers for each brand)",
    },
    {
      name: "Embrace & Drive Change (Innovation)",
    },
    {
      name: "Everyone Matters (A culture of diversity, equity and inclusion)",
    },
    {
      name: "Be Passionate, Creative, Adventurous & Open minded",
    },
  ]

  return (
    <Layout>
      <section>
        <div className="relative h-full">
          <div className="bg-[#171A40]/60 absolute top-0 w-full h-full z-10" />
          <GatsbyImage
            image={allImages.header}
            className="h-[350px] w-full"
            alt="header"
          />
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-poppins e font-bold z-20 text-white">
            About Us
          </div>
        </div>
      </section>
      <section>
        <div className="px-32 py-24">
          <div className="flex justify-center items-center">
            <div className="flex gap-20 justify-center">
              {" "}
              <div className="w-1/3">
                <StaticImage src="../images/03 About us/artwork.png" />
              </div>
              <div className="flex ">
                <div>
                  <div className=" max-w-xl mb-10 mx-auto">
                    Kefi Hospitality Group is a hospitality investment and
                    operations/ management company that is driven to create
                    pioneering concepts and renowned brands that imbue
                    unforgettable experiences. We wish to help you create your
                    kefi experience and journey.
                    <br />
                    <br />
                    The areas in the Hospitality Industry we focus on are
                  </div>
                  <div className="flex ml-16">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-32 py-24  bg-primaryLightBlue">
          <div className="felx  ">
            <div className="flex justify-center items-center gap-20 font-semibold text-primaryDarkBlue">
              <div className="text-4xl font-bold">Our Values</div>
              <div>
                {cdata.map((item, index) => {
                  return (
                    <div key={index} className="flex py-5 items-center">
                      <div className="bg-primaryDarkBlue rounded-full w-3 h-3"></div>
                      <div className="px-5">{item.name}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-32 py-24 ">
          <div className="m-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primaryDarkBlue mb-8">
                Our partners
              </div>
              <div className="max-w-xl mt-14 mb-10 mx-auto">
                kefi hospitality group is proud to collaborate three of most
                innovative companies in the region to provide pioneering
                solutions that redefine what true hospitality is
              </div>
            </div>
          </div>
          <div className="px-32 py-24">
            <div className="flex justify-between gap-16 ">
              <div className="w-1/2">
                <StaticImage src="../images/03 About us/Brands/logo.png" />
              </div>

              <div className="pt-16">
                <StaticImage src="../images/03 About us/Brands/logo-1.png" />
              </div>

              <div className="w-1/2 pt-16">
                <StaticImage src="../images/03 About us/Brands/logo-2.png" />
              </div>

              <div className="w-1/2 pt-16">
                <StaticImage src="../images/03 About us/Brands/logo-3.png" />
              </div>

              <div className="w-1/2 pt-16">
                <StaticImage src="../images/03 About us/Brands/logo-4.png" />
              </div>

              <div className="w-1/2 pt-16">
                <StaticImage src="../images/03 About us/Brands/logo-5.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="flex justify-center bg-[#F6F6F6] py-20">
            <div className="w-1/3">
              <StaticImage src="../images/03 About us/invest image.png" />
            </div>
            <div className="flex-col my-5 mx-10">
              <div className="mb-8 text-4xl font-bold text-primaryDarkBlue ">
                Invest & Grow With Us
              </div>
              <div className="text-primaryDarkBlue mt-14 mb-10 max-w-xl">
                Invest in your hospitality dream with Kefi and watch it grow
                into a thriving reality. With our expertise in consultation,
                investment and operations management, we are committed to
                providing the necessary resources and support for your business
                to flourish. Join us in creating unforgettable experiences that
                exude fulfillment, joy, and happiness.
              </div>
              <div className="flex flex-wrap py-10">
                <div className="px-5 py-3 border-primaryDarkBlue border-2 rounded-lg text-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryDarkBlue duration-200 hover:text-white  flex justify-center ">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-32 py-24">
          <div className="felx text-center">
            <div className="text-4xl font-bold text-primaryDarkBlue  pb-10">
              Our global footprint
            </div>
            <div className="max-w-xl mx-auto mt-14 mb-10">
              Lorem ipsum dolor sit amet,{" "}
              <span className="text-primaryLightBlue">UAE region</span>{" "}
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Tristique magna sit amet purus gravida quis
              blandit.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="">
          <StaticImage src="../images/03 About us/UAE location-01 1.png" />
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

export const Head = () => <Seo title="About Us" />

export default AboutUs
