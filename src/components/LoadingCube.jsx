import { useState, useEffect, useRef, createContext } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { color } from '../style/color';
import { font } from '../style/font';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: ${color.black};
  ${font.pixel10}
`;
const Text = styled.p`
  font-size: 4em;
  line-height: 1; 
`
const Cubes = styled.div`
  display: flex;
  width: 120px;
  margin-bottom: -20px;
  .cube {
    content: '';
    position: relative;
    width: 10px;
    height: 10px;
    margin: 0 10px;
    background: #fff;
  }
`;
const Light = styled.div`
  content: '';
  position: absolute;
  top: -25%;
  left: -25%;
  z-index: 1;
  width: 150%;
  height: 150%;
  background: #fff;
  opacity: 0.5;
  transition: 0.3s opacity ease-in-out;
  mix-blend-mode: screen;
  filter: blur(10px);
`

export const LoadingFinish = createContext();

export const LoadingCube = ({ complete, setHoge }) => {
  const wrapperRef = useRef();
  const textRef = useRef();
  const cubesRef = useRef();
  const q = gsap.utils.selector(cubesRef);

  useEffect(() => {
    const tl = gsap.timeline();

    complete ?
      tl.to([textRef.current, cubesRef.current], {
        opacity: 0,
      }).to(wrapperRef.current, {
        display: 'none',
        x: '100%'
      }).call(() => { setHoge(true) }, [], '<+=0.5')
      :
      tl.from(cubesRef.current, {
        opacity: 0,
        duration: 0.3,
      })
        .add('go')
        .to(q('.cube'), {
          scale: 2,
          y: -10,
          duration: 0.2,
          repeat: -1,
          repeatDelay: 0.5,
          stagger: {
            each: 0.2,
            repeat: 1,
            yoyo: true,
          }
        }, 'go')
        .from(q('.light'), {
          scale: 0,
          duration: 0.2,
          repeat: -1,
          repeatDelay: 0.5,
          stagger: {
            each: 0.2,
            repeat: 1,
            yoyo: true,
          }
        }, 'go');
  }, [complete])

  return (
    <Wrapper ref={wrapperRef}>
      <Text ref={textRef}>Loading</Text>
      <Cubes ref={cubesRef}>
        <div className="cube"><Light className="light" /></div>
        <div className="cube"><Light className="light" /></div>
        <div className="cube"><Light className="light" /></div>
      </Cubes>
    </Wrapper>
  )
};