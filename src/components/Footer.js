import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import logo from 'images/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { ReactComponent as LinkedInIcon } from 'images/linkedin-icon.svg'
import { ReactComponent as GitHubIcon } from 'images/github-icon.svg'
import { ReactComponent as EmailIcon } from 'images/email-newsletter-icon.svg'

const Container = tw.div`relative bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`
const LogoImg = tw.img`w-8`
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw(
  AnchorLink
)`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`

const SocialLinksContainer = tw.div`mt-10`
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`

const Footer = () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>Ahmed Aziz</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="#skills">Skills</Link>
            <Link href="#work">Work</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#education">Education</Link>
          </LinksContainer>
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
          <CopyrightText>&copy; 2021 by Ahmed Aziz</CopyrightText>
        </Row>
      </Content>
    </Container>
  )
}

export default Footer
