import React, { useState, useEffect, useRef, createRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { init, send } from 'emailjs-com';
import { color } from '../style/color';
import { font } from '../style/font';
import { breakpoints, mqMax, mqMin } from '../style/mq';
import { Body } from './Body';
import { ColorTitle } from './ColorTitle';
import { ColorContainer } from './ColorContainer';
import { fruitsData } from './fruitsData';
import imgMail from '../images/contact-mail.svg';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 320px;
  padding: 20px;
  text-align: center;
  background: url(${imgMail}) right center/ contain no-repeat, ${color.purpleMauve};
  > p {
    color: ${color.black};
    font-weight: 700;
  }
`;
const Form = styled.form`
  width: 100%;
  height: calc(100% - 320px);
  padding: 40px 20px 80px;
  margin: 0 auto;
  background: ${color.grayEclipse};
  > p {
    padding: 1em 10px;
    color: ${color.grayDim};
    ${font.pixel10}
    font-size: 0.75em;
    text-align: center;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    max-width: 680px;
    padding: 40px 10px 10px;
    margin: 0 auto;
    border-bottom: 2px solid #fff;
  }
  .label, .send {
    display: block;
    ${font.pixel10}
  }
  .name, .email, .message {
    display: block;
    flex: 1 1 auto;
    font-size: 1em;
    color: #fff;
  }
  .message {
    height: 160px;
  }
  .label {
    flex: 0 1 160px;
  }
  .label.-message {
    flex: 1 1 100%;
    padding-bottom: 1em;
  }
  .send {
    padding: 1em;
    margin: 40px auto 0;
    color: #fff;
    font-size: 1.5em;
  }
`;

export const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const colorTitle = useRef();
  const colorHeader = useRef();
  const colorForm = useRef();

  useEffect(() => {
    const tl = gsap.timeline({delay: 0.5});
    tl.from('#contact-container', {
      opacity: 0,
      rotate: 0
    }).from('#contact-container', {
      duration: 0.07,
      rotation: 15,
      repeat: 6,
      yoyo: true,
    }).from('.light', {
      opacity: 0.4,
      display: 'block'
    }).fromTo('#contact-container', {
      width: 20,
      height: 20,
    }, {
      width: '100%',
      height: '100%',
      margin: 0,
      delay: -0.2,
      ease: "back.in(1)",
    }).from([colorTitle.current, colorHeader.current, colorForm.current], {
      delay: 0.1,
      display: 'none',
      opacity: 0,
    });
  }, []);

  return (
    <Body>
      <ColorTitle ref={colorTitle}>{fruitsData[4].image}お問い合わせフォーム</ColorTitle>
      <ColorContainer page="contact" color={color.purpleMauve}>
        <Header ref={colorHeader}>
          <p>お仕事に関するご相談がございましたら、プライバシーポリシーをご確認の上、<br />
            下記メールフォームよりお気軽にご連絡ください。</p>
        </Header>
        <Form ref={colorForm}>
          <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
          <div className="row">
            <label className="label" htmlFor="formName">おなまえ</label>
            <input className="name" type="text" id="formName" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="row">
            <label className="label" htmlFor="formEmail">メールアドレス</label>
            <input className="email" type="email" id="formEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="row">
            <label className="label -message" htmlFor="formMessage">ほんぶん</label>
            <textarea className="message" type="textarea" id="formMessage" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button className="send">[ けってい ]</button>
        </Form>
      </ColorContainer>
    </Body>
  )
};