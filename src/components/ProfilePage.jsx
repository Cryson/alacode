import React from 'react';
import styled from 'styled-components';
import { breakpoints, mqMin, mqRange } from '../style/mq';
import { color } from '../style/color';
import { font } from '../style/font';
import { fruitsData } from './fruitsData';
import { Body } from './Body';
import { WhiteTitle } from './WhiteTitle';
import { WhiteBody } from './WhiteBody';
import avatar from '../images/avatar.svg';

const AvatarCircle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  width: 200px;
  height: 200px;
  border: 4px solid ${color.black};
  border-radius: 50%;
  background: ${color.grayAlto};
  overflow: hidden;
  > img {
    width: 85%;
  }
`;
const ProfileStatus = styled.dl`
  display: inline-flex;
  align-content: center;
  flex-wrap: wrap;
  flex: 1 1 100%;
  padding-top: 20px;
  line-height: 1.5;
  font-size: 1.5em;
  ${font.pixel10}
  ${mqMin(breakpoints.sm)} {
    flex: 0 1 calc(100% - 200px);
    padding-left: 5%;
  }
  ${mqRange(breakpoints.md, breakpoints.lg)} {
    flex: 1 1 100%;
    padding-left: 0;
  }
  > dt, > dd {
    padding: 0.4em 0.2em;
  }
  > dt {
    flex: 0 1 150px;
  }
  > dd {
    flex: 0 1 calc(100% - 150px);
  }
`

export const ProfilePage = () => {
  return (
    <Body white>
      <WhiteTitle>
        {fruitsData[0].image}
        <span className="title">TESY</span>
        <span className="subtitle">Webデザイナー /<div>エンジニア</div></span>
      </WhiteTitle>
      <WhiteBody>
        <AvatarCircle><img src={avatar} alt="ドット似顔絵" /></AvatarCircle>
        <ProfileStatus>
          <dt>たいりょく:</dt><dd>100 / 100</dd>
          <dt>そうび1:</dt><dd>MacBook Pro M1</dd>
          <dt>そうび2:</dt><dd>Windows</dd>
        </ProfileStatus>
        <div className="texts">
          <p>フリーランスのWebデザイナー・コーダー・フロントエンジニア。</p>
          <p>数年前、独学でコーディングやWP周りを学び、Web制作会社にコーダーとして入社。<br />
            …のはずが会社にデザイン力を買われ、次第にWebデザインにも注力していく様になる。</p>
          <p>2年近く勤務した後、フリーランスとして独立。<br />
            受託案件をこなしたり、メンターとして初学者の方々にスキルを教授したりして過ごす。<br />
            今ではすっかりフロント技術の虜で、JSを中心に勤勉し精進中。</p>
          <p>趣味はギター・ドラム・水泳・ランニング・筋トレ・絵描き・ドライブ・ツーリング・ビリヤード・ゲーム・読書など。両利き。</p>
          <p>サイト名の「alacode」は、フランス語の「à la mode(流行、現代風の)」と「code(コード)」を合わせた造語。</p>
        </div>
      </WhiteBody>
    </Body>
  )
};