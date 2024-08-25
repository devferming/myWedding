import React from 'react'
import './styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <img className='header__bg' src="/header.webp" alt="novios_img" />
      <div className='header__tittle'>
        <h1 className='header__tittle__h1'>Fermín & Zenith</h1>
        <p className='header__tittle__p'>Te invitan a su Boda</p>
      </div>
    </header>
  )
}
export default Header 