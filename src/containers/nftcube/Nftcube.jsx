import React from 'react'
import './nftcube.css'
import Feature from '../../components/feature/Feature';

const Nftcube = () => {
  return (
    <div className="nft__nftcube section__margin" id='whnft'>
      <div className="nft__nftcube-feature">
        <Feature title='What is NFTcube' text={'NFT Hero is a digital platform that serves as a gateway to the world of NFTs (Non-Fungible Tokens) and the future of digital assets. It is designed to provide a comprehensive and immersive experience for individuals interested in exploring, collecting, and investing in unique digital creations.'}/>
      </div>
      <div className="nft__nftcube-heading">
        <h1 className="gradient-text">NFT Hero: Unleashing the Power of Digital Collectibles+</h1>
        <p>Explore The Library</p>
      </div>
      <div className="nft__nftcube-container">
        <Feature title={'Curated NFT Discovery'} text={'Explore a diverse selection of curated digital assets, including unique artwork, collectibles, music, and more. Uncover hidden gems and discover new talent within the vibrant NFT community.'}/>
        <Feature title={' Seamless Artist-Collector Connection'} text={'Forge meaningful connections between artists and collectors. Engage directly with talented creators, support their work, and build relationships within a collaborative ecosystem that celebrates digital art and creativity.'}/>
        <Feature title={'Secure and Transparent Ownership'} text={'Own and manage digital assets securely on the blockchain. Benefit from transparent ownership records and immutable proof of authenticity. Experience the thrill of being part of the ever-growing NFT market while knowing your investments are protected.'}/>

      </div>
    </div>
  )
}

export default Nftcube;