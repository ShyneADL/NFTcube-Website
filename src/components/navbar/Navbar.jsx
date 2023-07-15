import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/Logo.svg'

const Menu = () => (
  <>
   <p><a href='#home'>Home</a></p>
   <p><a href='#whnft'>What is NFT Cube?</a></p>
   <p><a href='#features'>OpenSea</a></p>
   <p><a href='#possibility'>Case Studies</a></p>
   <p><a href='#nftcube'>Library</a></p>
  </>
)


const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);
  return (
    <div className="nft__navbar">
      <div className="nft__navbar-links">
        <div className="nft__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        <div className="nft__navbar-links_container">
          <Menu/>

        </div>
      </div>
      <div className="nft__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="nft__navbar-menu">
        { toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
        { toggleMenu && (
        <div className="nft__navbar-menu_container scale-up-center">
          <div className="nft__navbar-menu_container-links">
            <Menu/>
          </div>
          <div className="nft__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;