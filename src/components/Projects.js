import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { ReactComponent as SvgDecoratorBlob1 } from 'images/svg-decorator-blob-1.svg'
import { ReactComponent as SvgDecoratorBlob2 } from 'images/svg-decorator-blob-3.svg'

const Container = tw.div`relative`
const HeadingTitle = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`
const Column = tw.div`mt-24 lg:w-1/3`

const HeadingInfoContainer = tw.div`flex flex-col items-center`
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`,
])

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`
const MetaContainer = tw.div`flex items-center`
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`
const Description = tw.p`mt-2 text-sm text-secondary-100`
const PrimaryButtonBase = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-900 hocus:text-gray-200  focus:outline-none transition duration-300`
const Link = styled(PrimaryButtonBase).attrs({ as: 'a' })`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`z-0 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`z-0 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`

const Projects = ({
  heading = (
    <>
      Personal <span tw="text-primary-500">Projects</span>
    </>
  ),
  description = 'Projects I enjoyed to create utilizing technologies I am interested in',
}) => {
  const projects = [
    {
      imageSrc: 'https://i.postimg.cc/6qFc0Nwq/blog.jpg',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      title: 'Bloglist Website with User Authentication',
      description:
        'Developing a simple blog list web application using Redux with React for global state management. Node.js with Express was used for building RESTful APIs to serve the application. Using MongoDB as the database of choice.',
      url: 'https://github.com/synges/BlogList',
    },
    {
      imageSrc: 'https://i.postimg.cc/xdtdqNN3/riveroak.png',
      technologies: ['React Native', 'React', 'FireStore'],
      title: 'Mobile Application for RiverOak Skating Trails',
      description:
        'Created a Mobile application for the Riveroak Skating trails located south of Ottawa. The mobile app lets customers check for ice condtions of winter trails, as well as find useful information events and other activities been held there. The app was developed using React native and Firestore, in addition to a React web app for the admin.',
      url: 'https://expo.io/@riveroakapp21/RiverOak',
    },
    {
      imageSrc: 'https://i.postimg.cc/PJzdQSzG/python.png',
      technologies: ['Python', 'Flask', 'MySQL'],
      title: 'Covid-19 Data Visualization Website',
      description:
        'Developed a simple web application in Flask that pulls covid-19 from a local MySQL database. Utilized Python libraries Pandas and Matplotlib to plot a graph for case numbers by province.',
      url: 'https://github.com/synges/Flask-Covid-19',
    },
  ]
  return (
    <Container id="projects">
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>{heading}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {projects.map((project, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={project.imageSrc} />
                <Details>
                  <MetaContainer>
                    {project.technologies.map((technology, i) => (
                      <Meta key={i}>
                        <div>{technology}</div>
                      </Meta>
                    ))}
                  </MetaContainer>
                  <Title>{project.title}</Title>
                  <Description>{project.description}</Description>
                  <Link href={project.url}>View Code</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  )
}

export default Projects
