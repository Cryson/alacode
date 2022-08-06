import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin'
import { breakpoints, mqMin, mqMax } from '../style/mq';
import { color } from '../style/color';
import { font } from '../style/font';
import { messageData } from './messageData';
import avatarLarge from '../images/avatar-large.svg';

const Wrapper = styled.aside`
  content: '';
  display: flex;
  justify-content: space-between;
  align-items: end;
  position: sticky;
  bottom: 70px;
  left: 0;
  z-index: 5000;
  width: 100%;
  height: 200px;
  border-radius: 40px;
  background: ${color.grayNero};
  cursor: pointer;
  ${mqMax(breakpoints.sm)} {
    display: none;
  }
  @media screen and (max-height: 600px) {
    display: none;
  }
  ${mqMin(breakpoints.md)} {
    bottom: 20px;
  }
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    border: 4px solid #fff;
  }
  .avatar {
    flex-basis: 25%;
    max-width: 240px
  }
`;
const MessageText = styled.p`
  flex: 1 1 75%;
  height: 100%;
  padding: 40px 40px 40px 20px;
  font-size: 1.25em;
  ${font.pixel10}
`;
const NextMessageAllow = styled.span`
  content: '';
  color: #fff;
  ${font.antique}
  animation: blink 1s ease infinite alternate;
  @keyframes blink{
    0% {opacity:0;}
    100% {opacity:1;}
  }
`;

export const MessageBox = ({ label }) => {

  const messageId = label;
  const messageLength = messageData[messageId].message.length;
  const [messageIndex, setMessageIndex] = useState(0);

  const nowMessage = messageData[messageId].message[messageIndex];

  const increment = () => {
    setMessageIndex(prevValue => prevValue + 1);
  };

  const messageBox = useRef();
  const messageText = useRef();
  const nextMessageAllow = useRef();

  // const closeMessageButton = useCallback((ref) => {
  //   gsap.from(ref, {
  //     opacity: 0,
  //     repeat: -1,
  //     yoyo: true,
  //   });
  // }, []);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    const tl = gsap.timeline();

    if (messageIndex < messageLength) {
      nextMessageAllow.current.textContent = '';
      const numText = nowMessage.length;

      tl.set([messageText.current, nextMessageAllow.current], {
        text: {
          value: '',
        },
        ease: 'none',
      }).set([nextMessageAllow.current], {
        text: {
          value: '',
        },
        ease: 'none',
      }).to(messageText.current, {
        text: {
          value: nowMessage,
        },
        duration: numText * 0.03,
        ease: 'none',
      }).to(nextMessageAllow.current, {
        text: {
          value: '▼',
        },
        ease: 'none',
      });
    }
    messageIndex === messageLength &&
      tl.to(messageBox.current, { display: 'none', alpha: 0 });
  }, [messageIndex]);

  return (
    <Wrapper ref={messageBox} onClick={increment}>
      <img className="avatar" src={avatarLarge} alt="16bitアバター" />
      <MessageText>
        <span ref={messageText}></span>
        <NextMessageAllow ref={nextMessageAllow}></NextMessageAllow>
      </MessageText>
    </Wrapper>
  )
};