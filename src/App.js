import React from 'react'
import './App.css'
// Importing the components

import CTA from './components/cta/CTA'
import Article from './components/article/Article'
import Brand from './components/brand/Brand'
import Navbar from './components/navbar/Navbar'
import Blog from './containers/blog/Blog'
import Features from './containers/features/Features'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
import Possibility from './containers/possibility/Possibility'
import Nftcube from './containers/nftcube/Nftcube'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Nftcube/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog />
      <Footer />

    </div>
  )
}

export default App;