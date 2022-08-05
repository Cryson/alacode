import styled, { css } from 'styled-components';
import { breakpoints, mqMin } from '../style/mq';
import { color } from '../style/color';
import { font } from '../style/font'

export const SectionTitle = styled.h3`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 40px;
  border-bottom: 4px solid #fff;
  line-height: 1;
  ${font.pixel10}
  > .title {
    padding: 0 0.15em 0.15em;
    margin-right: auto;
    line-height: 1.5;
    font-size: 2em;
    ${mqMin(breakpoints.md)} {
      font-size: 3.25em;
    }
  }
  > img {
    width: 3em;
    padding-bottom: 4px;
    ${mqMin(breakpoints.md)} {
      width: 4.5em;
    }
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