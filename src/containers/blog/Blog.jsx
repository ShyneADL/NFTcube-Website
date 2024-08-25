import React, { useRef } from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "../../assets";
import "./blog.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * Functional component representing the Blog section.
 * Utilizes GSAP animations to create scroll-triggered effects for text and container elements.
 * Renders a blog section with multiple articles, each displaying an image, date, and text content.
 * @returns {JSX.Element} The Blog section component
 */
const Blog = () => {
  const blogRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: blogRef.current,
        start: "300 bottom",
        end: "bottom bottom",
        // scrub: 1,
      },
    });

    tl.fromTo(
      textRef.current,
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      }
    );

    tl.fromTo(
      containerRef.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  });
  return (
    <div ref={blogRef} className="nft__blog section__padding" id="blog">
      <div ref={textRef} className="nft__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div ref={containerRef} className="nft__blog-container">
        <div className="nft__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Jul 12, 2023"
            text="This week in Web3 and NFTs"
          />
        </div>
        <div className="nft__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Jul 10, 2023"
            text="A Roundup of Yuga Labs' latest developments: Gucci collaboration and expanded collections."
          />
          <Article
            imgUrl={blog03}
            date="Jul 09, 2023"
            text="NFT creators diversify into real-world assets to generate new revenues."
          />
          <Article
            imgUrl={blog04}
            date="Jul 07, 2023"
            text="NFTs/OpenSea: digital asset prices have further to fall"
          />
          <Article
            imgUrl={blog05}
            date="Jul 06, 2023"
            text="The promising future of NFTs remains in a state of flux"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
