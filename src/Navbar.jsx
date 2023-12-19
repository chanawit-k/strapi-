import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import NavLinks from './NavLinks'
import { useGlobalContext } from './context'
const Navbar = () => {
  const { setPageId, openSidebar } = useGlobalContext()
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null)
    }
  }
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  )
}

export default Navbar
