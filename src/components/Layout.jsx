import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import './Layout.css'

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout