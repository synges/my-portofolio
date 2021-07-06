import React from 'react'
import tw from 'twin.macro'
import Marquee from './Maruqee'

const Container = tw.div`relative flex flex-col items-center justify-center max-w-screen-lg mx-auto py-16 md:py-20`
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center w-full`
const Description = tw.p`my-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl w-full text-center`

const VerticalSpacer = tw.div`mt-10 w-full`

const DATA_LIST = [
  'react',
  'javascript',
  'typescript',
  'nodejs',
  'express',
  'java',
  'redux',
  'jquery',
  'jest',
  'angular',
  'html',
  'sass',
  'tailwindcss',
  'hibernate',
  'git',
]

const DATA_LIST2 = [
  'python',
  'flask',
  'nestjs',
  'mongo',
  'firebase',
  'netlify',
  'auth0',
  'graphql',
  'mysql',
  'heroku',
  'sqlite',
  'socketio',
  'webpack',
  'oracle',
  'bootstrap',
  'android',
]

const Skills = ({ proficient = [], exposure = [] }) => {
  return (
    <Container id="skills">
      <Heading>
        Languages & <span tw="text-primary-500">Skills</span>
      </Heading>
      <VerticalSpacer />
      <Description>
        These are some of the languages and technologies I used
      </Description>
      <Marquee list={DATA_LIST} time={9} rightToLeft={false} />
      <VerticalSpacer />
      <Description>
        These are some of the languages and technologies I used
      </Description>
      <Marquee list={DATA_LIST2} time={9} rightToLeft={true} />
    </Container>
  )
}

export default Skills
