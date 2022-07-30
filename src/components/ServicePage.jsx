import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { breakpoints, mqMin, mqMax, mqRange } from '../style/mq';
import { color } from '../style/color';
import { font } from '../style/font';
import { Body } from './Body';
import { serviceData } from './serviceData';
import serviceOdd from '../images/service/service-odd.svg';
import serviceEven from '../images/service/service-even.svg';
import { fruitsData } from './fruitsData';
import { useEffect } from 'react';

const Title = styled.h2`
  margin: 40px auto 80px;
  line-height: 2.2;
  font-size: 2em;
  ${font.pixel10}
  text-align: center;
  ${mqMin(breakpoints.sm)} {
    margin: 40px auto 120px;
    font-size: 3em;
  }
  br {
    display: none;
    ${mqMin(breakpoints.sm)} {
      display: inline;
    }
    ${mqRange(breakpoints.sm, breakpoints.lg)} {
      display: none;
    }
  }
`;
const SubTitle = styled.p`
  margin-bottom: 120px;
  line-height: 2;
  font-size: 1.25em;
  font-weight: 300;
  text-align: center;
`;
const ServiceMenu = styled.nav`
  width: 100%;
  margin-bottom: 160px;
  ${font.pixel10}
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  > ul > li {
    flex: 0 1 100%;
    margin-bottom: 20px;
    text-align: center;
    ${mqMin(breakpoints.sm)} {
      flex: 0 1 49%;
    }
    ${mqMin(breakpoints.lg)} {
      flex: 0 1 auto;
    }
  }
  > ul > li > a {
    display: block;
    padding: 0.5em 2em;
    background: ${color.redCharm};
  }
`;
const ServiceContent = styled.ul`
  width: 100%;
  > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 160px;
  }
  > li > .texts {
    flex: 1 1 50%;
    position: relative;
    max-width: 400px;
  }
  > li:nth-child(2n) > .texts {
    order: 1;
  }
  > li > .texts > h3 {
    margin-bottom: 1em;
    font-size: 2em;
    ${font.pixel10}
  }
  > li > .texts > .text {
    position: relative;
    height: 100%;
  }
  > li > .texts > .text > p {
    position: relative;
    z-index: 2;
    line-height: 2.2;
    font-weight: 300;
  }
  > li > .texts > .text::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    width: 100%;
    padding-top: 75.5%;
    background: url(${serviceOdd}) top left/ cover no-repeat;
  }
  > li:nth-child(even) > .texts > .text::before {
    padding-top: 62.75%;
    background: url(${serviceEven}) top left/ cover no-repeat;
  }
  > li:nth-child(even) > img {
    ${mqMin(breakpoints.sm)} {
      padding-right: 10px;
    }
  }
  > li:nth-child(odd) img {
    ${mqMin(breakpoints.sm)} {
      padding-left: 10px;
    }
  }
  > li  > img {
    width: 50%;
    min-width: 200px;
    height: 400px;
    ${mqMax(breakpoints.sm)} {
      display: none;
    }
  }
  > li:nth-child(2n) > img {
    order: 0;
  }
`;
const Rect = styled.div`
  content: '';
  position: absolute;
  z-index: 1;
  width: 20px;
  height: 20px;
  opacity: 0;
  transform: scale(0);
  &.-head {
    top: 20%;
    right: 90%;
  }
  &.-foot {
    bottom: -7%;
    right: 0;
  }
  &.-blue, &.-blue::before {
    background: ${color.blueSan};
  }
  &.-red, &.-red::before {
    background: ${color.redFin};
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -50%;
    left: -50%;
    z-index: 1;
    width: 200%;
    height: 200%;
    transition: 0.3s opacity ease-in-out;
    mix-blend-mode: screen;
    filter: blur(10px);
  }
`;
const ServicePrevButton = styled.button`
  color: #fff;
  line-height: 1.5;
  ${font.pixel10}
  text-align: left;
  > a {
    display: flex;
    align-items: center;
  }
  > a > img {
    position: relative;
    top: -0.2em;
    width: 2em;
    margin-right: 0.5em;
  }
`;

export const ServicePage = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    serviceData.map((value, key) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#rect-foot' + key, // 要素".b"がビューポートに入ったときにアニメーション開始
          start: 'top bottom', // アニメーション開始位置
          end: 'top center', // アニメーション終了位置
          // scrub: true, // アニメーションをスクロール位置にリンクさせる
        }
      }).to('#rect-head' + key, { // 動かしたい要素は".b"
        right: '5%',
        opacity: 1,
        scale: 1,
        rotation: 270, // 開始〜終了までの間で360度回転する
        ease: "power1.out",
      }).to('#rect-head' + key, { // 動かしたい要素は".b"
        top: '7%',
        rotation: 90, // 開始〜終了までの間で360度回転する
        duration: 1.2,
        ease: "bounce.out",
      });

      gsap.timeline({
        scrollTrigger: {
          trigger: '#rect-foot' + key, // 要素".b"がビューポートに入ったときにアニメーション開始
          start: 'top bottom', // アニメーション開始位置
          end: 'top center', // アニメーション終了位置
          // scrub: true, // アニメーションをスクロール位置にリンクさせる
        }
      }).to('#rect-foot' + key, { // 動かしたい要素は".b"
        right: '95%',
        opacity: 1,
        rotation: 270, // 開始〜終了までの間で360度回転する
        scale: 1,
        ease: "power1.out",
      }).to('#rect-foot' + key, { // 動かしたい要素は".b"
        bottom: '-20%',
        rotation: 90, // 開始〜終了までの間で360度回転する
        duration: 1.2,
        ease: "bounce.out",
      });
    });
  }, []);

  return (
    <Body>
      <Title>アクティブな探究心で<br />クリエイティブな遊び心を実現する。</Title>
      <SubTitle>子供の頃にあったはずの無限大の発想は、大人になって凝り固まってしまったのか。<br />
        今でも覚えているあの時の感動や衝撃。<br />
        探究心がくれた知識で、そんなサービスを実現します。</SubTitle>
      <ServiceMenu>
        <ul>
          {serviceData.map((value, key) => {
            return (<li key={key}><AnchorLink href={`#${value.id}`} offset="50">{value.titleJp}</AnchorLink></li>);
          })}
        </ul>
      </ServiceMenu>
      <ServiceContent>
        {serviceData.map((value, key) => {
          return (
            <li id={value.id} key={key}>
              <div className="texts">
                <h3>{value.titleEn}</h3>
                <div className="text">
                  {value.text()}
                </div>
                <Rect id={'rect-head' + (key)} className={'rect -head' + (key % 2 == 0 ? ' -blue' : ' -red')} />
                <Rect id={'rect-foot' + (key)} className={'rect -foot' + (key % 2 == 0 ? ' -blue' : ' -red')} />
              </div>
              <img src={value.image} alt={value.alt} />
            </li>
          )
        })}
      </ServiceContent>
      <ServicePrevButton>
        <AnchorLink href="#root" offset="50">
          {fruitsData[2].image}
          ページトップへもどる
        </AnchorLink>
      </ServicePrevButton>
    </Body>
  )
};