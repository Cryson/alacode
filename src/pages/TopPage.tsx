import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { color } from '../style/color';
import { font } from '../style/font';
import { vwRange } from '../style/vw';
import { breakpoints, mqMin } from '../style/mq';
import { fruitsData } from 'data/fruitsData';
import { Body } from '../components/Body';

const TitleEn = styled.h2`
  margin-bottom: 1.5em;
  ${font.pixel10}
  ${vwRange('font-size', 12, 24, breakpoints.xs, breakpoints.md)}
  text-align: center;
  ${mqMin(breakpoints.md)} {
    font-size: 1.5em;
  }
`;
const TitleJp = styled.p`
  margin-top: 1em;
  font-weight: 100;
  ${font.pixel10}
  ${vwRange('font-size', 16, 40, breakpoints.xs, breakpoints.md)}
  ${mqMin(breakpoints.md)} {
    ${vwRange('font-size', 24, 40, breakpoints.md, breakpoints.lg)}
  }
  ${mqMin(breakpoints.lg)} {
    font-size: 2.5em;
  }
`;
const Hero = styled.h1`
  position: relative;
  z-index: 100;
  width: 71.5%;
  background: inherit;
  overflow: hidden;
  .hero-color {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 200vw;
    height: 200vh;
    margin: -100vh 0 0 -100vw;
    background: linear-gradient(75deg, ${color.redMulberry}, ${color.redCarnation}, ${color.yellowGrandis}, ${color.purpleMauve}, ${color.blueRegent}, ${color.redMulberry}, ${color.redCarnation}, ${color.yellowGrandis}, ${color.purpleMauve}, ${color.blueRegent}, ${color.redMulberry}, ${color.redCarnation}, ${color.yellowGrandis}, ${color.purpleMauve}, ${color.blueRegent});
    mix-blend-mode: darken;
  }
  #hero-front, #hero-back {
    top: 0;
    left: 0;
    fill: #fff;
  }
  #hero-back {
    position: relative;
    z-index: 1;
  }
  #hero-front {
    position: absolute;
    z-index: 3;
  }
`
const FruitsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 720px;
  padding: 120px 0;
  margin: 0 auto;
  ${mqMin(breakpoints.md)} {
    margin-bottom: 0;
  }
  .fruits {
    width: 10%;
    max-width: 80px;
  }
  .fruits:hover > .hukidashi {
    display: block;
    opacity: 1;
  }
  .image {
    width: 100%;
  }
  .hukidashi {
    display: none;
    position: absolute;
    top: -120%;
    left: 0;
    width: 120px;
    padding: 1em;
    text-align: center;
    color: ${color.black};
    background: #fff;
    ${font.pixel10}
    white-space: nowrap;
    opacity: 0;
  }
  .hukidashi::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 40px;
    margin-left: -10px;
    border: 10px solid transparent;
    border-top: 10px solid #fff;
  }
`;

export const TopPage: React.FC = () => {
  const label = "top";

  const heroColorRef = useRef<HTMLDivElement>(null);
  const heroFruitsRef = useRef<HTMLUListElement>(null);

  const tl = gsap.timeline({ repeatDelay: 0.8, repeat: -1 });
  const q = gsap.utils.selector(heroFruitsRef);

  const onMouseEnterAction = () => {
    tl.restart(true, false).to(q('.fruits'), {
      y: -10,
      duration: 0.2,
      stagger: {
        each: 0.15,
      }
    }).to(q('.fruits'), {
      y: 0,
      duration: 0.2,
      stagger: {
        each: 0.15,
      }
    }, '-=0.4');
  };

  const onMouseLeaveAction = () => {
    tl.time(0).pause().kill();
  };

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      if (heroColorRef.current) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        heroColorRef.current && gsap.to(heroColorRef.current, {
          x: mouseX,
          y: mouseY,
          duration: 2
        });
      }
    });
  }, []);

  return (
    <Body label={label}>
      <TitleEn>Web Design and Front End Web Development</TitleEn>
      <Hero>
        <div className="hero-color" ref={heroColorRef}></div>
        <svg id="hero-back" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80"><path className="cls-1" d="M12.85 36.18v-7.82h23.28v7.82h7.82v38.74h-31.1v-7.73h23.28V51.64H12.85v15.55H5.12V51.64h7.73v-7.73h23.28v-7.73H12.85ZM44.14 12.9V5.07h15.55v62.12h7.73v7.73H51.96V12.9h-7.82ZM78.5 36.18v-7.82h23.28v7.82h7.82v38.74H78.49v-7.73h23.28V51.64H78.49v15.55h-7.73V51.64h7.73v-7.73h23.28v-7.73H78.49ZM125.07 67.19h-7.73V36.18h7.73v31.01Zm23.28-31.01h-23.28v-7.82h23.28v7.82Zm0 38.74h-23.28v-7.73h23.28v7.73Zm0-38.74h7.82v7.73h-7.82v-7.73Zm0 31.01v-7.73h7.82v7.73h-7.82ZM171.64 67.19h-7.73V36.18h7.73v31.01Zm23.28-31.01h-23.28v-7.82h23.28v7.82Zm0 38.74h-23.28v-7.73h23.28v7.73Zm0-7.73V36.18h7.82v31.01h-7.82ZM249.31 74.93H218.2V67.2h23.28V36.19H218.2V67.2h-7.73V36.19h7.73v-7.82h23.28V5.07h7.82v69.86ZM264.77 67.19h-7.73V36.18h7.73v7.73h23.28v-7.73h7.82v15.46h-31.11v15.55Zm23.28-31.01h-23.28v-7.82h23.28v7.82Zm0 38.74h-23.28v-7.73h23.28v7.73Zm0-7.73v-7.73h7.82v7.73h-7.82Z" /></svg>
        <svg id="hero-front" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 80"><path className="cls-1" d="M36.14 28.36v7.82H12.85v-7.82h23.28m7.82 7.82v38.74h-31.1v-7.73h23.28V51.64H12.85v15.55H5.12V51.64h7.73v-7.73h23.28v-7.73h7.82m-5.82-9.82H10.85v11.82h23.28v3.73H10.85v7.73H3.12v19.55h7.73v7.73h35.11V34.18h-7.82v-7.82ZM14.85 53.64h19.28v11.55H14.85V53.64Z" /><path className="cls-1" d="M59.69 5.07v62.12h7.73v7.73H51.96V12.9h-7.82V5.07h15.55m2-2H42.14V14.9h7.82v62.03h19.46V65.2h-7.73V3.07Z" /><path className="cls-1" d="M101.79 28.36v7.82H78.51v-7.82h23.28m7.82 7.82v38.74H78.5v-7.73h23.28V51.64H78.5v15.55h-7.73V51.64h7.73v-7.73h23.28v-7.73h7.82m-5.82-9.82H76.5v11.82h23.28v3.73H76.5v7.73h-7.73v19.55h7.73v7.73h35.11V34.18h-7.82v-7.82ZM80.5 53.64h19.28v11.55H80.5V53.64ZM148.35 28.36v7.82h-23.28v-7.82h23.28m7.82 7.82v7.73h-7.82v-7.73h7.82m-31.11 0v31.01h-7.73V36.18h7.73m31.11 23.28v7.73h-7.82v-7.73h7.82m-7.82 7.73v7.73h-23.28v-7.73h23.28m2-40.84h-27.28v7.82h-7.73v35.01h7.73v7.73h27.28v-7.73h7.82V57.45h-11.82v7.73h-19.28V38.17h19.28v7.73h11.82V34.17h-7.82v-7.82ZM194.92 28.36v7.82h-23.28v-7.82h23.28m7.82 7.82v31.01h-7.82V36.18h7.82m-31.11 0v31.01h-7.73V36.18h7.73m23.28 31.01v7.73h-23.28v-7.73h23.28m2-40.84h-27.28v7.82h-7.73v35.01h7.73v7.73h27.28v-7.73h7.82v-35h-7.82v-7.82Zm-23.28 11.82h19.28v27.01h-19.28V38.17ZM249.31 5.07v69.86H218.2V67.2h23.28V36.19H218.2V67.2h-7.73V36.19h7.73v-7.82h23.28V5.07h7.82m2-2h-11.82v23.29H216.2v7.82h-7.73v35.01h7.73v7.73h35.11V3.07Zm-31.11 35.11h19.28v27.01h-19.28V38.18ZM288.05 28.36v7.82h-23.28v-7.82h23.28m7.82 7.82v15.46h-31.11v15.55h-7.73V36.18h7.73v7.73h23.28v-7.73h7.82m0 23.28v7.73h-7.82v-7.73h7.82m-7.82 7.73v7.73h-23.28v-7.73h23.28m2-40.84h-27.28v7.82h-7.73v35.01h7.73v7.73h27.28v-7.73h7.82V57.45h-11.82v7.73h-19.28V53.63h31.11V34.17h-7.82v-7.82Zm-23.28 11.82h19.28v3.73h-19.28v-3.73Z" /></svg>
      </Hero>
      <TitleJp>さぁ Webのせかいを あじわおう</TitleJp>
      <FruitsList onMouseEnter={onMouseEnterAction} onMouseLeave={onMouseLeaveAction} ref={heroFruitsRef}>
        {fruitsData.map((value, key) => {
          return (
            <li className="fruits" key={key}>
              <Link to={value.link}>{value.image}</Link>
              <div className="hukidashi">{value.title}</div>
            </li>
          );
        })}
      </FruitsList>
    </Body>
  )
};