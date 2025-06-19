import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import CustomCursor from './components/custom_cursor'
import React, { lazy, Suspense } from 'react'

const Hero = lazy(() => import('./components/hero'))

const App = () => {
  return (
    <>
      <Header />
      <CustomCursor />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path='/' element={<Hero/>}/>
        </Routes>
      </Suspense>
    </>
  )
}

export default App