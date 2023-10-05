'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Lead } from '@/api/types'
import { createLead } from '@/api/createLead'
import { CheckSquareIcon } from 'lucide-react'

export const ContactForm = () => {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit } = useForm({ defaultValues: { email: '', phoneNumber: '', message: '' } })
  const onSubmit: SubmitHandler<Lead> = async (data) => {
    await createLead(data)
    setSent(true)
  }
  return (
    sent ? (
      <div className="flex flex-col gap-8">
        <div className="flex gap-8 items-center">
          <CheckSquareIcon size={40} className="text-primary" />
          <p className="text-lg">We received your message. We will get back to you soon.</p>
        </div>
        <div>
          <Button>Go to Home Page</Button>
        </div>
      </div>
    ) : (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p>Email Address</p>
          <Input placeholder="Email" {...register('email', { required: 'Email is required' })} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Phone Number</p>
          <Input placeholder="Phone Number"  {...register('phoneNumber')} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Message</p>
          <Textarea placeholder="Message" className="rounded-[1rem] resize-none" {...register('message', { required: 'Message is required' })} />
        </div>
        <div>
          <Button size="lg" type="submit">Send Message</Button>
        </div>
      </form>
    )
  )
}
