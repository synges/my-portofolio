import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import { ReactComponent as ArrowUpIcon } from 'images/arrow-up-2-icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import tw from 'twin.macro'
import styled from 'styled-components'

const BackToTopArrow = tw(AnchorLink)`
    text-secondary-500 transform p-2 border-secondary-500 border-4 rounded-full hover:border-primary-500 hover:text-primary-500 duration-300 hover:scale-125 
`

const BackToTopButtonContainer = styled.div`
  ${tw`fixed lg:bottom-14 lg:right-10 h-full flex items-end z-50`}
`

const BackToTopButton = () => {
  const { y: pageYOffset } = useWindowScroll()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (pageYOffset > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [pageYOffset])

  const UpArrow = () => (
    <BackToTopButtonContainer>
      <BackToTopArrow href="#header">
        <ArrowUpIcon tw="w-10 animate-bounce" />
      </BackToTopArrow>
    </BackToTopButtonContainer>
  )
  if (!visible) return null
  return <UpArrow />
}

export default BackToTopButton
