import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/Logo.svg";
import "./header.css";
import people from "../../assets/people.png";
import nft from "../../assets/NFT Hero.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaZ } from "react-icons/fa6";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const textRef = useRef(null);
  const heroRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (navbarRef.current) {
      gsap.to(navbarRef.current, {
        backgroundColor: scrolled ? "#040C18" : "",
        padding: scrolled ? "6.4px 96px" : "32px 96px",
        duration: 0.5,
        ease: "back",
      });
    }
  }, [scrolled]);

  useGSAP(() => {
    const mm = window.matchMedia("(min-width: 1000px)");
    const tl = gsap.timeline();
    if (mm.matches) {
      tl.fromTo(
        heroRef.current,
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          delay: 5.0,
        }
      );
      tl.fromTo(
        textRef.current,
        {
          y: 200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "back",
        }
      );
    }
  }, []);

  return (
    <div className="nft__header section__padding" id="home">
      <div ref={textRef} className="nft__header-content mt-32">
        <h1 className="gradient__text">
          Welcome to NFTcube: Your Gateway to the Future of Digital Assets!
        </h1>
        <p>
          Discover the World of NFTs: At NFTcube, we are passionate about the
          boundless possibilities that NFTs (Non-Fungible Tokens) bring to the
          world of art, collectibles, and digital ownership. Immerse yourself in
          a vibrant ecosystem where creativity knows no bounds, and every
          digital creation holds a unique story.
        </p>

        <div className="nft__header-content__input">
          <input type="email" placeholder="Your email address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="nft__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access in the last 24 hours.</p>
        </div>
      </div>
      <div ref={heroRef} className="nft__header-image mt-16">
        <img src={nft} alt="coins" />
      </div>
    </div>
  );
};

export default Header;
