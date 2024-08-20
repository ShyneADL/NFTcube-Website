import React, { useRef, useEffect } from 'react'
import './nftcube.css'
import Feature from '../../components/feature/Feature';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Nftcube = () => {
  const textRef = useRef(null);
  const nftcubeRef = useRef(null);

  
  useGSAP(() =>
  {
    // gsap.to(
    //   '.nft__nftcube-feature', 
    //   {
    //     scrollTrigger: '.nft__nftcube-feature', 
    //     x: 100,
    //     scale: 1.5,
    //   }
    // )
  },[])

  
  return (
    <div ref={nftcubeRef} className="nft__nftcube section__margin" id='whnft'>
      <div className="nft__nftcube-feature">
        <Feature title='What is NFTcube' text='NFTcube is a digital platform that serves as a gateway to the world of NFTs (Non-Fungible Tokens) and the future of digital assets. It is designed to provide a comprehensive and immersive experience for individuals interested in exploring, collecting, and investing in unique digital creations.'/>
      </div>
      <div className="nft__nftcube-heading">
        <h1 ref={textRef} className="gradient__text">Unleashing the Power of Digital Collectibles</h1>
        <p>Explore The Library</p>
      </div>
      <div className="nft__nftcube-container">
        <Feature title={'Curated NFT Discovery'} text={'Explore a diverse selection of curated digital assets, including unique artwork, collectibles, music, and more.'}/>
        <Feature title={' Seamless Artist-Collector Connection'} text={'Forge meaningful connections between artists and collectors. '}/>
        <Feature title={'Secure and Transparent Ownership'} text={'Own and manage digital assets securely on the blockchain.'}/>
      </div>
    </div>
  )
}

export default Nftcube;