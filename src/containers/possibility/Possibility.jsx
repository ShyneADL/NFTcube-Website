import React from 'react';
import { skull, monkey, hand, ball, nftImage } from '../../assets'
import './possibility.css';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Possibility = () => (
  <div className="nft__possibility section__padding relative" id="possibility">
    <div className="nft__possibility-image absolute left-[-200px] top-0">
      <img src={nftImage} alt="nft" />
    </div>
    <div className='w-[500px]'>
    </div>
    <div className="nft__possibility-content">
      <h1 className="gradient__text">Unlock the Full Potential of your <br /> collectibles  beyond your imagination</h1>
      <p>At NFTcube, we guarantee to enhance your NFT experience, providing you with a comprehensive and feature-rich platform to explore, collect, and engage with the exciting world of NFTs.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;