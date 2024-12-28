// 'use client'

// import * as React from 'react'
// import { useState, useRef } from 'react'
// import {
//   Card,
//   CardTitle,
//   CardHeader,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Button } from '@/components/ui/button'
// import { Textarea } from '@/components/ui/textarea'
// import { cn } from '@/lib/utils'

// import { contactFormAction } from '@/lib/actions'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { 
//   faLinkedin, 
//   faTwitter, 
//   faFacebook, 
//   faInstagram, 
//   faGithub, 
//   faWhatsapp, 
//   faTelegram 
// } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { Notification } from './notification'

// export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
//   const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
//   const formRef = useRef<HTMLFormElement>(null)

//   const [state, formAction] = React.useActionState(
//     async (prevState, formData) => {
//       setNotification(null) // Reset notification
//       const result = await contactFormAction(prevState, formData)
//       if (result.success) {
//         setNotification({ message: 'Your message has been sent. Thank you.', type: 'success' })
//         formRef.current?.reset() // Reset the form
//       } else if (result.error) {
//         setNotification({ message: result.error, type: 'error' })
//       }
//       return result
//     },
//     {
//       defaultValues: {
//         name: '',
//         email: '',
//         message: '',
//       },
//       success: false,
//       errors: null,
//     }
//   )

//   return (
//     <>
//       {notification && (
//         <Notification
//           message={notification.message}
//           type={notification.type}
//           onClose={() => setNotification(null)}
//         />
//       )}
//       <Card className={cn('w-full max-w-md', className)}>
//         <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg p-6">
//           <CardTitle className="text-2xl font-bold">How can we help?</CardTitle>
//           <CardDescription className="text-blue-100">
//             Need help with your project? We&apos;re here to assist you.
//           </CardDescription>
//         </CardHeader>
//         <form ref={formRef} action={formAction}>
//           <CardContent className="flex flex-col gap-6 bg-white shadow-lg p-6">
//             <div className="text-center mb-6">
//               <h3 className="text-xl font-semibold text-muted-foreground">Feel free to follow me or message me</h3>
//             </div>
            
//             {/* Social Media Links */}
//             <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner">
//               <div className="flex flex-wrap justify-center gap-6">
//                 <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
//                   <FontAwesomeIcon icon={faLinkedin} className="h-10 w-10" />
//                 </a>
//                 <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
//                   <FontAwesomeIcon icon={faTwitter} className="h-10 w-10" />
//                 </a>
//                 <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
//                   <FontAwesomeIcon icon={faFacebook} className="h-10 w-10" />
//                 </a>
//                 <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
//                   <FontAwesomeIcon icon={faInstagram} className="h-10 w-10" />
//                 </a>
//                 <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition-colors">
//                   <FontAwesomeIcon icon={faGithub} className="h-10 w-10" />
//                 </a>
//                 <a href="mailto:your.email@example.com" className="text-gray-800 hover:text-gray-600 transition-colors">
//                   <FontAwesomeIcon icon={faEnvelope} className="h-10 w-10" />
//                 </a>
//                 <a href="https://wa.me/yourwhatsappphonenumber" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition-colors">
//                   <FontAwesomeIcon icon={faWhatsapp} className="h-10 w-10" />
//                 </a>
//                 <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
//                   <FontAwesomeIcon icon={faTelegram} className="h-10 w-10" />
//                 </a>
//               </div>
//             </div>

//             <div
//               className="group/field grid gap-2"
//               data-invalid={!!state.errors?.name}
//             >
//               <Label
//                 htmlFor="name"
//                 className="group-data-[invalid=true]/field:text-destructive"
//               >
//                 Name <span aria-hidden="true">*</span>
//               </Label>
//               <Input
//                 id="name"
//                 name="name"
//                 placeholder="Samuel Effiong"
//                 className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
//                 aria-invalid={!!state.errors?.name}
//                 aria-errormessage="error-name"
//               />
//               {state.errors?.name && (
//                 <p id="error-name" className="text-destructive text-sm">
//                   {state.errors.name}
//                 </p>
//               )}
//             </div>
//             <div
//               className="group/field grid gap-2"
//               data-invalid={!!state.errors?.email}
//             >
//               <Label
//                 htmlFor="email"
//                 className="group-data-[invalid=true]/field:text-destructive"
//               >
//                 Email <span aria-hidden="true">*</span>
//               </Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="samueleffiongjacob@gmail.com"
//                 className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
//                 aria-invalid={!!state.errors?.email}
//                 aria-errormessage="error-email"
//               />
//               {state.errors?.email && (
//                 <p id="error-email" className="text-destructive text-sm">
//                   {state.errors.email}
//                 </p>
//               )}
//             </div>
//             <div
//               className="group/field grid gap-2"
//               data-invalid={!!state.errors?.message}
//             >
//               <Label
//                 htmlFor="message"
//                 className="group-data-[invalid=true]/field:text-destructive"
//               >
//                 Message <span aria-hidden="true">*</span>
//               </Label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 placeholder="Type your message here..."
//                 className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
//                 aria-invalid={!!state.errors?.message}
//                 aria-errormessage="error-message"
//               />
//               {state.errors?.message && (
//                 <p id="error-message" className="text-destructive text-sm">
//                   {state.errors.message}
//                 </p>
//               )}
//             </div>
//           </CardContent>
//           <CardFooter className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-b-lg p-6">
//             <Button 
//               type="submit" 
//               size="lg" 
//               className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300"
//             >
//               Send Message
//             </Button>
//           </CardFooter>
//         </form>
//       </Card>
//     </>
//   )
// }

'use client'

import * as React from 'react'
import { useState, useRef } from 'react'
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

import { contactFormAction } from '@/lib/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faLinkedin, 
  faTwitter, 
  faFacebook, 
  faInstagram, 
  faGithub, 
  faWhatsapp, 
  faTelegram 
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Notification } from './notification'

export function ContactForm({ className }: React.ComponentProps<typeof Card>) {
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction] = React.useActionState(
    async (prevState, formData) => {
      setNotification(null) // Reset notification
      const result = await contactFormAction(prevState, formData)
      if (result.success) {
        setNotification({ message: `${result.name}, I'll get back to you. Thank you!`, type: 'success' })
        formRef.current?.reset() // Reset the form
      } else if (result.error) {
        setNotification({ message: result.error, type: 'error' })
      }
      return result
    },
    {
      defaultValues: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      success: false,
      errors: null,
    }
  )

  return (
    <>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
      <Card className={cn('w-full max-w-md', className)}>
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg p-6">
          <CardTitle className="text-2xl font-bold">How can we help?</CardTitle>
          <CardDescription className="text-blue-100">
            Need help with your project? We&apos;re here to assist you.
          </CardDescription>
        </CardHeader>
        <form ref={formRef} action={formAction}>
          <CardContent className="flex flex-col gap-6 bg-white shadow-lg p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-muted-foreground">Feel free to follow me or message me</h3>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-inner">
              <div className="flex flex-wrap justify-center gap-2">
                <a href="https://www.linkedin.com/in/samueleffiongjacob/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <FontAwesomeIcon icon={faLinkedin} className="h-10 w-8" />
                </a>
                <a href="https://x.com/samueleffiong_" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
                  <FontAwesomeIcon icon={faTwitter} className="h-10 w-8" />
                </a>
                <a href="https://www.facebook.com/samueleffiongjacob/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors">
                  <FontAwesomeIcon icon={faFacebook} className="h-10 w-8" />
                </a>
                <a href="https://www.instagram.com/samueleffiong0" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
                  <FontAwesomeIcon icon={faInstagram} className="h-10 w-8" />
                </a>
                <a href="https://github.com/samueleffiongjacob" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition-colors">
                  <FontAwesomeIcon icon={faGithub} className="h-10 w-8" />
                </a>
                <a href="mailto:samueleffiongjacob@gmail.com" className="text-gray-800 hover:text-gray-600 transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} className="h-10 w-8" />
                </a>
                <a href="https://wa.link/506m3b" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition-colors">
                  <FontAwesomeIcon icon={faWhatsapp} className="h-10 w-8" />
                </a>
                <a href="https://t.me/Samueleffiong_official" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
                  <FontAwesomeIcon icon={faTelegram} className="h-10 w-8" />
                </a>
              </div>
            </div>

            <div
              className="group/field grid gap-2"
              data-invalid={!!state.errors?.name}
            >
              <Label
                htmlFor="name"
                className="group-data-[invalid=true]/field:text-destructive"
              >
                Name <span aria-hidden="true">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Samuel Effiong"
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                aria-invalid={!!state.errors?.name}
                aria-errormessage="error-name"
              />
              {state.errors?.name && (
                <p id="error-name" className="text-destructive text-sm">
                  {state.errors.name}
                </p>
              )}
            </div>
            <div
              className="group/field grid gap-2"
              data-invalid={!!state.errors?.email}
            >
              <Label
                htmlFor="email"
                className="group-data-[invalid=true]/field:text-destructive"
              >
                Email <span aria-hidden="true">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="samueleffiongjacob@gmail.com"
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                aria-invalid={!!state.errors?.email}
                aria-errormessage="error-email"
              />
              {state.errors?.email && (
                <p id="error-email" className="text-destructive text-sm">
                  {state.errors.email}
                </p>
              )}
            </div>
            <div
              className="group/field grid gap-2"
              data-invalid={!!state.errors?.phone}
            >
              <Label
                htmlFor="phone"
                className="group-data-[invalid=true]/field:text-destructive"
              >
                Phone <span aria-hidden="true">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+234 8166907845"
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                aria-invalid={!!state.errors?.phone}
                aria-errormessage="error-phone"
              />
              {state.errors?.phone && (
                <p id="error-phone" className="text-destructive text-sm">
                  {state.errors.phone}
                </p>
              )}
            </div>
            <div
              className="group/field grid gap-2"
              data-invalid={!!state.errors?.message}
            >
              <Label
                htmlFor="message"
                className="group-data-[invalid=true]/field:text-destructive"
              >
                Message <span aria-hidden="true">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
                aria-invalid={!!state.errors?.message}
                aria-errormessage="error-message"
              />
              {state.errors?.message && (
                <p id="error-message" className="text-destructive text-sm">
                  {state.errors.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="pdfFile">Attach any valid PDF File (optional) for project</Label>
              <Input
                id="pdfFile"
                name="pdfFile"
                type="file"
                accept=".pdf"
              />
            </div>
          </CardContent>
          <CardFooter className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-b-lg p-6">
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              Send Message
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  )
}

