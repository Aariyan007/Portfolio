
import Header from './components/header'
import Hero from './components/hero'
import CustomCursor from './components/custom_cursor'
import{BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <CustomCursor/>
    </>
  )
}

export default App