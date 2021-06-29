import './App.css'
import 'tailwindcss/dist/base.css'
import Header from './components/Header'
import tw from 'twin.macro'

const Page = tw.div`p-8`

const App = () => {
  return (
    <Page>
      <Header />
    </Page>
  )
}

export default App
