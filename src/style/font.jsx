import { css } from 'styled-components';
import p10400woff2 from '../fonts/PixelMplus10-Regular.woff2';
import p10400woff from '../fonts/PixelMplus10-Regular.woff';
import p10400ttf from '../fonts/PixelMplus10-Regular.ttf';
import p10700woff2 from '../fonts/PixelMplus10-Bold.woff2';
import p10700woff from '../fonts/PixelMplus10-Bold.woff';
import p10700ttf from '../fonts/PixelMplus10-Bold.ttf';
import ant300woff2 from '../fonts/ZenKakuGothicAntique-Light.woff2';
import ant300woff from '../fonts/ZenKakuGothicAntique-Light.woff';
import ant300ttf from '../fonts/ZenKakuGothicAntique-Light.ttf';
import ant400woff2 from '../fonts/ZenKakuGothicAntique-Regular.woff2';
import ant400woff from '../fonts/ZenKakuGothicAntique-Regular.woff';
import ant400ttf from '../fonts/ZenKakuGothicAntique-Regular.ttf';
import ant500woff2 from '../fonts/ZenKakuGothicAntique-Medium.woff2';
import ant500woff from '../fonts/ZenKakuGothicAntique-Medium.woff';
import ant500ttf from '../fonts/ZenKakuGothicAntique-Medium.ttf';
import ant700woff2 from '../fonts/ZenKakuGothicAntique-Bold.woff2';
import ant700woff from '../fonts/ZenKakuGothicAntique-Bold.woff';
import ant700ttf from '../fonts/ZenKakuGothicAntique-Bold.ttf';
import ant900woff2 from '../fonts/ZenKakuGothicAntique-Black.woff2';
import ant900woff from '../fonts/ZenKakuGothicAntique-Black.woff';
import ant900ttf from '../fonts/ZenKakuGothicAntique-Black.ttf';

export const fontFace = css`
  @font-face {
    font-family: 'PixelMplus10';
    font-style: normal;
    font-weight: 400;
    src: local(),
      url(${p10400woff2}) format('woff2'),
      url(${p10400woff}) format('woff'),
      url(${p10400ttf}) format('ttf');
  }
  @font-face {
    font-family: 'PixelMplus10';
    font-style: normal;
    font-weight: 700;
    src: localc(),
      url(${p10700woff2}) format('woff2'),
      url(${p10700woff}) format('woff'),
      url(${p10700ttf}) format('ttf');
  }
  @font-face {
    font-family: 'Zen Kaku Gothic Antique';
    font-style: normal;
    font-weight: 300;
    src: local(),
      url(${ant300woff2}) format('woff2'),
      url(${ant300woff}) format('woff'),
      url(${ant300ttf}) format('ttf');
  }
  @font-face {
    font-family: 'Zen Kaku Gothic Antique';
    font-style: normal;
    font-weight: 400;
    src: local(),
      url(${ant400woff2}) format('woff2'),
      url(${ant400woff}) format('woff'),
      url(${ant400ttf}) format('ttf');
  }
  @font-face {
    font-family: 'Zen Kaku Gothic Antique';
    font-style: normal;
    font-weight: 500;
    src: local(),
      url(${ant500woff2}) format('woff2'),
      url(${ant500woff}) format('woff'),
      url(${ant500ttf}) format('ttf');
  }
  @font-face {
    font-family: 'Zen Kaku Gothic Antique';
    font-style: normal;
    font-weight: 700;
    src: local(),
      url(${ant700woff2}) format('woff2'),
      url(${ant700woff}) format('woff'),
      url(${ant700ttf}) format('ttf');
  }
  @font-face {
    font-family: 'Zen Kaku Gothic Antique';
    font-style: normal;
    font-weight: 900;
    src: local(),
      url(${ant900woff2}) format('woff2'),
      url(${ant900woff}) format('woff'),
      url(${ant900ttf}) format('ttf');
  }
`;

export const font = {
  antique: `font-family: 'Zen Kaku Gothic Antique', 'Yu Gothic Medium', '游ゴシック Medium', 'YuGothic', '游ゴシック体', 'メイリオ', 'Meiryo', sans-serif;`,
  pixel10: `font-family: 'PixelMplus10', 'Yu Gothic Medium', '游ゴシック Medium', 'YuGothic', '游ゴシック体', 'メイリオ', 'Meiryo', sans-serif;`,
};