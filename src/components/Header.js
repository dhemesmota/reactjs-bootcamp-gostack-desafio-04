import React from 'react'

import './Header.css'
import Facebook from '../assets/facebook.png'
import Avatar from '../assets/avatar.jpg'

function Header() {
  return (
    <div id="header">
      <img src={Facebook} alt="Facebook"/>
      <div id="profile">
        <strong>Meu perfil</strong>
        <img src={Avatar} alt="avatar"/>
      </div>
    </div>
  )
}

export default Header;