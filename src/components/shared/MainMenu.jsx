import React from 'react'
import './styles/MainMenu.css'

const MainMenu = () => {
  return (
    <nav className='mainMenu'>
      <ul className='mainMenu__ul'>
        <li className='mainMenu__ul__li'><a className='mainMenu__ul__li--a' href="#invitacion">Invitación</a></li>
        <li className='mainMenu__ul__li'><a className='mainMenu__ul__li--a'>Ceremonia</a></li>
        <li className='mainMenu__ul__li'><a className='mainMenu__ul__li--a'>After Party</a></li>
      </ul>
    </nav>
  )
}

export default MainMenu