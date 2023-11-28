import React from 'react'
import Navbar from '../components/Navbar_Compoennts/Navbar'
import HomeSearchBar from '../components/HomeComponents/HomeSearchBar'
import "./styles/home.css"
const Home = () => {
  return (
    <>
    <div className='navbar-main-container'>
      <div className='navbar-container'>
          <Navbar />
          <HomeSearchBar />
      </div>
    </div>
    </>
  )
}

export default Home