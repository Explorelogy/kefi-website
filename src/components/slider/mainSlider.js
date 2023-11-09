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

export default function MainSlider() {
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
      Gallery_item: file(
        relativePath: { eq: "07 Lifestyle/In frame/Gallery item.png" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      image_1: file(relativePath: { eq: "07 Lifestyle/In frame/image_1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_2: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_2.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_5: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_5.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_3: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_3.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_6: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_6.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_11: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_11.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_12: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_12.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_13: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_13.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_14: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_14.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_15: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_15.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_16: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_16.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_17: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_17.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_18: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_18.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_1: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }

      well_beign_gallery_4: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_4.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_9: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_9.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, placeholder: BLURRED)
        }
      }
      well_beign_gallery_7: file(
        relativePath: { eq: "08 Well-being/well_beign_gallery_7.jpg" }
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
    well_beign_gallery_2: convertToBgImage(getImage(data.well_beign_gallery_2)),
    well_beign_gallery_5: getImage(data.well_beign_gallery_5),
    well_beign_gallery_3: getImage(data.well_beign_gallery_3),
    well_beign_gallery_6: getImage(data.well_beign_gallery_6),
    well_beign_gallery_11: getImage(data.well_beign_gallery_11),
    well_beign_gallery_12: getImage(data.well_beign_gallery_12),
    well_beign_gallery_13: getImage(data.well_beign_gallery_13),
    well_beign_gallery_14: getImage(data.well_beign_gallery_14),

    // iconBackground: getImage(data.iconBackground),
    well_beign_gallery_11: convertToBgImage(
      getImage(data.well_beign_gallery_11)
    ),
    well_beign_gallery_7: convertToBgImage(getImage(data.well_beign_gallery_7)),
    well_beign_gallery_9: convertToBgImage(getImage(data.well_beign_gallery_9)),
    well_beign_gallery_5: convertToBgImage(getImage(data.well_beign_gallery_5)),
    well_beign_gallery_3: convertToBgImage(getImage(data.well_beign_gallery_3)),

    well_beign_gallery_15: convertToBgImage(
      getImage(data.well_beign_gallery_15)
    ),
    well_beign_gallery_6: convertToBgImage(getImage(data.well_beign_gallery_6)),
    well_beign_gallery_17: convertToBgImage(
      getImage(data.well_beign_gallery_17)
    ),
    well_beign_gallery_16: convertToBgImage(
      getImage(data.well_beign_gallery_16)
    ),
    well_beign_gallery_18: convertToBgImage(
      getImage(data.well_beign_gallery_18)
    ),
    well_beign_gallery_1: convertToBgImage(getImage(data.well_beign_gallery_1)),
    well_beign_gallery_4: convertToBgImage(getImage(data.well_beign_gallery_4)),
  }
  return (
    <>
      <Swiper
        breakpoints={{
          375: {
            slidesPerView: 0.5,
          },
          425: {
            slidesPerView: 0.6,
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
            slidesPerView: 1.2,
          },
          1440: {
            slidesPerView: 1.1,
          },
          1536: {
            slidesPerView: 1.3,
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
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="grid grid-cols-7 grid-rows-2 gap-5">
            <BackgroundImage
              {...allImages.well_beign_gallery_17}
              className="col-span-2 row-span-2 bg-red-400"
            ></BackgroundImage>
            <BackgroundImage
              {...allImages.well_beign_gallery_16}
              className="col-span-2 py-20 md:py-28 lg:py-32 xl:py-40 bg-green-400"
            >
              {" "}
            </BackgroundImage>
            <BackgroundImage
              {...allImages.well_beign_gallery_18}
              className="col-span-3 row-span-0 bg-red-400"
            ></BackgroundImage>
            <BackgroundImage
              {...allImages.well_beign_gallery_1}
              className="col-span-2 py-20 md:py-28 lg:py-32 xl:py-40 "
            >
              {" "}
            </BackgroundImage>
            <BackgroundImage
              {...allImages.well_beign_gallery_4}
              className="col-span-3 row-span-0 bg-red-400"
            ></BackgroundImage>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-7 grid-rows-2 gap-5">
            <BackgroundImage
              {...allImages.well_beign_gallery_2}
              className="col-span-5 row-span-2 bg-red-400"
            ></BackgroundImage>
            <BackgroundImage
              {...allImages.well_beign_gallery_5}
              className="col-span-2 py-20 md:py-28 lg:py-32 xl:py-40 bg-green-400"
            >
              {" "}
            </BackgroundImage>

            <BackgroundImage
              {...allImages.well_beign_gallery_6}
              className="col-span-2 py-20 md:py-28 lg:py-32 xl:py-40 bg-green-400"
            >
              {" "}
            </BackgroundImage>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-7 grid-rows-2 gap-5">
            <BackgroundImage
              {...allImages.well_beign_gallery_3}
              className="col-span-3  bg-red-400"
            ></BackgroundImage>
            <BackgroundImage
              {...allImages.well_beign_gallery_11}
              className="col-span-2 row-span-2 bg-red-400"
            ></BackgroundImage>
            <BackgroundImage
              {...allImages.well_beign_gallery_9}
              className="col-span-2 py-20 md:py-28 lg:py-32 xl:py-40 bg-green-400"
            >
              {" "}
            </BackgroundImage>
            <BackgroundImage
              {...allImages.well_beign_gallery_15}
              className="col-span-3 row-span-0 bg-red-400"
            ></BackgroundImage>

            <BackgroundImage
              {...allImages.well_beign_gallery_7}
              className="col-span-2 py-20 md:py-28 lg:py-32 xl:py-40 bg-green-400"
            >
              {" "}
            </BackgroundImage>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
