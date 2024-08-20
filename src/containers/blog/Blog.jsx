import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from '../../assets'
import './blog.css';

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Blog = () => (
  <div className="nft__blog section__padding" id="blog">
    <div className="nft__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="nft__blog-container">
      <div className="nft__blog-container_groupA">
        <Article imgUrl={blog01} date="Jul 12, 2023" text="This week in Web3 and NFTs" />
      </div>
      <div className="nft__blog-container_groupB">
        <Article imgUrl={blog02} date="Jul 10, 2023" text="A Roundup of Yuga Labs' latest developments: Gucci collaboration and expanded collections." />
        <Article imgUrl={blog03} date="Jul 09, 2023" text="NFT creators diversify into real-world assets to generate new revenues." />
        <Article imgUrl={blog04} date="Jul 07, 2023" text="NFTs/OpenSea: digital asset prices have further to fall" />
        <Article imgUrl={blog05} date="Jul 06, 2023" text="The promising future of NFTs remains in a state of flux" />
      </div>
    </div>
  </div>
);

export default Blog;