import React, { useState, useEffect, useRef, createRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';
import { init, send } from 'emailjs-com';
import { color } from '../style/color';
import { font } from '../style/font';
import { breakpoints, mqMax, mqMin } from '../style/mq';
import { Body } from './Body';
import { PageTitle } from './PageTitle';
import { ColorContainer } from './ColorContainer';
import { fruitsData } from './fruitsData';
import { privacyPolicy } from './privacyPolicy';
import imgMail from '../images/contact-mail.svg';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 320px;
  padding: 20px;
  text-align: center;
  background: url(${imgMail}) right center/ contain no-repeat, ${color.purpleMauve};
  > p {
    color: ${color.black};
    font-weight: 700;
  }
  > p > span {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Form = styled.form`
  width: 100%;
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

const PrivacyPolicy = styled.div`
  /* content: ''; */
  width: 100%;
  padding: 80px 0 120px;
  color: ${color.black};
  background: ${color.purplePerfume};
  section {
    max-width: 680px;
    padding: 40px 10px 10px;
    margin: 0 auto;
  }
  h2 {
    padding: 1.5em 0;
    line-height: 1.5;
    text-align: center;
    font-size: 1.25em;
    font-weight: 500;  }
  h3 {
    font-weight: 700;
  }
  p {
    font-weight: 300;
  }
`;

export const ContactPage = () => {
  const label = 'contact';
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const pageTitle = useRef();
  const colorHeader = useRef();
  const form = useRef();
  const privacyRef = useRef();
  const privacyTitleRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {

    // const tl = gsap.timeline({delay: 0.5});
    // tl.from('#contact-container', {
    //   opacity: 0,
    //   rotate: 0
    // }).from('#contact-container', {
    //   duration: 0.07,
    //   rotation: 15,
    //   repeat: 6,
    //   yoyo: true,
    // }).from('.light', {
    //   opacity: 0.4,
    //   display: 'block'
    // }).fromTo('#contact-container', {
    //   width: 20,
    //   height: 20,
    // }, {
    //   width: '100%',
    //   height: '100%',
    //   margin: 0,
    //   delay: -0.2,
    //   ease: "back.in(1)",
    // }).from([pageTitle.current, colorHeader.current, colorForm.current], {
    //   delay: 0.1,
    //   display: 'none',
    //   opacity: 0,
    // });

    gsap.set(privacyRef.current, {
      display: 'none',
      height: 0,
      padding: 0,
    });
    gsap.set(['#privacy-title', '.privacy-section'], {
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    openPrivacy ? tl.to(privacyRef.current, {
      display: 'block',
    }).to(privacyRef.current, {
      delay: -0.5,
      height: 'auto',
      padding: '80px 20px 120px',
    }).to(['#privacy-title', '.privacy-section'], {
      opacity: 1,
    }) : tl.to(['#privacy-title', '.privacy-section'], {
      opacity: 0,
    }).to(privacyRef.current, {
      height: 0,
      padding: 0,
    }).to(privacyRef.current, {
      display: 'none',
    });
  }, [openPrivacy]);

  return (
    <Body label={label}>
      <PageTitle ref={pageTitle}>{fruitsData[4].image}お問い合わせフォーム</PageTitle>
      <ColorContainer page="contact" color={color.purpleMauve}>
        <Header ref={colorHeader}>
          <p>お仕事に関するご相談がございましたら、<span onClick={() => setOpenPrivacy(toggle => !toggle)}>プライバシーポリシー</span>をご確認の上、<br />
            下記メールフォームよりお気軽にご連絡ください。</p>
        </Header>
        <PrivacyPolicy ref={privacyRef}>
          <h2 id="privacy-title">個人情報保護方針</h2>
          {privacyPolicy.map((value, key) => {
            return (
              <section className="privacy-section" key={key}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </section>
            )
          })}
        </PrivacyPolicy>
        <Form ref={form} onSubmit={sendEmail}>
          <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
          <div className="row">
            <label className="label" htmlFor="formName">おなまえ</label>
            <input id="formName" className="name" name="user_name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="row">
            <label className="label" htmlFor="formEmail">メールアドレス</label>
            <input id="formEmail" className="email" name="user_email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="row">
            <label className="label -message" htmlFor="formMessage">ほんぶん</label>
            <textarea id="formMessage" className="message" name="message" type="textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button className="send" type="submit" value="Send">[ けってい ]</button>
        </Form>
      </ColorContainer>
    </Body>
  )
};