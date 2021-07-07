import React from 'react'
import tw from 'twin.macro'
import Marquee from './Maruqee'
import reactLogo from 'logos/react.svg'
import typescript from 'logos/typescript.svg'
import javascript from 'logos/javascript.svg'
import nodejs from 'logos/nodejs.svg'
import express from 'logos/express.svg'
import java from 'logos/java.svg'
import redux from 'logos/redux.svg'
import jquery from 'logos/jquery.svg'
import jest from 'logos/jest.svg'
import angular from 'logos/angular.svg'
import html from 'logos/html.svg'
import sass from 'logos/sass.svg'
import tailwindcss from 'logos/tailwindcss.svg'
import hibernate from 'logos/hibernate.svg'
import git from 'logos/git.svg'
import python from 'logos/python.svg'
import flask from 'logos/flask.svg'
import nestjs from 'logos/nestjs.svg'
import mongo from 'logos/mongo.svg'
import firebase from 'logos/firebase.svg'
import netlify from 'logos/netlify.svg'
import auth0 from 'logos/auth0.svg'
import graphql from 'logos/graphql.svg'
import mysql from 'logos/mysql.svg'
import heroku from 'logos/heroku.svg'
import sqlite from 'logos/sqlite.svg'
import socketio from 'logos/socketio.svg'
import webpack from 'logos/webpack.svg'
import oracle from 'logos/oracle.svg'
import bootstrap from 'logos/bootstrap.svg'
import android from 'logos/android.svg'

const Container = tw.div`relative flex flex-col items-center justify-center max-w-screen-lg mx-auto py-20 md:py-28`
const Heading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center w-full`
const Description = tw.p`my-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl w-full text-center`

const VerticalSpacer = tw.div`mt-10 w-full`

const PROFICIENT = [
  reactLogo,
  javascript,
  java,
  redux,
  jquery,
  jest,
  angular,
  nodejs,
  html,
  typescript,
  sass,
  tailwindcss,
  hibernate,
  git,
  express,
]

const EXPOSURE = [
  python,
  flask,
  mongo,
  firebase,
  netlify,
  auth0,
  graphql,
  mysql,
  heroku,
  sqlite,
  socketio,
  webpack,
  oracle,
  nestjs,
  bootstrap,
  android,
]

const Skills = () => {
  return (
    <Container id="skills">
      <Heading>
        Languages & <span tw="text-primary-500">Skills</span>
      </Heading>
      <VerticalSpacer />
      <Description>Languages and Frameworks I feel confident in</Description>
      <Marquee list={PROFICIENT} time={9} rightToLeft={false} />
      <VerticalSpacer />
      <Description>
        Technologies I have exposure and basic experience with
      </Description>
      <Marquee list={EXPOSURE} time={9} rightToLeft={true} />
    </Container>
  )
}

export default Skills
