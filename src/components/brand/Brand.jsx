import React from 'react';
import './brand.css';
import {
  coinbase, metamask, opensea, dlabs, flow, rarible
} from './import'

const Brand = () => {
  return (
    <div className="nft__brand section__padding">
      <div>
        <img src={opensea} alt='opensea'/>
      </div>
      <div>
        <img src={coinbase} alt='coinbase'/>
      </div>
      <div>
        <img src={metamask} alt='metamask'/>
      </div>
      <div>
        <img src= {dlabs} alt='dapper labs'/>
      </div>
      <div>
        <img src={flow} alt='flow'/>
      </div>
      <div>
        <img src={rarible} alt='rarible'/>
      </div>
    </div>
  )
}

export default Brand;