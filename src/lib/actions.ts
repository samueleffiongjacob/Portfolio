//for one side email

// 'use server'

// import { contactFormSchema } from '@/lib/schema'
// import { z } from 'zod'
// import nodemailer from 'nodemailer'
// import dotenv from 'dotenv';

// // Load environment variables from .env file
// dotenv.config();

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     type: 'OAuth2',
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN
//   },
// })

// export async function contactFormAction(
//   _prevState: unknown,
//   formData: FormData
// ) {
//   const defaultValues = z
//     .record(z.string(), z.string())
//     .parse(Object.fromEntries(formData.entries()))

//   try {
//     const data = contactFormSchema.parse(Object.fromEntries(formData))

//     // Send email
//     try {
//       await transporter.sendMail({
//         from: process.env.GMAIL_USER,
//         to: process.env.GMAIL_USER, // Send to yourself
//         subject: `New Contact Form Submission from ${data.name}`,
//         text: `
//           Name: ${data.name}
//           Email: ${data.email}
//           Message: ${data.message}
//         `,
//         html: `
//           <h2>New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${data.name}</p>
//           <p><strong>Email:</strong> ${data.email}</p>
//           <p><strong>Message:</strong> ${data.message}</p>
//         `,
//       })

//       return {
//         defaultValues: {
//           name: '',
//           email: '',
//           message: '',
//         },
//         success: true,
//         errors: null,
//       }
//     } catch (error) {
//       console.error('Error sending email:', error)
//       return {
//         defaultValues,
//         success: false,
//         error: 'Failed to send email. Please try again later.',
//       }
//     }
//   } catch (error) {
//     console.error('Form validation error:', error)
    
//     if (error instanceof z.ZodError) {
//       return {
//         defaultValues,
//         success: false,
//         errors: Object.fromEntries(
//           Object.entries(error.flatten().fieldErrors).map(([key, value]) => [
//             key,
//             value?.join(', '),
//           ])
//         ),
//       }
//     }

//     return {
//       defaultValues,
//       success: false,
//       error: 'An unexpected error occurred. Please try again.',
//     }
//   }
// }

// WITHOUT TEMPLATE
// 'use server'

// import { contactFormSchema } from '@/lib/schema'
// import { z } from 'zod'
// import nodemailer from 'nodemailer'

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     type: 'OAuth2',
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN
//   },
// })

// // Verify the transporter configuration
// transporter.verify(function (error, success) {
//   if (error) {
//     console.log('Transporter verification error:', error);
//   } else {
//     console.log('Server is ready to take our messages');
//   }
// });

// export async function contactFormAction(
//   _prevState: unknown,
//   formData: FormData
// ) {
//   try {
//     const data = contactFormSchema.parse({
//       ...Object.fromEntries(formData.entries()),
//       pdfFile: formData.get('pdfFile'),
//     })

//     // Handle file upload
//     const pdfFile = formData.get('pdfFile') as File

//     const attachments = []

//     if (pdfFile && pdfFile.size > 0) {
//       attachments.push({
//         filename: pdfFile.name,
//         content: Buffer.from(await pdfFile.arrayBuffer()),
//       })
//     }


//     // Send email to yourself
//     try {
//       await transporter.sendMail({
//         from: process.env.GMAIL_USER,
//         to: process.env.GMAIL_USER,
//         subject: `New Contact Form Submission from ${data.name}`,
//         text: `
//           Name: ${data.name}
//           Email: ${data.email}
//           Phone: ${data.phone}
//           Message: ${data.message}
//         `,
//         html: `
//           <h2>New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${data.name}</p>
//           <p><strong>Email:</strong> ${data.email}</p>
//           <p><strong>Phone:</strong> ${data.phone}</p>
//           <p><strong>Message:</strong> ${data.message}</p>
//         `,
//         attachments: [
//           ...attachments
//         ],
//       })

//       // Send confirmation email to the client
//       await transporter.sendMail({
//         from: process.env.GMAIL_USER,
//         to: data.email,
//         subject: 'Thank you for contacting us',
//         text: `
//           Dear ${data.name},

//           Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.

//           Best regards,
//           Samuel Effiong
//         `,
//         html: `
//           <h2>Thank you for contacting us</h2>
//           <p>Dear ${data.name},</p>
//           <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
//           <p>Best regards,<br>Samuel Effiong</p>
//         `,
//         attachments: [
//           ...attachments
//         ],
//       })

//       return {
//         defaultValues: {
//           name: '',
//           email: '',
//           phone: '',
//           message: '',
//         },
//         success: true,
//         errors: null,
//         name: data.name,
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       if (error.code === 'EAUTH') {
//         return {
//           defaultValues: Object.fromEntries(formData.entries()),
//           success: false,
//           error: 'Email authentication failed. Please check the server configuration.',
//         };
//       }
//       if (error.code === 'ESTREAM') {
//         return {
//           defaultValues: Object.fromEntries(formData.entries()),
//           success: false,
//           error: 'Failed to load image. Please check the image file path.',
//         };
//       }
//       return {
//         defaultValues: Object.fromEntries(formData.entries()),
//         success: false,
//         error: 'Failed to send email. Please try again later.',
//       };
//     }
//   } catch (error) {
//     console.error('Form validation error:', error)
    
//     if (error instanceof z.ZodError) {
//       return {
//         defaultValues: Object.fromEntries(formData.entries()),
//         success: false,
//         errors: Object.fromEntries(
//           Object.entries(error.flatten().fieldErrors).map(([key, value]) => [
//             key,
//             value?.join(', '),
//           ])
//         ),
//       }
//     }

//     return {
//       defaultValues: Object.fromEntries(formData.entries()),
//       success: false,
//       error: 'An unexpected error occurred. Please try again.',
//     }
//   }
// }


// production error
// 'use server'

// import { contactFormSchema } from '@/lib/schema'
// import { z } from 'zod'
// import nodemailer from 'nodemailer'

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     type: 'OAuth2',
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN
//   },
// })

// // Verify the transporter configuration
// transporter.verify(function (error, success) {
//   if (error) {
//     console.log('Transporter verification error:', error);
//   } else {
//     console.log('Server is ready to take our messages');
//   }
// });

// export async function contactFormAction(
//   _prevState: unknown,
//   formData: FormData
// ) {
//   try {
//     const data = contactFormSchema.parse({
//       ...Object.fromEntries(formData.entries()),
//       pdfFile: formData.get('pdfFile'),
//     })

//     // Handle file upload
//     const pdfFile = formData.get('pdfFile') as File

//     const attachments = []

//     if (pdfFile && pdfFile.size > 0) {
//       attachments.push({
//         filename: pdfFile.name,
//         content: Buffer.from(await pdfFile.arrayBuffer()),
//       })
//     }

//     // Admin notification email template
//     const adminEmailTemplate = `
//       <div style="background-color: #f6f9fc; padding: 40px 0;">
//         <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//           <div style="background-color: #4CD964; padding: 30px; text-align: center;">
//             <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//               New Contact Form Submission
//             </h1>
//           </div>
//           <div style="padding: 40px 30px;">
//             <div style="margin-bottom: 30px; border-left: 4px solid #4CD964; padding-left: 15px;">
//               <h2 style="margin: 0 0 5px; color: #32325d; font-size: 16px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//                 Contact Details
//               </h2>
//               <p style="margin: 0; color: #525f7f; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//                 A new contact form submission has been received.
//               </p>
//             </div>
//             <table style="width: 100%; border-collapse: collapse;">
//               <tr>
//                 <td style="padding: 15px 0; border-bottom: 1px solid #e6ebf1;">
//                   <strong style="color: #32325d; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Name:</strong>
//                 </td>
//                 <td style="padding: 15px 0; border-bottom: 1px solid #e6ebf1; color: #525f7f; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//                   ${data.name}
//                 </td>
//               </tr>
//               <tr>
//                 <td style="padding: 15px 0; border-bottom: 1px solid #e6ebf1;">
//                   <strong style="color: #32325d; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Email:</strong>
//                 </td>
//                 <td style="padding: 15px 0; border-bottom: 1px solid #e6ebf1; color: #525f7f; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//                   ${data.email}
//                 </td>
//               </tr>
//               <tr>
//                 <td style="padding: 15px 0; border-bottom: 1px solid #e6ebf1;">
//                   <strong style="color: #32325d; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Phone:</strong>
//                 </td>
//                 <td style="padding: 15px 0; border-bottom: 1px solid #e6ebf1; color: #525f7f; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//                   ${data.phone}
//                 </td>
//               </tr>
//               <tr>
//                 <td style="padding: 15px 0;">
//                   <strong style="color: #32325d; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Message:</strong>
//                 </td>
//                 <td style="padding: 15px 0; color: #525f7f; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//                   ${data.message}
//                 </td>
//               </tr>
//             </table>
//           </div>
//           <div style="background-color: #f6f9fc; padding: 20px; text-align: center;">
//             <p style="margin: 0; color: #525f7f; font-size: 12px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//               This is an automated message from your contact form.
//             </p>
//           </div>
//         </div>
//       </div>
//     `

//     // Client confirmation email template
//     const clientEmailTemplate = `
//       <div style="background-color: #f6f9fc; padding: 40px 0;">
//         <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//           <div style="background-color: #4CD964; padding: 30px; text-align: center;">
//             <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//               Thank You for Contacting Us
//             </h1>
//           </div>
//           <div style="padding: 40px 30px;">
//             <div style="margin-bottom: 30px;">
//               <p style="margin: 0 0 20px; color: #525f7f; font-size: 16px; line-height: 1.5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//                 Dear ${data.name},
//               </p>
//               <p style="margin: 0 0 20px; color: #525f7f; font-size: 16px; line-height: 1.5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//                 Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.
//               </p>
//               <p style="margin: 0 0 20px; color: #525f7f; font-size: 16px; line-height: 1.5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//                 Here's a summary of your message:
//               </p>
//             </div>
//             <div style="background-color: #f8fafc; border-radius: 4px; padding: 20px; margin-bottom: 30px;">
//               <p style="margin: 0 0 10px; color: #525f7f; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//                 <strong style="color: #32325d;">Message:</strong><br>
//                 ${data.message} <br>
//                 ATTACH BELOW IS THE PDF U UPLOADED FOR US , WE JUST WANT TO BE SURE SENT THAT
//               </p>
//             </div>
//             <div style="text-align: center;">
//               <p style="margin: 0; color: #525f7f; font-size: 16px; line-height: 1.5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//                 Best regards,<br>
//                 Samuel Effiong
//               </p>
//             </div>
//           </div>
//           <div style="background-color: #f6f9fc; padding: 20px; text-align: center;">
//             <p style="margin: 0; color: #525f7f; font-size: 12px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
//               This is an automated response. Please do not reply to this email.
//             </p>
//           </div>
//         </div>
//       </div>
//     `

//     // Send email to yourself
//     try {
//       await transporter.sendMail({
//         from: process.env.GMAIL_USER,
//         to: process.env.GMAIL_USER,
//         subject: `New Contact Form Submission from ${data.name}`,
//         text: `
//           Name: ${data.name}
//           Email: ${data.email}
//           Phone: ${data.phone}
//           Message: ${data.message}
//         `,
//         html: adminEmailTemplate,
//         attachments: [
//           ...attachments
//         ],
//       })

//       // Send confirmation email to the client
//       await transporter.sendMail({
//         from: process.env.GMAIL_USER,
//         to: data.email,
//         subject: 'Thank you for contacting us',
//         text: `
//           Dear ${data.name},

//           Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.

//           Best regards,
//           Samuel Effiong
//         `,
//         html: clientEmailTemplate,
//         attachments: [
//           ...attachments
//         ],
//       })

//       return {
//         defaultValues: {
//           name: '',
//           email: '',
//           phone: '',
//           message: '',
//         },
//         success: true,
//         errors: null,
//         name: data.name,
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       if (error.code === 'EAUTH') {
//         return {
//           defaultValues: Object.fromEntries(formData.entries()),
//           success: false,
//           error: 'Email authentication failed. Please check the server configuration.',
//         };
//       }
//       return {
//         defaultValues: Object.fromEntries(formData.entries()),
//         success: false,
//         error: 'Failed to send email. Please try again later.',
//       };
//     }
//   } catch (error) {
//     console.error('Form validation error:', error)
    
//     if (error instanceof z.ZodError) {
//       return {
//         defaultValues: Object.fromEntries(formData.entries()),
//         success: false,
//         errors: Object.fromEntries(
//           Object.entries(error.flatten().fieldErrors).map(([key, value]) => [
//             key,
//             value?.join(', '),
//           ])
//         ),
//       }
//     }

//     return {
//       defaultValues: Object.fromEntries(formData.entries()),
//       success: false,
//       error: 'An unexpected error occurred. Please try again.',
//     }
//   }
// }



'use server'

import { contactFormSchema } from '@/lib/schema'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  },
})

// Verify the transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('Transporter verification error:', error)
  } else {
    console.log('Server is ready to take our messages')
  }
})

export async function contactFormAction(
  _prevState: unknown,
  formData: FormData
) {
  try {
    const data = contactFormSchema.parse({
      ...Object.fromEntries(formData.entries()),
      pdfFile: formData.get('pdfFile'),
    })

    // Handle file upload
    const pdfFile = formData.get('pdfFile') as File
    const attachments = []

    if (pdfFile && pdfFile.size > 0) {
      attachments.push({
        filename: pdfFile.name,
        content: Buffer.from(await pdfFile.arrayBuffer()),
      })
    }

    // Admin notification email template
    const adminEmailTemplate = `
      <div style="background-color: #f6f9fc; padding: 40px 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="background-color: #4CD964; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
              New Contact Form Submission
            </h1>
          </div>
          <div style="padding: 40px 30px;">
            <div style="margin-bottom: 30px; border-left: 4px solid #4CD964; padding-left: 15px;">
              <h2 style="margin: 0 0 5px; color: #32325d; font-size: 16px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                Contact Details
              </h2>
              <p style="margin: 0; color: #525f7f; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                A new contact form submission has been received.
              </p>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 15px 0; border-bottom: 1px solid #e6ebf1;">
                  <strong style="color: #32325d; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Name:</strong>
                </td>
                <td style="padding: 15px 0; border-bottom: 1px solid #e6ebf1; color: #525f7f; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                  ${data.name}
                </td>
              </tr>
              <tr>
                <td style="padding: 15px 0; border-bottom: 1px solid #e6ebf1;">
                  <strong style="color: #32325d; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Email:</strong>
                </td>
                <td style="padding: 15px 0; border-bottom: 1px solid #e6ebf1; color: #525f7f; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                  ${data.email}
                </td>
              </tr>
              <tr>
                <td style="padding: 15px 0; border-bottom: 1px solid #e6ebf1;">
                  <strong style="color: #32325d; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Phone:</strong>
                </td>
                <td style="padding: 15px 0; border-bottom: 1px solid #e6ebf1; color: #525f7f; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                  ${data.phone}
                </td>
              </tr>
              <tr>
                <td style="padding: 15px 0;">
                  <strong style="color: #32325d; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">Message:</strong>
                </td>
                <td style="padding: 15px 0; color: #525f7f; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                  ${data.message}
                </td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f6f9fc; padding: 20px; text-align: center;">
            <p style="margin: 0; color: #525f7f; font-size: 12px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
              This is an automated message from your contact form.
            </p>
          </div>
        </div>
      </div>
    `

    // Client confirmation email template
    const clientEmailTemplate = `
      <div style="background-color: #f6f9fc; padding: 40px 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="background-color: #4CD964; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
              Thank You for Contacting Us
            </h1>
          </div>
          <div style="padding: 40px 30px;">
            <div style="margin-bottom: 30px;">
              <p style="margin: 0 0 20px; color: #525f7f; font-size: 16px; line-height: 1.5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                Dear ${data.name},
              </p>
              <p style="margin: 0 0 20px; color: #525f7f; font-size: 16px; line-height: 1.5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.
              </p>
              <p style="margin: 0 0 20px; color: #525f7f; font-size: 16px; line-height: 1.5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                Here's a summary of your message:
              </p>
            </div>
            <div style="background-color: #f8fafc; border-radius: 4px; padding: 20px; margin-bottom: 30px;">
              <p style="margin: 0 0 10px; color: #525f7f; font-size: 14px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                <strong style="color: #32325d;">Message:</strong><br>
                ${data.message}
                ${attachments.length > 0 ? '<br>ATTACHED BELOW IS THE PDF YOU UPLOADED FOR US, WE JUST WANT TO BE SURE IT WAS SENT' : ''}
              </p>
            </div>
            <div style="text-align: center;">
              <p style="margin: 0; color: #525f7f; font-size: 16px; line-height: 1.5; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                Best regards,<br>
                Samuel Effiong
              </p>
            </div>
          </div>
          <div style="background-color: #f6f9fc; padding: 20px; text-align: center;">
            <p style="margin: 0; color: #525f7f; font-size: 12px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      </div>
    `

    // Send email to admin
    try {
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `New Contact Form Submission from ${data.name}`,
        text: `
          Name: ${data.name}
          Email: ${data.email}
          Phone: ${data.phone}
          Message: ${data.message}
        `,
        html: adminEmailTemplate,
        attachments,
      })

      // Send confirmation email to the client
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: data.email,
        subject: 'Thank you for contacting us',
        text: `
          Dear ${data.name},

          Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.

          Best regards,
          Samuel Effiong
        `,
        html: clientEmailTemplate,
        attachments,
      })

      return {
        defaultValues: {
          name: '',
          email: '',
          phone: '',
          message: '',
        },
        success: true, 
        errors: null,
        name: data.name,
      }
    } catch (error) {
      console.error('Error sending email:', error)
      if (error.code === 'EAUTH') {
        return {
          defaultValues: Object.fromEntries(formData.entries()),
          success: false,
          error: 'Email authentication failed. Please check the server configuration.',
        }
      }
      return {
        defaultValues: Object.fromEntries(formData.entries()),
        success: false,
        error: 'Failed to send email. Please try again later.',
      }
    }
  } catch (error) {
    console.error('Form validation error:', error)
    
    if (error instanceof z.ZodError) {
      return {
        defaultValues: Object.fromEntries(formData.entries()),
        success: false,
        errors: Object.fromEntries(
          Object.entries(error.flatten().fieldErrors).map(([key, value]) => [
            key,
            value?.join(', '),
          ])
        ),
      }
    }

    return {
      defaultValues: Object.fromEntries(formData.entries()),
      success: false,
      error: 'An unexpected error occurred. Please try again.',
    }
  }
}

