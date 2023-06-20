const functions = require("firebase-functions")

const admin = require("firebase-admin")
admin.initializeApp()

const nodemailer = require("nodemailer")
const db = admin.firestore()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


//smtp

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      user: 'chathurangaa9c@gmail.com',
      pass: 'chathu@1988'
  }
});


// Inquiry
exports.onInquiryCreate = functions.firestore
  .document("inquiries/{inquiryId}")
  .onCreate(async (snap, context) => {
    const inquiryData = snap.data()

    await db.collection("inquiries")
      .add({
        firstName: inquiryData.firstName,
        email: inquiryData.email,
        message: inquiryData.message,
      })

    const mailOptions = {
      from: `amal@explorelogy.lk`,
      to: snap.data().email,
      subject: 'contact form message',
      html: `
        <ul>
          <li> Name : ${inquiryData.firstName}</li>
          <li>Email : ${inquiryData.email ? inquiryData.email : "-"}</li>
          <li>message : ${inquiryData.message ? inquiryData.message : "-"}</li>
        </ul>
      `
    };
    
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
          console.log(error)
          return
      }
      console.log("Sent!")
  });

    // connectTransport
    //   .sendMail(mailOptions)
    //   .then(async () => {
    //     await snap.ref.update({
    //       emailError: false,
    //       emailSentAt: admin.firestore.FieldValue.serverTimestamp(),
    //     })
    //     functions.logger.log(
    //       `Email Sent for Inquiry: ${context.params.inquiryId}`
    //     )
    //   })
    //   .catch(async err => {
    //     await snap.ref.update({
    //       emailError: true,
    //       emailErrorOccurredAt: admin.firestore.FieldValue.serverTimestamp(),
    //       emailErrorMessage: err.message,
    //     })
    //     functions.logger.log(err)
    //   })

    // return true
  })
