import React, { useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { color } from '../style/color';
import { breakpoints, mqMin, mqMax, mqRange } from '../style/mq';
import { font } from '../style/font';
import { Link, useLocation } from 'react-router-dom';
import { sidebarData } from './sidebarData';
import { useState } from 'react';
import { useEffect } from 'react';

const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  bottom: -400px;
  z-index: 1000;
  width: 100%;
  ${font.pixel10}
  ${mqMin(breakpoints.md)} {
    position: relative;
    left: auto;
    bottom: auto !important;
    flex: 0 1 240px;
    height: auto;
    margin-left: 80px;
  }
  .title {
    display: none;
    font-size: 2.5em;
    text-align: center;
    background: ${color.grayNero};
    ${mqMin(breakpoints.md)} {
      display: block;
      position: absolute;
      top: -2em;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  > .container {
    position: relative;
    width: calc(100% - 4vw);
    margin: 0 auto;
    ${mqMin(breakpoints.md)} {
      position: sticky;
      top: 100px;
      width: auto;
    }
  }
  > .container > nav > ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 40px 0;
    border: solid 4px #fff;
    border-radius: 40px;
    font-size: 1.25em;
    background: ${color.black};
    ${mqMin(breakpoints.md)} {
      padding: 60px 0;
      background: transparent;
    }
  }
  > .container > nav > ul > .row {
    flex: 1 1 100%;
    position: relative;
    padding: 0 60px;
    margin-bottom: 1em;
    ${mqRange(breakpoints.sm, breakpoints.md)} {
      flex: 1 1 50%;
    }
    ${mqMin(breakpoints.md)} {
      padding-right: 10px;
    }
  }
  > .container > nav > ul > .row.-close {
    ${mqMin(breakpoints.md)} {
      display: none;
    }
  }
  > .container > nav > ul > .row:nth-child(5),
  > .container > nav > ul > .row:last-child {
    ${mqRange(breakpoints.sm, breakpoints.md)} {
      margin-bottom: 0;
    }
  }
  > .container > nav > ul > .row.-active::before {
    content: '▶︎';
    position: absolute;
    top: -0.1em;
    left: 1.5em;
    ${font.antique}
  }
`;
const HamburgerButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 2vw;
  color: #fff;
  background: ${color.grayNero};
  ${font.pixel10}
  font-size: 2em;
  text-align: center;
  &::before, .borders {
    content: '';
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 32px;
    height: 24px;
  }
  .borders::before, .borders::after, .border {
    content: '';
    width: 100%;
    height: 3px;
    background: #fff;
  }
  ${mqMin(breakpoints.md)} {
    display: none;
  }
`;

export const Sidebar = () => {
  const hambMenu = useRef();
  const hambButton = useRef();
  const [openHamb, setOpenHamb] = useState(false);
  const location = useLocation();

  const toLink = () => {
    setOpenHamb(false);
    // gsap.to('.body-container', {
    //   opacity: 0,
    // });
  };

  useEffect(() => {
    if (openHamb) {
      gsap.to(hambMenu.current, {
        bottom: '2vw'
      });
      gsap.to(hambButton.current, {
        y: '100%'
      });
    } else {
      gsap.to(hambMenu.current, {
        bottom: '-400'
      });
      gsap.to(hambButton.current, {
        y: '0'
      });
    }
  }, [openHamb]);

  return (
    <SidebarContainer ref={hambMenu}>
      <HamburgerButton ref={hambButton} onClick={() => setOpenHamb(toggle => !toggle)}>Open Menu<div className="borders"><div className="border"></div></div></HamburgerButton>
      <div className="container">
        <h2 className="title">MENU</h2>
        <nav>
          <ul>
            {sidebarData.map((value, key) => {
              if (key !== 6) {
                return (
                  <li className={`row${location.pathname === value.link ? ' -active' : ''}`} onClick={() => toLink()} key={key}>
                    <Link to={value.link}>{value.title}</Link>
                  </li>
                )  
              } else {
                return (
                  <li className='row -close' onClick={() => {toLink()}} key={key}>
                    {value.title}
                  </li>
                )
              }
            })}
          </ul>
        </nav>
      </div>
    </SidebarContainer>
  );
}