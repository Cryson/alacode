import styled, { css } from 'styled-components';
import { breakpoints, mqMin } from '../style/mq';
import { color } from '../style/color';
import { font } from '../style/font'

export const WhiteTitle = styled.h2`
  display: flex;
  align-items: flex-end;
  width: 100%;
  border-bottom: 4px solid ${color.black};
  line-height: 1;
  ${font.pixel10}

  ${(props) => props.jp ? css`
    > .title {
      padding-bottom: 0.15em;
      font-size: 2.5em;
      ${mqMin(breakpoints.md)} {
        font-size: 3.25em;
      }
    }
  ` : css`
    > .title {
      font-size: 3em;
      ${mqMin(breakpoints.md)} {
        font-size: 4em;
      }
    }
  `}
  
  > img {
    width: 3em;
    padding-bottom: 4px;
    ${mqMin(breakpoints.md)} {
      width: 4.5em;
    }
  }
  > .title {
    margin: 0 auto 0 0.2em;
  }
  > .subtitle {
    margin-left: auto;
    font-size: 1em;
    line-height: 1.5;
    ${mqMin(breakpoints.md)} {
      font-size: 1.25em;
    }
  }
`;