import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ReactComponent as QuotesLeftIconBase } from 'images/quotes-l.svg'
import { ReactComponent as SvgDecoratorBlob1 } from 'images/dot-pattern.svg'
import { ReactComponent as LinkedInIcon } from 'images/linkedin-icon.svg'
import { ReactComponent as GitHubIcon } from 'images/github-icon.svg'
import { ReactComponent as EmailIcon } from 'images/email-newsletter-icon.svg'

const Container = tw.div`relative py-14 lg:py-20`
const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`
const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`
const Column = tw.div``
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`
const Heading = tw(
  SectionHeading
)`text-left text-primary-500 leading-snug xl:text-7xl`
const Description = tw(
  SectionDescription
)`mt-4 lg:text-lg text-secondary-500 max-w-lg`
const PrimaryButton = tw(
  AnchorLink
)`mt-8 inline-block w-56 tracking-wide  text-lg text-center py-5 rounded-full px-5 py-3 lg:py-5 lg:px-8 font-bold bg-primary-500 text-gray-100 hocus:bg-primary-900 hocus:text-gray-200  focus:outline-none transition duration-300`
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`
const ImageContainer = tw.div`relative z-30 transform xl:-translate-x-24 xl:-translate-y-16`
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20 `
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`
const Testimonial = tw.div`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-primary-500 text-gray-100 font-medium transform md:-translate-x-32 text-base leading-relaxed md:-mr-16 xl:mr-0`
const QuotesLeftIcon = tw(
  QuotesLeftIconBase
)`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-500 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`
const Quote = tw.blockquote``

const SocialLinksContainer = tw.div`mt-8`
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-primary-500 hover:text-primary-900 transition duration-300 mx-4 transform  hover:scale-125`}
  svg {
    ${tw`w-10 h-10`}
  }
`
const Hero = ({
  heading = 'Full Stack Web Developer',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  imageSrc = 'https://i.postimg.cc/WzbjNG0s/Ahmed-Picture.jpg',
  primaryButtonUrl = '#contact',
  primaryButtonText = 'Contact Me',
  testimonial = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
}) => {
  return (
    <Container>
      <Row>
        <TextColumn>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
          <PrimaryButton href={primaryButtonUrl}>
            {primaryButtonText}
          </PrimaryButton>
          <SocialLinksContainer>
            <SocialLink href="https://www.linkedin.com/in/ahmedaziz23/">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="https://github.com/synges">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href="mailto:ahmedshawky23@gmail.com">
              <EmailIcon />
            </SocialLink>
          </SocialLinksContainer>
        </TextColumn>
        <ImageColumn>
          <ImageContainer>
            <Image src={imageSrc} />
            <ImageDecoratorBlob />
            <Testimonial>
              <QuotesLeftIcon />
              <Quote>{testimonial}</Quote>
            </Testimonial>
          </ImageContainer>
          <Offsetbackground />
        </ImageColumn>
      </Row>
    </Container>
  )
}

export default Hero
