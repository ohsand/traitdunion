import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

const Menu = () => (
    <>
    <p className='hover-underline-animation'><a href="#home">Home</a></p>
    <p className='hover-underline-animation'><a href="#about">About Us</a></p>
    <p className='hover-underline-animation'><a href="#awards">Awards</a></p>
    <p className='hover-underline-animation'><a href="#menu">Menu</a></p>
    <p className='hover-underline-animation'><a href="#blog">Library</a></p>
    </>
  )  

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ltd__navbar'>
        <div className='ltd__navbar-links'>
            <div className='ltd__navbar-links_logo'>
            <img src={logo} alt="logo" />
            </div>
        <div className='ltd__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='ltd__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='black' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='black' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='ltd__navbar-menu_container scale-up-center'>
            <div className='ltd__navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar