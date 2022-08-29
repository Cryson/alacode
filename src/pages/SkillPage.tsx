import React, { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { color } from '../style/color';
import { font } from '../style/font';
import { fruitsData } from 'data/fruitsData';
import { Body } from '../components/Body';
import { PageTitle } from '../components/PageTitle';
import { SectionTitle } from '../components/SectionTitle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { breakpoints, mqMin } from '../style/mq';
import data from '../data/data.json';

export const SkillPage = () => {
  const label = 'skill';

  const skillData = data.skillData;

  const pageTitleRef = useRef<HTMLHeadingElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    skillData.map((category, key) => {
      const data = Object.entries(category.level);
      data.map((def, num) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: `#${category.id}${num}`, // 要素".b"がビューポートに入ったときにアニメーション開始
              start: 'top 85%', // アニメーション開始位置
              end: 'top 50%', // アニメーション終了位置
              scrub: true, // アニメーションをスクロール位置にリンクさせる
            },
          })
          .to(`#${category.id}${num}`, {
            width: `${def[1]}%`,
          });
      });
    });
  });

  return (
    <Body label={label} transparent>
      <PageTitle ref={pageTitleRef}>
        {fruitsData[1].image}スキルレベル
      </PageTitle>

      {skillData.map((category, key) => {
        const data = Object.entries(category.level);
        return (
          <section
            className={`section ${key === 0 ? '' : '-following'} `}
            key={key}
          >
            <SectionTitle id={`section-title${key}`}>
              <span className="title">{category.title}</span>
            </SectionTitle>
            <SkillList>
              {data.map((def, num) => {
                return (
                  <Gauge key={num}>
                    <div className="inner">
                      <p id={`${category.id}${num}`} className="text">
                        {def[0]}
                      </p>
                    </div>
                  </Gauge>
                );
              })}
            </SkillList>
          </section>
        );
      })}
    </Body>
  );
};

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
  &::before,
  &::after {
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
    background: linear-gradient(0deg, #d3cce3, #fff 25%);
    overflow: hidden;
  }
  .text {
    width: 0%;
    height: 100%;
    padding: 4px;
    white-space: nowrap;
    background: linear-gradient(
      0deg,
      ${color.yellowEquator},
      ${color.yellowCorn}
    );
  }
`;
