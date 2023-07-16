import React from 'react';
import nftImage from '../../assets/nft-image.png';
import './possibility.css';

const Possibility = () => (
  <div className="nft__possibility section__padding" id="possibility">
    <div className="nft__possibility-image">
      <img src={nftImage} alt="nft" />
    </div>
    <div className="nft__possibility-content">
      <h1 className="gradient__text">Unlock the Full Potential of your <br /> collectibles  beyond your imagination</h1>
      <p>At NFTcube, we guarantee to enhance your NFT experience, providing you with a comprehensive and feature-rich platform to explore, collect, and engage with the exciting world of NFTs.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;