import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { breakpoints, mqMin } from './style/mq';
import { color } from './style/color';
import { fontFace, font } from './style/font';
import { reset } from './style/reset';
import { App } from './App.tsx';
import backPc from './images/back-pc.svg';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fontFace}
  body {
    min-width: 320px;
    height: 100%;
    line-height: 2;
    color: #fff;
    ${font.antique}
    font-size: 1.4em;
    ${mqMin(breakpoints.md)} {
      font-size: 1.6em;
    }
  }
  a[href^="tel:"] {
    ${mqMin(breakpoints.sm)} {
      pointer-events: none;
    }
  }
  #root {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 0;
    width: 100%;
    min-height: 100vh;
    padding: 120px 2vw 80px;
    background: url(${backPc}) 35% center/ cover fixed no-repeat, ${color.black};
    ${mqMin(breakpoints.md)} {
      padding: 160px 20px 40px;
      background-position: top right;
    }
  }
  .grecaptcha-badge {
    visibility: hidden;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <GlobalStyle />
    <App />

    </>
);