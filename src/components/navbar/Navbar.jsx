import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/Logo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nft__navbar">
      <div className="nft__navbar-links">
        <div className="nft__navbar-links_logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className="nft__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whnft">What is NFTcube?</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#possibility">Docs</a></p>
          <p><a href="#blog">Blog</a></p>
        </div>
      </div>
      <div className="nft__navbar-sign">
        <p><Link to='sign'>Sign in</Link></p>
        <button type="button">Sign up</button>
      </div>
      <div className="nft__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="nft__navbar-menu_container scale-up-center">
          <div className="nft__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wnft">What is nft?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
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