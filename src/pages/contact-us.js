"use client"

import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AllImage from "../components/allImage"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import { db } from "../firebaseConfig"

export default class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: {},
      errors: {},
      activeError: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange(field, e) {
    let fields = this.state.fields
    let target = e.target
    let value = target.type === "checkbox" ? target.checked : target.value
    fields[field] = value

    this.setState({
      fields,
    })
  }

  handleValidation() {
    let fields = this.state.fields
    let errors = {}
    let formIsVaild = true

    //name
    if (!fields["firstName"] || fields["firstName"] === "") {
      formIsVaild = false
      errors["name"] = "Name cannot be empty !"
    }

    // Email Address
    if (!fields["email"] || fields["email"] === "") {
      formIsVaild = false
      errors["email"] = "Email cannot be empty !"
    } else {
      if (typeof fields["email"] !== "undefined") {
        let regEx = new RegExp(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        )
        if (!regEx.test(fields["email"])) {
          formIsVaild = false
          errors["email"] = "Please enter a valid email address"
        }
      }
    }

    this.setState({ errors: errors, activeError: true })
    return formIsVaild
  }

  async submitInquiry(data) {
    let newData = Object.assign({}, data)
    newData.createdAt = firebase.firestore.FieldValue.serverTimestamp()
    newData.isCompleted = false

    await db.collection("inquiries").add(newData)
  }

  async onSubmit(event) {
    event.preventDefault()
    console.log("start")
    let data = { ...this.state.fields }
    if (this.handleValidation()) {
      this.setState({
        loading: true,
      })

      try {
        await this.submitInquiry(data)
        console.log("submited")
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log("Form has errors")
    }
  }

  render() {
    return (
      <Layout>
        <section>
          <div className="xl:px-32 md:px-20 px-10 mb-8 h-full relative py-20 md:py-28">
            <div className="flex justify-center items-center">
              <div className="flex xl:flex-row flex-col items-center md:gap-24 gap-12 xl:gap-32 justify-center xl:container">
                <div className="flex   items-center justify-center">
                  <div className="">
                    <div className="">
                      <div className="w-24  flex xl:justify-start justify-center xl:mx-0 mx-auto  ">
                        <StaticImage
                          src="../images/09 Contact/Kefi_Logo_icon.png"
                          className=" "
                        />
                      </div>
                    </div>

                    <div className=" font-extrabold font-poppins mb-4 mt-10   text-primaryDarkBlue text-3xl sm:text-4xl xl:text-start text-center">
                      Connect With Us
                    </div>

                    <div>
                      <div className=" text-primaryDarkBlue xl:max-w-xl lg:max-w-2xl text-center xl:text-justify ">
                        We love hearing new ideas and receiving new challenges,
                        so get in touch with us today! If you want to build a
                        hospitality concept that will leave a lasting impression
                        and stand out from the rest, let's work together to
                        create something truly magical.
                      </div>

                      <div className=" flex  xl:justify-normal justify-center lg:ml-0 md:ml-1  flex-col md:flex-row gap-10 mt-10">
                        <div className="flex   gap-6">
                          <div className="">
                            <StaticImage
                              src="../images/09 Contact/icon.png"
                              className="w-14 "
                            />
                          </div>

                          <div className="flex  flex-col justify-items-center ">
                            <div className="sm:text-base font-poppins leading-6 font-bold align-top">
                              Call us
                            </div>
                            <div className=" font-montserrat font-normal  align-top">
                              +971 (0)4 852 5705
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-6 ">
                          <div>
                            <StaticImage
                              src="../images/09 Contact/Group.png"
                              className="w-14 "
                            />
                          </div>

                          <div className="flex j flex-col justify-items-center">
                            <div className="text-base font-poppins leading-6 font-bold align-top">
                              Email us
                            </div>
                            <div className=" font-montserrat font-normal   align-top">
                              info@kefi-hospitality.com
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex xl:ml-0 md:ml-8 lg:ml-16 gap-6 mt-8 ">
                        <div>
                          <StaticImage
                            src="../images/09 Contact/Groupp.png"
                            className="w-14 "
                          />
                        </div>

                        <div className="flex  flex-col justify-items-center">
                          <div className="text-base font-poppins leading-6 font-bold align-top">
                            Address
                          </div>
                          <div className=" font-montserrat font-normal   align-top">
                            <div> Kefi Hospitality Group. </div>
                            <div>
                              {" "}
                              Plot number: 598-1096 Street Number 51,
                            </div>{" "}
                            <div>Dubai Investment Park Dubai,UAE </div>
                            <div>PO Box 191869.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex  flex-row items-center justify-center">
                  <div className="md:w-96  ">
                    <div className="  mx-auto font-poppins font-extrabold xl:text-start text-center text-3xl sm:text-4xl text-primaryDarkBlue">
                      Drop A Message
                    </div>
                    <form action="" onSubmit={this.onSubmit}>
                      <div className="mt-10">
                        <div className="font-montserrat text-primaryDarkBlue">
                          Enter Your Name
                        </div>
                        <div className="font-montserrat text-gray-400  mt-3  ">
                          <input
                            type="text"
                            onChange={this.handleChange.bind(this, "firstName")}
                            value={this.state.fields["firstName"] || ""}
                            className="block p-2.5 w-full   border-solid border-2 border-primaryDarkBlue rounded-lg py-2 shadow-[0px_ 1px_10px_rgba(0,0,0,0.4)] "
                            placeholder="Your Name"
                            name="firstName"
                          />
                        </div>

                        {this.state.errors["name"] ? (
                          <div
                            className={
                              this.state.activeError
                                ? "input-error active"
                                : "input-error"
                            }
                          >
                            <span>{this.state.errors["name"]}</span>
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-6">
                        <div className="font-montserrat  text-primaryDarkBlue">
                          Enter Email
                        </div>
                        <div className="  mt-3 ">
                          <input
                            type="text"
                            className="block p-2.5  w-full  border-solid border-2 border-primaryDarkBlue rounded-lg py-2 shadow-[0px_ 1px_10px_rgba(0,0,0,0.4)] font-montserrat text-gray-400  "
                            placeholder="Your Email"
                            name="email"
                            onChange={this.handleChange.bind(this, "email")}
                            value={this.state.fields["email"]}
                          />
                        </div>

                        {this.state.errors["email"] ? (
                          <div
                            className={
                              this.state.activeError
                                ? "input-error active"
                                : "input-error"
                            }
                          >
                            <span>{this.state.errors["email"]}</span>
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-6">
                        <div className="font-montserrat  text-primaryDarkBlue">
                          Enter Your Message
                        </div>
                        <div className=" font-montserrat text-gray-400  mt-3 ">
                          <textarea
                            rows="4"
                            className="block p-2.5 w-full  rounded-lg border-solid border-2 border-primaryDarkBlue font-montserrat text-gray-400 "
                            placeholder="Your Message"
                            onChange={this.handleChange.bind(this, "message")}
                            value={this.state.fields["message"] || ""}
                            name="message"
                          />
                        </div>
                      </div>

                      <div className="   flex xl:justify-normal justify-center  ">
                        <button
                          className="   py-4  xl:w-1/2 md:w-3/5 mt-10  px-4 md:px-2 rounded-lg  text-white bg-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryBlue duration-200 hover:text-white "
                          type="submit"
                        >
                          Submit Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="mb-8">
          <AllImage />
        </section> */}
      </Layout>
    )
  }
}

export const Head = () => <Seo title="Contact Us" />
