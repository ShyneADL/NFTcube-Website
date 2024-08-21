import React, { useRef } from "react";
import "./nftcube.css";
import Feature from "../../components/feature/Feature";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Nftcube = () => {
  const titleTextRef = useRef(null);
  const nftcubeRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: nftcubeRef.current,
        start: "top 600px",
        end: "bottom bottom",
      },
    });

    tl.fromTo(
      nftcubeRef.current,
      {
        scale: 0.1,
        opacity: 0.1,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "back",
        duration: 1,
      }
    );
    tl.fromTo(
      titleTextRef,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  }, []);

  return (
    <div
      ref={nftcubeRef}
      className="nft__nftcube relative z-50 section__margin"
      id="whnft"
    >
      <div className="nft__nftcube-feature">
        <Feature
          title="What is NFTcube"
          text="NFTcube is a digital platform that serves as a gateway to the world of NFTs (Non-Fungible Tokens) and the future of digital assets. It is designed to provide a comprehensive and immersive experience for individuals interested in exploring, collecting, and investing in unique digital creations."
        />
      </div>
      <div className="nft__nftcube-heading">
        <h1 ref={titleTextRef} className="gradient__text">
          Unleashing the Power of Digital Collectibles
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="nft__nftcube-container">
        <Feature
          title={"Curated NFT Discovery"}
          text={
            "Explore a diverse selection of curated digital assets, including unique artwork, collectibles, music, and more."
          }
        />
        <Feature
          title={" Seamless Artist-Collector Connection"}
          text={"Forge meaningful connections between artists and collectors. "}
        />
        <Feature
          title={"Secure and Transparent Ownership"}
          text={"Own and manage digital assets securely on the blockchain."}
        />
      </div>
    </div>
  );
};

export default Nftcube;
