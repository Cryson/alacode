import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin'
import { breakpoints, mqMin, mqMax } from '../style/mq';
import { color } from '../style/color';
import { font } from '../style/font';
import avatarLarge from '../images/avatar-large.svg';
import data from '../data/data.json';

export const MessageBox = ({ label }: { label: string }) => {
  type Message = {
    [name: string]: string[]
  }

  const messageData: Message = data.messageData;
  const messageId: keyof Message = label;
  const message = messageData[messageId];
  const messageLength = message.length;
  const [messageIndex, setMessageIndex] = useState(0);

  const increment = () => {
    setMessageIndex(prevValue => prevValue + 1);
  };

  const messageBox = useRef<HTMLElement>(null);
  const messageText = useRef<HTMLParagraphElement>(null);
  const nextMessageAllow = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    const tl = gsap.timeline();

    if (messageIndex < messageLength) {
      nextMessageAllow.current!.textContent = '';
      const numText = message[messageIndex].length;

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
          value: message[messageIndex],
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
  @media screen and (max-height: 640px) {
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