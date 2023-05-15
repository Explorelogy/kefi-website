import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import bgVideo from "../images/02 Home/videoplayback.mp4"

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <div className="relative h-screen">
          <div className="bg-black/50 absolute top-0 w-full h-full z-10" />

          <video
            className="object-cover absolute top-0 h-full w-full "
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={bgVideo} />
          </video>
          <div className="absolute inset-0 flex justify-center items-center z-20">
            <div>
              <div className="text-6xl font-bold text-white  text-center font-poppins tracking-wide">
                <div>Hospitality Strategies, </div>
                <div className="mt-4">Investments & Management</div>
              </div>
              <div className="mt-10 text-white text-center max-w-md mx-auto">
                Redefining hospitality through investing in and managing unique
                concepts to provide unforgettable experiences that will create
                lasting memories.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
