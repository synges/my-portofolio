import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import EmailIllustrationSrc from 'images/email-illustration.svg'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Container = tw.div`relative`
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-16 md:py-20`
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
])
const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
])
const TextContent = tw.div`lg:py-8 text-center md:text-left`

const Subheading = tw.h5`font-bold text-primary-500 text-center md:text-left`
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({ as: 'textarea' })`
  ${tw`h-24`}
`

const SubmitButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-900 hocus:text-gray-200  focus:outline-none transition duration-300 inline-block mt-8`

const ContactMe = ({
  subheading = 'Contact Me',
  heading = (
    <>
      Feel free to <span tw="text-primary-500">get in touch</span>
    </>
  ),
  description = 'I am always open to new oportunities and challenges, you can contact me using this form or by emailing me at: ahmedshawky23@gmail.com',
  submitButtonText = 'Send',
  textOnLeft = true,
}) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleSubjectChange = (event) => {
    setSubject(event.target.value)
  }
  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const validate = (...strings) => {
    for (const element of strings) {
      if (element.trim() === '') {
        toast.error('Missing or Empty fields in the contact form')
        return false
      }
    }
    return true
  }

  const hanndleSubmit = (e) => {
    e.preventDefault()
    if (validate(email, name, subject, message)) {
      emailjs
        .sendForm(
          'gmail',
          'template_qdbmktu',
          e.target,
          'user_3XxV613K5PXDydSwOg3pA'
        )
        .then(toast.success('Thanks for reaching out'))
      setMessage('')
      setEmail('')
      setSubject('')
      setName('')
    }
  }

  return (
    <Container id="contact">
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={hanndleSubmit}>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email Address"
              />
              <Input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Full Name"
              />
              <Input
                type="text"
                name="subject"
                value={subject}
                onChange={handleSubjectChange}
                placeholder="Subject"
              />
              <Textarea
                name="message"
                value={message}
                onChange={handleMessageChange}
                placeholder="Your Message Here"
              />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <ToastContainer />
    </Container>
  )
}

export default ContactMe
