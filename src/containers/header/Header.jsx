import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import nft from '../../assets/NFT Hero.png'

const Header = () => {
  return (
    <div className="nft__header section__padding" id="home">

      <div className="nft__header-content">
        <h1 style={{color:"red"}}>Enter into the world of WEB3.0</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores doloremque rerum minus porro maiores iusto facilis, hic nobis fuga tempore excepturi aut possimus odit. Ipsum dolore neque dicta minima ullam?</p>

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