import React from 'react';
import nftLogo from '../../assets/Logo.svg';
import './footer.css';

const Footer = () => (
  <div className="nft__footer section__padding">
    <div className="nft__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
    </div>

    <div className="nft__footer-btn">
      <button>Request Early Access</button>
    </div>

    <div className="nft__footer-links">
      <div className="nft__footer-links_logo">
        <img src={nftLogo} alt="nft_logo" />
        <p>Hetleviktoppen 56, Loddefjord, <br /> All Rights Reserved</p>
      </div>
      <div className="nft__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="nft__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="nft__footer-links_div">
        <h4>Get in touch</h4>
        <p>Hetleviktoppen 56, Loddefjord</p>
        <p>+47-472-33-132</p>
        <p>info@nftcube.com</p>
      </div>
    </div>

    <div className="nft__footer-copyright">
      <p>@2023 NFTcube. All rights reserved. Built by ADL.</p>
    </div>
  </div>
);

export default Footer;