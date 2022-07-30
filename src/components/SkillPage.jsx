import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints, mqMin } from '../style/mq';
import { color } from '../style/color';
import { font } from '../style/font';
import { fruitsData } from './fruitsData';
import { Body } from './Body';
import { skillData } from './skillData';
import { WhiteTitle } from './WhiteTitle';
import { WhiteBody } from './WhiteBody';
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import dotTitleLeft from '../images/dot-title-left.svg';
import dotTitleCenter from '../images/dot-title-center.svg';
import dotTitleRight from '../images/dot-title-right.svg';

const SkillList = styled.dl`
  width: 100%;
  color: #fff;
  > dt {
    display: flex;
    align-items: center;
    position: relative;
    height: 40px;
    padding: 0 2em;
    font-size: 1.5em;
    ${font.pixel10}
    background: url(${dotTitleCenter}) repeat-x;
    background-size: auto 56px;
    ${mqMin(breakpoints.md)} {
      height: 56px;
    }
  }
  > dt::before, > dt::after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
  }
  > dt::before {
    left: -24px;
    width: 64px;
    background: url(${dotTitleLeft}) no-repeat;
  }
  > dt::after {
    right: -24px;
    width: 24px;
    background: url(${dotTitleRight}) no-repeat;
  }
  > dd {
    position: relative;
    padding: 40px;
    background: ${color.grayEclipse};
    line-height: 2;
    letter-spacing: 0.08em;
  }
  > dd::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 100%;
    background: ${color.bluePicton};
  }
`;

export const SkillPage = () => {
  useEffect(() => {
    const term = document.getElementsByClassName('term');
    const desc = document.getElementsByClassName('desc');

    // 元のテキストから高さを取得し空にする
    for (let i = 0; i < term.length; i++) {
      const termHeight = term[i].clientHeight;
      const descHeight = desc[i].clientHeight;
      console.log(termHeight);
      console.log(descHeight);
      term[i].innerHTML = '';
      desc[i].innerHTML = '';
      term[i].style.height = termHeight + 'px';
      desc[i].style.height = descHeight + 'px';
    }

    gsap.registerPlugin(TextPlugin);
    const tl = gsap.timeline();

    setTimeout(() => {
      skillData.map((value, key) => {
        const numTerm = value.term.length;
        const numDesc = value.desc.length;

        tl.to('#skill-term' + key, {
          text: {
            value: value.term,
          },
          duration: numTerm * 0.06,
          ease: 'none',
        }).to('#skill-desc' + key, {
          text: {
            value: value.desc
          },
          duration: numDesc * 0.02,
          ease: 'none',
        });
      });
    }, 500);
  });

  return (
    <Body white>
      <WhiteTitle jp>
        {fruitsData[1].image}
        <span className="title">スキルリスト</span>
      </WhiteTitle>
      <WhiteBody skill>
        {skillData.map((value, key) => {
          return (
            <SkillList key={key}>
              <dt id={'skill-term' + key} className="term">{value.term}</dt>
              <dd id={'skill-desc' + key} className="desc">{value.desc}</dd>
            </SkillList>
          )
        })}
      </WhiteBody>
    </Body>
  )
};