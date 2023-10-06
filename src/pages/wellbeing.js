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
import  { useEffect, useRef } from 'react';

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
      header: file(
        relativePath: {
          eq: "08 Well-being/Wellbeing-Header.jpg"
        }
      ) {
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

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const totalSlides = masonry.length;
    let slideIndex = currentSlide;

    const interval = setInterval(() => {
      slideIndex = (slideIndex + 1) % totalSlides; // Move to the next slide
      const targetScrollLeft = (slideIndex / totalSlides) * sliderRef.current.scrollWidth;

      sliderRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });

      setCurrentSlide(slideIndex);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleDotClick = (index) => {
    const targetScrollLeft = (index / masonry.length) * sliderRef.current.scrollWidth;
    sliderRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });
    setCurrentSlide(index);
  };

  const handleSlideChange = (direction) => {
    let newSlideIndex = currentSlide + direction;
    const totalSlides = masonry.length;

    if (newSlideIndex < 0) {
      newSlideIndex = totalSlides - 1;
    } else if (newSlideIndex >= totalSlides) {
      newSlideIndex = 0;
    }

    const targetScrollLeft = (newSlideIndex / totalSlides) * sliderRef.current.scrollWidth;
    sliderRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth',
    });

    setCurrentSlide(newSlideIndex);
  };

  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDistance = touchEndX - touchStartX;
    const swipeThreshold = 50; // Adjust the threshold as needed

    if (touchDistance > swipeThreshold) {
      handleSlideChange(-1); // Swipe right
    } else if (touchDistance < -swipeThreshold) {
      handleSlideChange(1); // Swipe left
    }
  };

  const handleScrollLeft = () => {
    handleSlideChange(-1); // Scroll left
  };

  const handleScrollRight = () => {
    handleSlideChange(1); // Scroll right
  };

  const allImages = {
    header: convertToBgImage(getImage(data.header)),
    lifestyle: getImage(data.lifestyle),

    // iconBackground: getImage(data.iconBackground),
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
        <div className="bg-gray-200/30 py-24 md:px-32 px-10">
          <div className="flex md:flex-row flex-col justify-center gap-10  items-center text-primaryDarkBlue md:text-left text-center">
            <Fade left>
              <div className=" font-poppins text-4xl  font-bold max-w-xs leading-snug ">
                Learn about<br/> Well being
              </div>
            </Fade>
            <Fade right>
              <div className="max-w-xl">
                We understand the importance of wellbeing for a fulfilling life,
                which is why our team at Kefi is dedicated to creating healing
                experiences that refresh and rejuvenate the mind and soul. With
                personalized relaxation services, delicious cuisine, and
                tranquil environments, our goal is to help you escape the
                outside world and find inner peace. Discover more about our
                approach to wellbeing and how we can help you create your own
                oasis of serenity.
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section>
        <div
          className="overflow-hidden md:ml-24 ml-10 mt-16"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-14 relative gap-5 md:w-[2700px] w-[1800px]">
            <Zoom>
              {masonry.map((item, index) => (
                <div className={`bg-primaryDarkBlue ${item.span}`} key={index}>
                  <GatsbyImage
                    image={getImage(
                      data.allFile.nodes.find(
                        (node) => node.name === item.image
                      )
                    )}
                    alt={item.image}
                    className="w-full h-full bg-cover"
                  />
                </div>
              ))}
            </Zoom>
          </div>
        </div>
        <Zoom>
          <div className="pagination flex justify-center items-center mt-10 gap-2">
            {masonry.slice(0, 5).map((item, index) => (
              <span
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </Zoom>
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

export default WellbeingPage
