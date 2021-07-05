import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { ReactComponent as SvgDotPatternIcon } from 'images/dot-pattern.svg'
import { SectionHeading as HeadingTitle } from 'components/misc/Headings.js'

const Container = tw.div`relative`

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const HeadingInfoContainer = tw.div`flex flex-col items-center`
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`

const Content = tw.div`mt-16`

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : 'flex-row',
])
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-72 md:h-80 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8 bg-contain bg-no-repeat`,
])
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`
const Title = tw.h4`text-3xl font-bold text-gray-900`
const Description = tw.p`mt-2 text-sm leading-loose`
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 z-0 opacity-25 text-primary-500 fill-current w-24`
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 z-0 opacity-25 text-primary-500 fill-current w-24`
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 z-0 opacity-25 text-primary-500 fill-current w-24`
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 z-0 opacity-25 text-primary-500 fill-current w-24`

const Work = ({
  heading = (
    <>
      <span tw="text-primary-500">Work</span> Experience
    </>
  ),
  description = 'Past professional work expereince and contracts',
}) => {
  const cards = [
    {
      imageSrc: 'https://i.postimg.cc/zBCmcxM7/MNP.png',
      subtitle: 'Sep 2020 - Dec 2020',
      title: 'MNP LLP',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'https://www.mnp.ca/',
    },

    {
      imageSrc: 'https://i.postimg.cc/fRzrzwPx/Westboro.png',
      subtitle: 'Jun 2020 - Sep 2020',
      title: 'Westboro Photonics',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'https://wphotonics.com/',
    },

    {
      imageSrc: 'https://i.postimg.cc/NjmWMJGc/acia-blogue-1.jpg',
      subtitle: 'Feb 2020 - May 2020',
      title: 'Canadian Food Inspection Agency',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'https://inspection.canada.ca/eng/1297964599443/1297965645317',
    },
  ]
  return (
    <Container id="work">
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>Visit Website</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  )
}

export default Work
