import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from '../Components/Home'

const Layout = () => {
  return (
    <>
      {/* <div id="loading" className="loading--theme">
        <div id="loading-center"><span className="loader" /></div>
      </div> */}
      <div id="page" class="page font--jakarta">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default Layout