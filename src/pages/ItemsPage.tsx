import React, { useState, useEffect, useRef, createRef } from 'react';
import styled from 'styled-components';
import { color } from '../style/color';
import { font } from '../style/font';
import { breakpoints, mqMax, mqMin } from '../style/mq';
import { Body } from '../components/Body';
import { PageTitle } from '../components/PageTitle';
import { ColorContainer } from '../components/ColorContainer';
import { fruitsData } from '../components/fruitsData';
import { itemsData } from '../components/itemsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import 'swiper/scss';
import "swiper/scss/effect-coverflow";
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Overflow = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
  h3 {
    padding: 1.5em 0;
    line-height: 1.5;
    font-size: 1.25em;
    font-weight: 500;
  }
  .swiper {
    width: 83%;
    overflow: visible;
    ${mqMin(breakpoints.sm)} {
      width: 100%;
    }
  }
  .swiper-wrapper {
    z-index: 100;
  }
  .content {
    position: absolute;
    top: 100%;
    left: 50%;
    z-index: 0;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    transform: translateX(-50%);
  }
  p {
    display: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .page-nav {
    position: absolute;
    top: 50%;
    z-index: 100;
    width: 10%;
    cursor: pointer;
  }
  .page-nav path {
    fill: rgba(255, 255, 255, 0.8);
  }
  .page-nav.-prev {
    left: -14%;
    transform: translateY(-50%) rotate(90deg);
    ${mqMin(breakpoints.sm)} {
      left: 15%;
    }
  }
  .page-nav.-next {
    right: -14%;
    transform: translateY(-50%) rotate(-90deg);
    ${mqMin(breakpoints.sm)} {
      right: 15%;
    }
  }
`;
const Tags = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  ${font.pixel10}
  font-size: 0.75em;
  > li {
    padding: 0.5em 0.8em;
    margin: 0 0.2em;
  }
  > li.-design {
    color: ${color.redCarnation};
    border: 2px solid ${color.redCarnation};
  }
  > li.-coding {
    color: ${color.yellowGrandis};
    border: 2px solid ${color.yellowGrandis};
  }
  > li.-writing {
    color: ${color.greenCelery};
    border: 2px solid ${color.greenCelery};
  }
  > li.-wordpress {
    color: ${color.blueRegent};
    border: 2px solid ${color.blueRegent};
  }
  > li.-other {
    color: ${color.purpleLavender};
    border: 2px solid ${color.purpleLavender};
  }
`;
const Text = styled.p`
  font-weight: 300;
  ${mqMin(breakpoints.sm)} {
    padding-bottom: 120px;
  }
`;

export const ItemsPage = ({ complete } : {complete: boolean}) => {
  const label = 'items';
  const pageTitleRef = useRef<HTMLHeadingElement>(null);
  const prevRef = useRef<SVGSVGElement>(null);
  const nextRef = useRef<SVGSVGElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // setTimeout(() => {
    //   setActiveIndex(0);
    // }, 1);

    // console.log(complete);

    // const tl = gsap.timeline();
    // tl.from('#items-container', {
    //   opacity: 0,
    //   rotate: 0,
    // }).from('#items-container', {
    //   duration: 0.07,
    //   rotation: 15,
    //   repeat: 6,
    //   yoyo: true,
    // }).from('.light', {
    //   opacity: 0.4,
    //   display: 'block'
    // }).fromTo('#items-container', {
    //   width: 20,
    //   height: 20,
    // }, {
    //   width: '100%',
    //   height: '100%',
    //   margin: 0,
    //   delay: -0.2,
    //   ease: "back.in(1)",
    // }).from([pageTitle.current, '.curtain', '.swiper'], {
    //   delay: 0.1,
    //   opacity: 0,
    // });

    // const mql = window.matchMedia(`(min-width: ${breakpoints.sm}px)`);

    // const listener = (e) => {
    //   // リサイズ時に行う処理
    //   if (e.matches) {
    //     console.log('PC用処理');
    //   } else {
    //     console.log('SP用処理');
    //   }
    // };

    // // リスナー登録
    // mql.addEventListener('change', listener);

    // // 初期化処理
    // listener(mql);
  }, []);

  return (
    <Body label={label}>
      <PageTitle ref={pageTitleRef}>{fruitsData[3].image}制作アイテムリスト</PageTitle>
      <ColorContainer page="items" color={color.yellowGamboge} curtain>
        <Overflow>
          <Swiper
            className="swipers"
            modules={[EffectCoverflow, Navigation, Pagination]}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            // onInit={(swiper) => {
            //   swiper.params.navigation.prevEl = prevRef.current;
            //   swiper.params.navigation.nextEl = nextRef.current;
            //   swiper.navigation.init();
            //   swiper.navigation.update();
            // }}
            navigation={{
              prevEl: '.-prev',
              nextEl: '.-next',
            }}
            observeParents={true}
            observer={true}
            centeredSlides={true}
            spaceBetween={160}
            slidesPerView={1}
            loop={true}
            loopedSlides={2}
            // pagination={{ clickable: true, dynamicBullets: true }}
            effect="coverflow"
            coverflowEffect={{
              rotate: -20,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              560: {
                slidesPerView: 2,
              }
            }}
          >
            {itemsData.map((data, key) => {
              return (
                <SwiperSlide key={key} virtualIndex={key}>
                  <a href={data.url} target="_blank" rel="noreferrer">
                    <img src={data.image} alt={data.alt} />
                  </a>
                </SwiperSlide>
              )
            })}
            <svg ref={prevRef} className="page-nav -prev" viewBox="0 0 28.5 28.5" xmlns="http://www.w3.org/2000/svg"><path d="M24.25.25h4v4h-4zM18.25 6.25h4v4h-4zM18.25.25h4v4h-4zM12.25 12.25h4v4h-4zM12.25 6.25h4v4h-4zM12.25.25h4v4h-4zM6.25 6.25h4v4h-4zM6.25.25h4v4h-4zM.25.25h4v4h-4z" /></svg>
            <svg ref={nextRef} className="page-nav -next" viewBox="0 0 28.5 28.5" xmlns="http://www.w3.org/2000/svg"><path d="M24.25.25h4v4h-4zM18.25 6.25h4v4h-4zM18.25.25h4v4h-4zM12.25 12.25h4v4h-4zM12.25 6.25h4v4h-4zM12.25.25h4v4h-4zM6.25 6.25h4v4h-4zM6.25.25h4v4h-4zM.25.25h4v4h-4z" /></svg>
            <div className="content">
              <h3 className="title">{itemsData[activeIndex].title}</h3>
              <Tags>
                {itemsData[activeIndex].tags.map((value, key) => {
                  return (
                    <li className={value.class} key={key}>{value.name}</li>
                  );
                })}
              </Tags>
            </div>
          </Swiper>
        </Overflow>
      </ColorContainer>
      <Text>その他、一部の簡易的な案件や掲載しきれないものなどございます。</Text>
    </Body>
  )
};