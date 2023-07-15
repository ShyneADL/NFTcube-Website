import React from 'react';
import nftImage from '../../assets/nft-image.png';
import './possibility.css';

const Possibility = () => (
  <div className="nft__possibility section__padding" id="possibility">
    <div className="nft__possibility-image">
      <img src={nftImage} alt="nft" />
    </div>
    <div className="nft__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;