import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-pattern flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <ContactForm />
      </div>
    </div>
  )
}

