import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Container as ContainerBase } from 'components/misc/Layouts.js'
import logo from 'images/logo.svg'
import { ReactComponent as LinkedInIcon } from 'images/linkedin-icon.svg'
import { ReactComponent as GitHubIcon } from 'images/github-icon.svg'
import { ReactComponent as EmailIcon } from 'images/email-newsletter-icon.svg'

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`
const LogoImg = tw.img`w-8`
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`

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
            <Link href="#">Home</Link>
            <Link href="#">Skills</Link>
            <Link href="#">Work</Link>
            <Link href="#">Projects</Link>
            <Link href="#">Education</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <EmailIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2021, Ahmed Aziz All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  )
}

export default Footer
