import './App.css'
import 'tailwindcss/dist/base.css'
import Hero from 'components/Hero'
import Header from 'components/Header'
import PageAnimation from 'components/PageAnimation'
import Footer from 'components/Footer'
import ContactMe from 'components/ContactMe'
import Work from 'components/Work'

const cards = [
  {
    imageSrc:
      'https://images.unsplash.com/photo-1550699026-4114bbf4fb49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80',
    subtitle: 'Paid',
    title: 'Loachella, NYC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://timerse.com',
  },

  {
    imageSrc:
      'https://images.unsplash.com/photo-1543423924-b9f161af87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    subtitle: 'Free',
    title: 'Rock In Rio, Upstate',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://timerse.com',
  },

  {
    imageSrc:
      'https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80',
    subtitle: 'Exclusive',
    title: 'Lollapalooza, Manhattan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    url: 'https://timerse.com',
  },
]

const App = () => {
  return (
    <PageAnimation>
      <Header />
      <Hero />
      <Work cards={cards} />
      <ContactMe />
      <Footer />
    </PageAnimation>
  )
}

export default App
