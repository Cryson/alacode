import { css } from 'styled-components';

export const fontFace = css`
  @font-face {
    font-family: 'PixelMplus10';
    font-style: normal;
    font-weight: 400;
    src:
      local();
  }
  @font-face {
    font-family: 'PixelMplus10';
    font-style: normal;
    font-weight: 700;
    src:
      local();
  }
  @font-face {
    font-family: 'Zen Kaku Gothic Antique';
    font-style: normal;
    font-weight: 300;
    src:
      local();
  }
  @font-face {
    font-family: 'Zen Kaku Gothic Antique';
    font-style: normal;
    font-weight: 400;
    src:
      local();
  }
  @font-face {
    font-family: 'Zen Kaku Gothic Antique';
    font-style: normal;
    font-weight: 500;
    src:
      local();
  }
  @font-face {
    font-family: 'Zen Kaku Gothic Antique';
    font-style: normal;
    font-weight: 700;
    src:
      local();
  }
  @font-face {
    font-family: 'Zen Kaku Gothic Antique';
    font-style: normal;
    font-weight: 900;
    src:
      local();
  }
`;

export const font = {
  antique: `font-family: 'Zen Kaku Gothic Antique', 'Yu Gothic Medium', '游ゴシック Medium', 'YuGothic', '游ゴシック体', 'メイリオ', 'Meiryo', sans-serif;`,
  pixel10: `font-family: 'PixelMplus10', 'Yu Gothic Medium', '游ゴシック Medium', 'YuGothic', '游ゴシック体', 'メイリオ', 'Meiryo', sans-serif;`,
};