import React from 'react';
import styled, { css } from 'styled-components';
import { color } from '../style/color';
import { font } from '../style/font';
import { vw } from '../style/vw';
import { breakpoints, mqMin } from '../style/mq';

export const Body = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 100%;
  position: relative;

  ${(props) => props.white ? css`
    padding: 40px 4vw;
    border-radius: 40px;
    color: ${color.black};
    background: #fff;
    ${mqMin(breakpoints.sm)} {
      padding: 40px;
    }
    ${mqMin(breakpoints.md)} {
      flex: 0 1 calc(100% - 320px);
      padding: 80px;
    }
  ` : css`
    background: inherit;
  ` };
  
  ${mqMin(breakpoints.md)} {
    flex: 0 1 calc(100% - 320px);
  }
`;