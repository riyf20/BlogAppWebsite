"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Loader2Icon } from "lucide-react"

function Contact() {

  // Form schema structure
  const FormSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.email({
      message: "Please enter a valid email address."
    }),
    message: z.string().min(10, {
      message: "Message must be at least 10 characters long."
    })
  })

  // Form initial values 
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  // Used to disable button and render loading if user already submitted
  const [submitted, setSubmitted] = useState(false);

  // Form's submit function
  async function onSubmit(data: z.infer<typeof FormSchema>) {

    // Disables button and shows loader
    setSubmitted(true);

    // Grabs form data and api key
    const formData = {
      ...data,
      access_key: import.meta.env.VITE_CONTACT_FORM_ACCESS_KEY,
    }

    // Attempts sending the form to backend
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json())

      if (res.success) {
        toast.success("Message sent successfully!")
        // Clears input fields + resets button
        form.reset()
        setSubmitted(false)
      } else {
        // Alerts user of error + resets button
        toast.error("Something went wrong. Please try again.")
        setSubmitted(false)
      }
    } catch (err) {
      console.error(err)
      toast.error("Network error. Please try again later.")
      setSubmitted(false)
    }
  }
  

  return (
    <div id="contact" className='bg-gray-200 w-full pb-[100px]'>
        <p className='text-center text-3xl font-bold pt-[75px]'>Contact me</p>
        <p className='text-center text-lg'>
          Have any questions or would like to see a feature be added?
        </p>
        <p className='text-center text-lg'>
          I'd love to hear from you! Fill out the form below and I'll reach out to you as soon as possible!
        </p>
        
        <div className="flex justify-center items-center mt-[20px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-[60%] p-8 bg-white rounded-3xl shadow-2xl shadow-black/30">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Your name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Your email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Your message</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="cursor-pointer hover:scale-[1.2] ease-in transition-[0.6s]" disabled={submitted}>
                {
                  submitted ? 
                  <>
                    <Loader2Icon className="animate-spin" /> 
                    Please wait... 
                  </>
                    :
                    <>Submit</>
                  }
                
                </Button>
            </form>
          </Form>
        </div>
    </div>
  )
}

export default Contact