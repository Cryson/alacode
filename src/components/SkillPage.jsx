import React, { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { color } from '../style/color';
import { font } from '../style/font';
import { fruitsData } from './fruitsData';
import { Body } from './Body';
import { skillData } from './skillData';
import { PageTitle } from './PageTitle';
import { SectionTitle } from './SectionTitle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { breakpoints, mqMin } from '../style/mq';

const SkillList = styled.ul`
  width: 100%;
  ${font.pixel10}
  color: ${color.black};
  ${mqMin(breakpoints.md)} {
    padding: 0 20px;
  }
`;
const Gauge = styled.li`
  position: relative;
  width: 100%;
  padding: 4px;
  margin-bottom: 20px;
  border-top: 4px solid ${color.yellowEquator};
  border-bottom: 4px solid ${color.yellowEquator};
  line-height: 1.1;
  &:last-child {
    margin-bottom: 0;
  }
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0px;
    width: 4px;
    height: 100%;
    background: ${color.yellowEquator};
  }
  &::before {
    left: -4px;
  }
  &::after {
    right: -4px;
  }
  .inner {
    position: relative; 
    width: 100%;
    height: 100%;
    font-size: 1.5em;
    background: linear-gradient(0deg, #D3CCE3, #fff 25%);
    overflow: hidden;
  }
  .text {
    width: 0%;
    height: 100%;
    padding: 4px;
    white-space: nowrap;
    background: linear-gradient(0deg, ${color.yellowEquator}, ${color.yellowCorn});
  }
`;

export const SkillPage = () => {
  const label = 'skill';
  const pageTitle = useRef();

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    skillData.map((category, key) => {
      const data = Object.entries(category.level);
      data.map((def, num) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: `#${category.id}${num}`, // 要素".b"がビューポートに入ったときにアニメーション開始
            start: 'top 85%', // アニメーション開始位置
            end: 'top 50%', // アニメーション終了位置
            scrub: true, // アニメーションをスクロール位置にリンクさせる
          }
        }).to(`#${category.id}${num}`, {
          width: `${def[1]}%`,
        })
      });
    });
  });

  // useEffect(() => {
  //   const term = document.getElementsByClassName('term');
  //   const desc = document.getElementsByClassName('desc');

  //   // 元のテキストから高さを取得し空にする
  //   for (let i = 0; i < term.length; i++) {
  //     const termHeight = term[i].clientHeight;
  //     const descHeight = desc[i].clientHeight;
  //     term[i].innerHTML = '';
  //     desc[i].innerHTML = '';
  //     term[i].style.height = termHeight + 'px';
  //     desc[i].style.height = descHeight + 'px';
  //   }

  //   gsap.registerPlugin(TextPlugin);
  //   const tl = gsap.timeline();

  //   setTimeout(() => {
  //     skillData.map((value, key) => {
  //       const numTerm = value.term.length;
  //       const numDesc = value.desc.length;

  //       tl.to('#skill-term' + key, {
  //         text: {
  //           value: value.term,
  //         },
  //         duration: numTerm * 0.06,
  //         ease: 'none',
  //       }).to('#skill-desc' + key, {
  //         text: {
  //           value: value.desc
  //         },
  //         duration: numDesc * 0.02,
  //         ease: 'none',
  //       });
  //     });
  //   }, 500);
  // });

  return (
    <Body label={label} transparent>
      <PageTitle ref={pageTitle}>{fruitsData[1].image}スキルレベル</PageTitle>

      {skillData.map((category, key) => {
        const data = Object.entries(category.level);
        return (
          <section className={`section ${key === 0 ? '' : '-following'} `} key={key}>
            <SectionTitle id={`section-title${key}`}><span className="title">{category.title}</span></SectionTitle>
            <SkillList>
              {data.map((def, num) => {
                return (
                  <Gauge key={num}>
                    <div className="inner">
                      <p id={`${category.id}${num}`} className="text">{def[0]}</p>
                    </div>
                  </Gauge>
                )
              })}
            </SkillList>
          </section>
        )
      })}
    </Body>
  )
};