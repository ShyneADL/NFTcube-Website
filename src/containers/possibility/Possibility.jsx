import React, { useRef } from "react";
import { skull, monkey, hand, ball, nftImage } from "../../assets";
import "./possibility.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
/**
 * Possibility is a component that renders a section of the app that is
 * dedicated to showcasing the possibilities of NFTcube. It is responsible for
 * rendering the animated image and the accompanying text content.
 *
 * @returns {JSX.Element} The rendered Possibility component.
 */
const Possibility = () => {
  const possRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    // Desktop animation for the image
    mm.add("(min-width: 1025px)", () => {
      gsap.fromTo(
        imgRef.current,
        {
          x: -600,
        },
        {
          scrollTrigger: {
            trigger: possRef.current,
            start: "200px bottom",
            end: "500px bottom",
            toggleActions: "play none none reverse",
          },
          x: -290,
          y: -100,
          rotate: 40,
        }
      );
    });

    // Tab animation for the image
    mm.add("(min-width: 476px) and (max-width: 1024px)", () => {
      gsap.fromTo(
        imgRef.current,
        {
          x: -600,
        },
        {
          scrollTrigger: {
            trigger: possRef.current,
            start: "200px bottom",
            end: "500px bottom",
            toggleActions: "play none none reverse",
          },
          x: -300,
          y: -220,
          rotate: 40,
        }
      );
    });
    // Mobile animation for the image
    mm.add("(max-width: 475px)", () => {
      gsap.fromTo(
        imgRef.current,
        {
          x: -600,
        },
        {
          scrollTrigger: {
            trigger: possRef.current,
            start: "200px bottom",
            end: "500px bottom",
            toggleActions: "play none none reverse",
          },
          x: -190,
          y: -160,
          rotate: 40,
        }
      );
    });
    gsap.fromTo(
      textRef.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: possRef.current,
          start: "200px bottom",
          end: "bottom bottom",
        },
        duration: 1,
      }
    );
  }, []);
  return (
    <div
      ref={possRef}
      className="nft__possibility section__padding relative"
      id="possibility"
    >
      <div ref={imgRef} className="nft__possibility-image absolute top-0">
        <img src={nftImage} alt="nft" />
      </div>
      <div className="w-[500px]"></div>
      <div ref={textRef} className="nft__possibility-content">
        <h1 className="gradient__text">
          Unlock the Full Potential of your <br /> collectibles beyond your
          imagination
        </h1>
        <p>
          At NFTcube, we guarantee to enhance your NFT experience, providing you
          with a comprehensive and feature-rich platform to explore, collect,
          and engage with the exciting world of NFTs.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
