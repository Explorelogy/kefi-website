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
          <div className="px-32 py-24">
            <div className="flex justify-center items-center">
              <div className="flex xl:flex-row flex-col items-center  gap-32 justify-center container">
                <div className="flex   items-center justify-center">
                  <div className="items-center justify-center">
                    <div className="w-1/5 ">
                      <StaticImage
                        src="../images/09 Contact/Kefi_Logo_icon.png"
                        className=" "
                      />
                    </div>

                    <div className=" font-extrabold font-poppins mb-8 mt-10   text-primaryDarkBlue  text-4xl leading-normal">
                      Connect With Us
                    </div>

                    <div>
                      <div className=" text-primaryDarkBlue max-w-xl text-lg">
                        We love hearing new ideas and receiving new challenges,
                        so get in touch with us today! If you want to build a
                        hospitality concept that will leave a lasting impression
                        and stand out from the rest, let's work together to
                        create something truly magical.
                      </div>

                      <div className=" flex flex-col xl:flex-row gap-4 mt-10">
                        <div className="flex  gap-4">
                          <div className="">
                            <StaticImage
                              src="../images/09 Contact/icon.png"
                              className="w-14 "
                            />
                          </div>

                          <div className="flex  flex-col justify-items-center ">
                            <div className="text-base font-poppins leading-6 font-bold align-top">
                              Call us
                            </div>
                            <div className=" font-montserrat font-normal text-lg align-top">
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
                              Emal us
                            </div>
                            <div className=" font-montserrat font-normal text-lg align-top">
                              info@kefi-hospitality.com
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-6 mt-8 ">
                        <div>
                          <StaticImage
                            src="../images/09 Contact/Groupp.png"
                            className="w-14 "
                          />
                        </div>

                        <div className="flex j flex-col justify-items-center">
                          <div className="text-base font-poppins leading-6 font-bold align-top">
                            Address
                          </div>
                          <div className=" font-montserrat font-normal text-lg align-top">
                            <div> Kefi Hospitality Group. </div>
                            <div>
                              {" "}
                              Plot number: 598-1096 Street Number 51,
                            </div>{" "}
                            <div>Dubai Investment Park Dubai, </div>
                            <div>UAE PO Box 191869.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex  flex-row items-center justify-center">
                  <div className="w-96 ">
                    <div className="  mx-auto font-poppins font-extrabold text-4xl text-primaryDarkBlue">
                      Drop A Message
                    </div>
                    <form action="" onSubmit={this.onSubmit}>
                      <div className="mt-8">
                        <div className="font-montserrat text-lg text-primaryDarkBlue">
                          Enter Your Name
                        </div>
                        <div className="font-montserrat text-gray-400 text-lg mt-3  ">
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
                        <div className="font-montserrat text-lg text-primaryDarkBlue">
                          Enter Email
                        </div>
                        <div className="  mt-3 ">
                          <input
                            type="text"
                            className="block p-2.5  w-full  border-solid border-2 border-primaryDarkBlue rounded-lg py-2 shadow-[0px_ 1px_10px_rgba(0,0,0,0.4)] font-montserrat text-gray-400 text-lg "
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
                        <div className="font-montserrat text-lg text-primaryDarkBlue">
                          Enter Your Message
                        </div>
                        <div className=" font-montserrat text-gray-400 text-lg mt-3 ">
                          <textarea
                            rows="4"
                            className="block p-2.5 w-full  rounded-lg border-solid border-2 border-primaryDarkBlue font-montserrat text-gray-400 text-lg"
                            placeholder="Your Message"
                            onChange={this.handleChange.bind(this, "message")}
                            value={this.state.fields["message"] || ""}
                            name="message"
                          />
                        </div>
                      </div>

                      <div className=" mt-6 ">
                        <div>
                          <button
                            className=" w-1/2 py-4 px-2 rounded-lg text-xl text-white bg-primaryDarkBlue font-semibold font-poppins cursor-pointer hover:bg-primaryBlue duration-200 hover:text-white "
                            type="submit"
                          >
                            Submit Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <AllImage />
        </section>
      </Layout>
    )
  }
}

export const Head = () => <Seo title="Contact Us" />
