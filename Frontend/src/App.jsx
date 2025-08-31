import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import CustomCursor from './components/custom_cursor'
import React, { lazy, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import Loader from './Loader'

const Hero = lazy(() => import('./components/hero'))
const Experience = lazy(()=> import('./components/experience'))
const Project = lazy(()=> import('./components/projects'))
const About = lazy(()=> import('./components/about'))

axios.defaults.baseURL = 'https://portfolio-8ler.onrender.com'
axios.defaults.withCredentials = true

const App = () => {
  return (
    <>
      <Header />
      <CustomCursor />
      <Toaster position='bottom-right' toastOptions={{duration : 2000}}/>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/projects' element= {<Project/>}/>
          <Route path='/about' element={<About/>} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App