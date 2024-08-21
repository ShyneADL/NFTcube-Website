import React, {useRef} from 'react';
import './feature.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Feature = ({ title, text }) => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const boxRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 90%', // Adjust as needed
        toggleActions: 'restart none none reverse',
      },
    });

    gsap.fromTo(
      boxRef.current,
      {
      width: '0px',
      height: '3px',
      ease: 'back.out'
    },
    {
      width: '38px ',
      height: '3px',
      ease: 'power3.inOut',
      duration: 1,
    }
    )

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
    .fromTo(
      textRef.current,
      { opacity: 0, y: 10 }, // Smaller offset for paragraph
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      "-=0.4" // Overlap with title animation
    );
    console.log(boxRef.current)
  }, []);
  return (
  <div className="nft__features-container__feature">
    <div ref={titleRef} className="nft__features-container__feature-title">
      <div ref={boxRef}/>
      <h1>{title}</h1>
    </div>
    <div ref={textRef} className="nft__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);
};

export default Feature;