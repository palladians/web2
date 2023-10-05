import { ContactForm } from "@/components/contact-form"

const ContactPage = () => {
  return (
    <section className="container max-w-[40rem] py-24 flex flex-col gap-8">
      <h1 className="text-3xl font-semibold">Contact us</h1>
      <ContactForm />
    </section>
  )
}

export default ContactPage
