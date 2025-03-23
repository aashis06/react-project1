import React from 'react'
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Review from './components/reviews'

  const  App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <Projects/>
      <Review/>

    </div>
  )
}

export default App
