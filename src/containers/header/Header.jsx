import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import nft from '../../assets/NFT Hero.jpg'

const Header = () => {
  return (
    <div className="nft__header section__padding" id="home">

      <div className="nft__header-content">
        <h1 className="gradient__text">Welcome to NFTcube: Your Gateway to the Future of Digital Assets!</h1>
        <p>Discover the World of NFTs: At NFTcube, we are passionate about the boundless possibilities that NFTs (Non-Fungible Tokens) bring to the world of art, collectibles, and digital ownership. Immerse yourself in a vibrant ecosystem where creativity knows no bounds, and every digital creation holds a unique story.</p>

        <div className="nft__header-content__input">
          <input type='email' placeholder='Your email address'></input>
            <button type='button'>Get Started</button>  
        </div>
        <div className='nft__header-content__people'>
          <img src={people} alt="people"/>
          <p>1,600 people requested access in the last 24 hours.</p>
        </div>
      </div>
      <div className="nft__header-image">
      <img src={nft} alt='coins'/>
    </div>

    </div>
  )
}

export default Header;