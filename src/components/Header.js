import React, { useState } from 'react'
import { motion } from 'framer-motion'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useAnimation, useCycle } from 'framer-motion'

import logo from '../images/logo.svg'
import { ReactComponent as MenuIcon } from 'feather-icons/dist/icons/menu.svg'
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg'

const Wraper = tw.header`
  flex justify-between items-center
  max-w-none mx-auto
`

const NavLinks = tw.div`inline-block`

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300 text-secondary-500
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`

const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0 rounded-full
`

const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black text-secondary-500 border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`

const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between lg:hidden`
const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`

const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white lg:hidden`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`)

const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center lg:flex
`

const Header = () => {
  const links = [
    <NavLinks key={1}>
      <NavLink href="/#">Skills</NavLink>
      <NavLink href="/#">Work</NavLink>
      <NavLink href="/#">Projects</NavLink>
      <NavLink href="/#">Education</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">Download Resume</PrimaryLink>
    </NavLinks>,
  ]

  const [showNavLinks, setShowNavLinks] = useState(false)
  const [x, cycleX] = useCycle('0%', '150%')
  const animation = useAnimation()

  const toggleNavbar = () => {
    setShowNavLinks(!showNavLinks)
    animation.start({ x: x, display: 'block' })
    cycleX()
  }

  const logoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
      Ahmed Aziz
    </LogoLink>
  )

  return (
    <Wraper>
      <DesktopNavLinks>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer>
        {logoLink}
        <MobileNavLinks
          initial={{ x: '150%', display: 'none' }}
          animate={animation}
        >
          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? 'open' : 'closed'}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </Wraper>
  )
}

export default Header
