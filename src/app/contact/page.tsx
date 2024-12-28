// without seo
// import { ContactForm } from '@/components/contact-form'

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-pattern flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="w-full max-w-md">
//         <ContactForm />
//       </div>
//     </div>
//   )
// }


import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with Samuel Effiong for collaboration, job opportunities, or any inquiries about software engineering,DevOps, Statistics, Data Science and Analyst.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-pattern flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <ContactForm />
      </div>
    </div>
  )
}

