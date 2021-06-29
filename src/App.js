import './App.css'
import 'tailwindcss/dist/base.css'
import Hero from './components/Hero'
import tw from 'twin.macro'

const Page = tw.div`p-8`

const App = () => {
  return (
    <Page>
      <Hero />
    </Page>
  )
}

export default App
