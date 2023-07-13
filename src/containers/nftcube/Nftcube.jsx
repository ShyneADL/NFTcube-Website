import React from 'react'
import './nftcube.css'
import Feature from '../../components/feature/Feature';

const Nftcube = () => {
  return (
    <div className="nft__nftcube section__margin" id='whnft'>
      <div className="nft__nftcube-feature">
        <Feature/>
      </div>
      <div className="nft__nftcube-heading">
        <h1 className="gradient-text">Lorem ipsum dolor sit amet consectetur. </h1>
        <p>Explore The Library</p>
      </div>
    </div>
  )
}

export default Nftcube;