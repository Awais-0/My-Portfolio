import React from 'react'
import Header from '../components/Header/header'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <>
        <Header />
            {children}
        <Footer />
    </>
  )
}

export default Layout