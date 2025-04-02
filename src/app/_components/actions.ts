/* eslint-disable @typescript-eslint/no-unused-vars */
"use server"

import { z } from "zod"

// Define the form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

// Define the form state type
type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    message?: string[]
  }
  message?: string
  success?: boolean
}

export async function submitContactForm(prevState: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  })

  // If form validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please fix the errors in the form.",
      success: false,
    }
  }

  // Get the validated data
  const { name, email, phone, message } = validatedFields.data

  try {
    // Here you would typically send the data to your backend or API
    // For example:
    // await saveContactMessage({ name, email, phone, message })

    // Simulate a delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return success state
    return {
      message: "Your message has been sent successfully!",
      success: true,
    }
  } catch (error) {
    // Handle any errors
    return {
      message: "Failed to send your message. Please try again later.",
      success: false,
    }
  }
}

