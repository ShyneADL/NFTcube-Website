import React, { useState, useEffect, useRef } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/Logo.svg";
import "./navbar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const loginBtnsRef = useRef(null);
  const navLinksRef = useRef(null);

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
    const mediaQuery = window.matchMedia("(min-width: 1000px)");
    const tl = gsap.timeline();
    tl.fromTo(
      logoRef.current,
      {
        y: 115,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1,
      }
    );
    if (mediaQuery.matches) {
      tl.fromTo(
        gsap.utils.toArray(navLinksRef.current.children),
        {
          y: -100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.8,
          duration: 1,
        }
      );
    }
    tl.fromTo(
      loginBtnsRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.5,
        duration: 0.5,
      }
    );
  }, []);

  return (
    <div ref={navbarRef} className={`nft__navbar fixed top-0 w-full`}>
      <div className="nft__navbar-links">
        <div className="nft__navbar-links_logo">
          <img ref={logoRef} src={logo} alt="logo" />
        </div>
        <div ref={navLinksRef} className="nft__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whnft">What is NFTcube?</a>
          </p>
          <p>
            <a href="#features">Features</a>
          </p>
          <p>
            <a href="#possibility">Docs</a>
          </p>
          <p>
            <a href="#blog">Blog</a>
          </p>
        </div>
      </div>
      <div className="nft__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="nft__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nft__navbar-menu_container scale-up-center">
            <div className="nft__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wnft">What is nft?</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="nft__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
