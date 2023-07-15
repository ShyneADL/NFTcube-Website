import React from 'react';
import Article from '../../components/article/Article';
import blog01 from '../../assets/blog01.jpg';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.jpg';
import './blog.css';

const Blog = () => (
  <div className="nft__blog section__padding" id="blog">
    <div className="nft__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="nft__blog-container">
      <div className="nft__blog-container_groupA">
        <Article imgUrl={blog01} date="Jun 12, 2023" text="This week in Web3 and NFTs" />
      </div>
      <div className="nft__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="A Roundup of Yuga Labs' latest developments: Gucci collaboration and expanded collections." />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="NFT creators diversify into real-world assets to generate new revenues." />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="NFTs/OpenSea: digital asset prices have further to fall" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="The promising future of NFTs remains in a state of flux" />
      </div>
    </div>
  </div>
);

export default Blog;