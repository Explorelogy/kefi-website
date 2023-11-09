import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

// import required modules
import { FreeMode, Pagination } from "swiper/modules"

export default function MainSlider1() {
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

      lifestyle: file(relativePath: { eq: "04 Investment/Asset 3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      lifestyle: file(relativePath: { eq: "04 Investment/Asset 3.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      Galleryitem: file(
        relativePath: { eq: "07 Lifestyle/In frame/Galleryitem.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      imagee: file(relativePath: { eq: "07 Lifestyle/In frame/imagee.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      Galleryitem2: file(
        relativePath: { eq: "07 Lifestyle/In frame/Galleryitem2.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }

      Galleryitem1: file(
        relativePath: { eq: "07 Lifestyle/In frame/Galleryitem1.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      Galleryitem3: file(
        relativePath: { eq: "07 Lifestyle/In frame/Galleryitem3.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
    }
  `)
  const allImages = {
    lifestyle: getImage(data.lifestyle),
    Gallery_item: getImage(data.Gallery_item),
    image_1: getImage(data.image_1),
    Galleryitem: convertToBgImage(getImage(data.Galleryitem)),
    imagee: convertToBgImage(getImage(data.imagee)),
    Galleryitem2: convertToBgImage(getImage(data.Galleryitem2)),
    Galleryitem1: convertToBgImage(getImage(data.Galleryitem1)),
    Galleryitem3: convertToBgImage(getImage(data.Galleryitem3)),

    // iconBackground: getImage(data.iconBackground),
  }
  return (
    <>
      <Swiper
        breakpoints={{
          375: {
            slidesPerView: 0.6,
          },
          425: {
            slidesPerView: 0.7,
          },
          1536: {
            slidesPerView: 1.3,
          },
          768: {
            slidesPerView: 0.8,
          },
          1024: {
            slidesPerView: 0.9,
          },
          1280: {
            slidesPerView: 0.9,
          },
          1440: {
            slidesPerView: 0.9,
          },
          1536: {
            slidesPerView: 1,
          },
        }}
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
        }}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        className="mySwiper   "
      >
        <SwiperSlide>
          <div className="grid grid-cols-7 grid-rows-2 gap-5">
            <BackgroundImage
              {...allImages.Galleryitem}
              className="col-span-2 row-span-2 bg-red-400"
            ></BackgroundImage>
            <BackgroundImage
              {...allImages.imagee}
              className="col-span-2 py-20 md:py-28 lg:py-36 xl:py-48 bg-green-400"
            >
              {" "}
            </BackgroundImage>
            <BackgroundImage
              {...allImages.Galleryitem2}
              className="col-span-3 row-span-0 bg-red-400"
            ></BackgroundImage>
            <BackgroundImage
              {...allImages.Galleryitem1}
              className="col-span-2 py-20 md:py-28 lg:py-36 xl:py-48 "
            >
              {" "}
            </BackgroundImage>
            <BackgroundImage
              {...allImages.Galleryitem3}
              className="col-span-3 row-span-0 bg-red-400"
            ></BackgroundImage>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="grid grid-cols-7 grid-rows-2 gap-5">
            <BackgroundImage
              {...allImages.Galleryitem}
              className="col-span-2 row-span-2 bg-red-400"
            ></BackgroundImage>
            <BackgroundImage
              {...allImages.imagee}
              className="col-span-2 py-20 md:py-24 lg:py-32 xl:py-40 bg-green-400"
            >
              {" "}
            </BackgroundImage>
            <BackgroundImage
              {...allImages.Galleryitem2}
              className="col-span-3 row-span-0 bg-red-400"
            ></BackgroundImage>
            <BackgroundImage
              {...allImages.Galleryitem1}
              className="col-span-2 py-20 md:py-28 lg:py-32 xl:py-40 "
            >
              {" "}
            </BackgroundImage>
            <BackgroundImage
              {...allImages.Galleryitem3}
              className="col-span-3 row-span-0 bg-red-400"
            ></BackgroundImage>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  )
}
