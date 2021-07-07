import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import tw from 'twin.macro'
import { ReactComponent as ArrowLeftIcon } from 'images/arrow-left-2-icon.svg'
import { ReactComponent as ArrowRightIcon } from 'images/arrow-right-2-icon.svg'
import { ReactComponent as SvgDecoratorBlob1 } from 'images/svg-decorator-blob-4.svg'
import { ReactComponent as SvgDecoratorBlob2 } from 'images/svg-decorator-blob-5.svg'

import 'slick-carousel/slick/slick.css'

const Container = tw.div`relative`
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`
const HeadingInfoContainer = tw.div`flex flex-col items-center`
const HeadingTitle = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`

const CollegeSliderContainer = tw.div`mt-24`
const CollgeSlider = styled(Slider)``
const College = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`
const ImageContainer = styled.div`
  ${tw`md:mx-3 lg:mx-6 w-2/3 md:w-6/12 rounded flex items-center max-w-md md:max-w-none`}
  img {
    ${tw`rounded`}
  }
`
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-4/12 py-4 flex flex-col justify-between`
const DescriptionContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`
const Description = tw.blockquote`text-center md:text-left font-medium text-xl lg:text-2xl xl:text-3xl`
const CollegeInfo = tw.div`px-5 lg:px-10 text-center md:text-left mt-4 md:mt-0`
const CollegeName = tw.h5`font-bold text-lg lg:text-xl xl:text-2xl text-primary-500`
const CustomerTitle = tw.p`font-medium text-sm`

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
)
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
)

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 z-0 text-primary-500 opacity-30 transform -translate-x-full`
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 z-0 text-pink-500 opacity-20 transform translate-x-2/3 translate-y-8`

const Education = ({
  heading = (
    <>
      <span tw="text-primary-500">Education</span> History
    </>
  ),
}) => {
  /*
   * You can modify the testimonials shown by modifying the array below
   * You can add or remove objects from the array as you need.
   */
  const courses = [
    {
      imageSrc: 'https://i.postimg.cc/tTwPW4RZ/Algonquin.jpg',
      description: `A 2 year Ontario college diploma in Computer Programming from Algonquin College.
      Graduated with honours and co-op distinguishment with a cumulative GPA of 3.96/4`,
      collegeName: 'Algonquin College',
      courseDate: 'May 2021',
    },
    {
      imageSrc: 'https://i.postimg.cc/T1nybjHF/AAST.jpg',
      description: `Mechanical Engineering bachelor degree from AAST, Alexandria, Egypt. Graduated with honours with a cumulative GPA of 3.74/4`,
      collegeName: 'Arab Academy for Sceience and Technology',
      courseDate: 'July 2012',
    },
    {
      imageSrc: 'https://i.postimg.cc/sXh1F9yx/Full-Stack.png',
      description:
        'A Full stack modern web development course offered by the university of Helsinki in colaboration with Houston Inc.',
      collegeName: 'University of Helsinki',
      courseDate: 'July 2021',
    },
  ]
  return (
    <Container id="education">
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>{heading}</HeadingTitle>
        </HeadingInfoContainer>
        <CollegeSliderContainer>
          <CollgeSlider nextArrow={<NextArrow />} prevArrow={<PreviousArrow />}>
            {courses.map((course, index) => (
              <College key={index}>
                <ImageContainer>
                  <img src={course.imageSrc} alt={course.collegeName} />
                </ImageContainer>
                <TextContainer>
                  <DescriptionContainer>
                    <Description>{course.description}</Description>
                  </DescriptionContainer>
                  <CollegeInfo>
                    <CollegeName>{course.collegeName}</CollegeName>
                    <CustomerTitle>{course.courseDate}</CustomerTitle>
                  </CollegeInfo>
                </TextContainer>
              </College>
            ))}
          </CollgeSlider>
        </CollegeSliderContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  )
}

export default Education
