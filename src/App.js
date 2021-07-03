import './App.css'
import 'tailwindcss/dist/base.css'
import Hero from 'components/Hero'
import Header from 'components/Header'
import PageAnimation from 'components/PageAnimation'
import Footer from 'components/Footer'
import ContactMe from 'components/ContactMe'
import Work from 'components/Work'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import Education from 'components/Education'

const App = () => {
  return (
    <PageAnimation>
      <Header />
      <Hero />
      <Skills />
      <Work />
      <Projects />
      <Education />
      <ContactMe />
      <Footer />
    </PageAnimation>
  )
}

export default App
