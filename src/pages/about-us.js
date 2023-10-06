import * as React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import Fade from "react-reveal/Fade"
import Idea from "../components/idea"
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

      header: file(relativePath: { eq: "03 About us/aboutusheader.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      bgflex: file(
        relativePath: { eq: "03 About us/Kefi-Banner-for-web-05.png" }
      ) {
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
    header: convertToBgImage(getImage(data.header)),
    bgflex: convertToBgImage(getImage(data.bgflex)),
    coffee: convertToBgImage(getImage(data.coffee)),
  }

  const areas = [
    {
      name: "Distribution",
      icon: "icond",
      link: "",
    },
    {
      name: "Food & Beverage",
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
          <BackgroundImage {...allImages.header} className="bg-right-top py-8">
            <div className="bg-[#171A40]/60 absolute top-0 w-full h-full z-10" />
            <div className="py-24 lg:px-32 px-10 gap-10  z-20 relative   flex md:flex-row flex-col justify-center items-center h-full">
              <Fade right>
                <div className="flex justify-center font-poppins text-5xl text-white font-bold">
                  Our story
                </div>
              </Fade>
            </div>

            <div className="flex lg:flex-row  z-20 relative flex-col justify-center  lg:px-32 items-center px-10 py-24  gap-10">
              <div className="lg:w-1/2 w-full font-poppins text-white  ">
                <div className="flex flex-col  justify-center p-5 ">
                  <div className="text-xl font-bold">“WANT TO JOIN US?”</div>
                  <div className="mt-4">
                    Four words spoken to you, an unsuspecting patron dining
                    alone at a restaurant on an inconspicuous Friday, would be
                    the spark of something special. The courage to join a group
                    of people you did not know a few moments earlier pays off
                    and leads to an experience for the ages. As the night rolls
                    on and you’re with your new friends dancing the night away,
                    screaming the lyrics to a nostalgic song with your hands in
                    the air, and surrounded by others who are just as lost in
                    the moment as you, an epiphany comes
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full font-poppins text-white">
                <div className="flex flex-col justify-center p-5 ">
                  <div className="font-semibold ">
                    WHAT IF WE COULD CREATE EXPERIENCES LIKE THESE FOR EVERYONE?
                  </div>
                  <div className="mt-4">
                    This was the seed that grew into a company whose purpose was
                    to create unique concepts that brought people together and
                    gave them an experience they would never forget. We at Kefi
                    Hospitality Group aim to evoke that same feeling of euphoria
                    and unbridled joy by designing hospitality experiences that
                    let you forget reality for a while, and just enjoy yourself.
                    So, unwind, dine and celebrate life with us. We’ll make sure
                    you have an experience you won’t forget.
                  </div>
                  <div className=" font-bold text-xl lg:mt-2">
                    Kefi. . . THE WAY OF LIFE!
                  </div>
                </div>
              </div>
            </div>
          </BackgroundImage>
        </div>
      </section>

      {/* our story section */}
      {/* <section>
        <div>
          <BackgroundImage {...allImages.bgflex} className="">
            
          </BackgroundImage>
        </div>
      </section> */}

      {/* end our stroy section */}

      <section>
        <div className="lg:px-32 px-10 py-24">
          <div className="flex justify-center items-center">
            <div className="flex lg:flex-row flex-col lg:justify-start w-full gap-20 justify-center">
              {" "}
              <div className="lg:w-1/3 w-1/2 mx-auto">
                <StaticImage
                  src="../images/03 About us/artwork.png"
                  className="w-full"
                />
              </div>
              <div className="flex justify-center  ">
                <div>
                  <div className=" max-w-xl lg:text-left text-center mb-10">
                    Kefi Hospitality Group is a hospitality investment and
                    operations management company that is driven to create
                    pioneering concepts and renowned brands that imbue
                    unforgettable experiences. We wish to help you create your
                    Kefi experience and journey.
                    <br />
                    <br />
                    The areas in the Hospitality Industry we focus on are
                  </div>

                  <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-2 gap-4">
                    {areas.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex lg:flex-row flex-col lg:justify-start justify-center w-full items-center gap-4  "
                        >
                          <GatsbyImage
                            image={getImage(
                              data.allFile.nodes.find(
                                node => node.name === item.icon
                              )
                            )}
                            alt={item.alt}
                            className="w-1/4 lg:mx-0 mx-auto"
                          />
                          <div className="text-xl  font-semibold ">
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
      </section>
      <section>
        <div className="md:px-32 px-10 py-24  bg-primaryLightBlue">
          <div className="felx  ">
            <div className="flex lg:flex-row flex-col justify-center items-center gap-20 font-semibold text-primaryDarkBlue">
              <div className="text-4xl font-bold">Our Values</div>
              <div>
                {cdata.map((item, index) => {
                  return (
                    <div key={index} className="flex mb-6 items-center">
                      <div className=" flex justify-center ">
                        <StaticImage
                          className="sm:w-6 w-4"
                          src="../images/03 About us/Kefi-ICon.png"
                        />
                      </div>
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
        <div className="md:px-32 px-10 py-24 ">
          <div className="m-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primaryDarkBlue mb-8">
                Our partners
              </div>
              <div className="max-w-xl mt-14 mb-10 mx-auto">
                Kefi Hospitality Group is proud to collaborate with the most
                innovative companies in the region. Together, we provide
                pioneering solutions that redefine the true essence of
                hospitality.
              </div>
            </div>
          </div>
          <div className="md:px-32 px-10 ">
            <div className="flex lg:flex-row flex-col justify-between gap-16 items-center ">
              <div className="w-1/2">
                <StaticImage src="../images/03 About us/Brands/logo.png" />
              </div>

              <div className="">
                <StaticImage src="../images/03 About us/Brands/logo-5.png" />
              </div>

              <div className="w-1/2 ">
                <StaticImage src="../images/03 About us/Brands/logo-4.png" />
              </div>
              <div className="w-1/2 ">
                <StaticImage src="../images/03 About us/Brands/logo-1.png" />
              </div>

              <div className="w-1/2 ">
                <StaticImage src="../images/03 About us/Brands/logo-3.png" />
              </div>

              <div className="w-1/2 ">
                <StaticImage src="../images/03 About us/Brands/logo-2.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="flex lg:flex-row flex-col justify-center bg-[#F6F6F6] lg:px-32 px-10 py-24 items-center gap-10">
            <div className="lg:w-1/2 w-full">
              <StaticImage
                src="../images/03 About us/invest image.png"
                width={600}
              />
            </div>
            <div className="flex-col lg:w-1/2 w-full ">
              <div className="mb-8 text-4xl font-bold text-primaryDarkBlue ">
                Invest & Grow With Us
              </div>
              <div className="text-primaryDarkBlue  mb-10 max-w-xl">
                Invest in your hospitality dream with Kefi and watch it grow
                into a thriving reality. With our expertise in consultation,
                investment and operations management, we are committed to
                providing the necessary resources and support for your business
                to flourish. Join us in creating unforgettable experiences that
                exude fulfillment, joy, and happiness.
              </div>
              <div className="flex flex-wrap ">
                <div className="px-5 py-3 border-primaryDarkBlue border-2 rounded-lg text-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryDarkBlue duration-200 hover:text-white  flex justify-center ">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="md:px-32 px-10 pt-24 pb-10">
          <div className="felx text-center">
            <div className="text-4xl font-bold text-primaryDarkBlue  pb-10">
              Our global footprint
            </div>
            <div className="max-w-xl mx-auto ">
              Lorem ipsum dolor sit amet,{" "}
              <span className="text-primaryLightBlue">UAE region</span>{" "}
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Tristique magna sit amet purus gravida quis
              blandit.
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
        <div className=" mb-24">
          <StaticImage src="../images/03 About us/UAE location-01 1.png" />
        </div>
      </section> */}
      {/* 
      <div className="lg:px-80  px-10 pt-24 pb-24">
        <Idea />
      </div> */}
      <section className="mb-10">
        <BackgroundImage {...allImages.coffee} className="realtive">
          <div className=" absolute h-full bg-[#313131]/60 top-0 w-full" />
          <div className="relative z-20 items-center text-center md:px-32 px-10 py-60 ">
            <div className="text-4xl font-bold text-white py-10">
              Join the dream team!
            </div>
            <div className="text-center mx-auto max-w-xl text-white">
              Embark on a Journey of Endless Opportunities, Growth, and Success
              - Join Our Dynamic and Innovative Team and Unleash Your Full
              Potential to Achieve Your Dreams and Beyond!
            </div>
            <div className="flex flex-wrap justify-center py-10">
              <Link to="/contact-us">
                <div className=" px-6 py-4 rounded-lg text-lg text-white bg-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryBlue duration-200 hover:text-white  flex justify-center ">
                  Connect with us
                </div>
              </Link>
            </div>
          </div>
        </BackgroundImage>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />

export default AboutUs
