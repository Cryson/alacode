import React, { useRef } from 'react';
import styled from 'styled-components';
import { color } from '../style/color';
import { breakpoints, mqMin, mqMax, mqRange } from '../style/mq';
import { font } from '../style/font';
import { fruitsData } from 'data/fruitsData';
import { Body } from '../components/Body';
import { PageTitle } from '../components/PageTitle';
import { SectionTitle } from '../components/SectionTitle';
import avatarSmall from '../images/avatar-small.svg';

export const ProfilePage = () => {
  const label = 'profile';
  const pageTitleRef = useRef<HTMLHeadingElement>(null);

  return (
    <Body label={label} transparent>
      <PageTitle ref={pageTitleRef}>
        {fruitsData[0].image}プロフィール
      </PageTitle>
      <section className="section">
        <SectionTitle>
          <span className="title">テシャ</span>
          <span className="subtitle">
            Webデザイナー /<div>エンジニア</div>
          </span>
        </SectionTitle>
        <ProfileHeader>
          <AvatarCircle>
            <img src={avatarSmall} alt="8bit アバター" />
          </AvatarCircle>
          <ProfileStatus>
            <dt>たいりょく:</dt>
            <dd>100 / 100</dd>
            <dt>そうび1:</dt>
            <dd>MacBook Pro M1</dd>
            <dt>そうび2:</dt>
            <dd>Windows</dd>
          </ProfileStatus>
        </ProfileHeader>
        <p>Webデザイナー・コーダー・フロントエンジニア。</p>
        <p>
          数年前、独学でコーディングやWP周りを学び、Web制作会社にコーダーとして入社。
          <br />
          …のはずが会社にデザイン力を買われ、次第にWebデザインにも注力していく様になる。
        </p>
        <p>
          2年近く勤務した後、フリーランスとして独立。
          <br />
          受託案件をこなしたり、メンターとして初学者の方々にスキルを教授したりして過ごす。
          <br />
          今ではすっかりプログラミングの虜で、暇さえあればJSを中心に勤勉中。
        </p>
        <p>
          趣味はドライブ・ツーリング・水泳・ランニング・ギター・ドラム・絵描き・ゲーム・資格勉強・読書など。両利き。
        </p>
        <p>
          サイト名の「alacode」は、フランス語の「à la
          mode(流行、現代風の)」と「code(コード)」を合わせた造語。
        </p>
      </section>
    </Body>
  );
};

const ProfileHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 80px auto;
`;
const AvatarCircle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border: 4px solid #fff;
  border-radius: 50%;
  background: linear-gradient(
    180deg,
    ${color.redPomegranate} 64%,
    ${color.yellowCorn}
  );
  overflow: hidden;
  > img {
    width: 70%;
    margin-bottom: -15px;
  }
`;
const ProfileStatus = styled.dl`
  display: inline-flex;
  align-content: center;
  flex-wrap: wrap;
  flex: 1 1 100%;
  margin-top: 40px;
  line-height: 1.5;
  font-size: 1.5em;
  ${font.pixel10}
  ${mqMin(breakpoints.sm)} {
    flex: 1;
    padding-left: 5%;
    margin-top: 0;
  }
  > dt,
  > dd {
    padding: 0.4em 0.2em;
  }
  > dt {
    flex-basis: 145px;
  }
  > dd {
    flex: 1 0 calc(100% - 145px);
  }
`;
