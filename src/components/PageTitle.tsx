import styled from 'styled-components';
import { color } from '../style/color';
import { breakpoints, mqMin } from '../style/mq';
import { vwRange } from '../style/vw';
import { font } from '../style/font';

export const PageTitle = styled.h2`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  padding: 1em 2vw;
  border-radius: 20px;
  ${font.pixel10}
  ${vwRange('font-size', 20, 36, breakpoints.xs, breakpoints.md)}
  background: ${color.grayNero};
  transform: translateY(-50%);
  ${mqMin(breakpoints.md)} {
    width: auto;
    padding: 1em 1.2em;
    border-radius: 40px;
    font-size: 2em;
  }
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    border: 4px solid #fff;
  }
  > img {
    margin-right: 0.5em;
    ${vwRange('width', 36, 72, breakpoints.xs, breakpoints.md)}
    ${mqMin(breakpoints.md)} {
      width: 72px;
    }
  }
`;