import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { LoadingContext } from './Context';
import { MessageBox } from './MessageBox';
import { breakpoints, mqMin } from '../style/mq';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 100%;
  position: relative;

  ${({transparent}) => transparent ? css`
    /* padding: 120px 4vw 40px; */
    border-radius: 40px;
    color: #fff;
    ${mqMin(breakpoints.sm)} {
      /* padding: 120px 40px 40px; */
    }
    ${mqMin(breakpoints.md)} {
      flex: 0 1 calc(100% - 320px);
      /* padding: 120px 80px 80px; */
    }
  ` : css`
    background: inherit;
  ` };
  
  ${mqMin(breakpoints.md)} {
    flex: 0 1 calc(100% - 320px);
  }

  &::before {
    ${({transparent}) => transparent ? css`
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    border: 4px solid #fff;
    box-sizing: content-box;
    ` : css`
    display: none;
    `}
  }
  .section {
    width: 100%;
    ${({transparent}) => transparent && css`
    padding: 120px 4vw 80px;
    ${mqMin(breakpoints.sm)} {
      padding: 120px 40px 80px;
    }
    ${mqMin(breakpoints.md)} {
      padding: 120px 80px;
    }
  `};
  }
  .section.-following {
    padding-top: 0;
  }
  .section > p {
    flex: 1 1 100%;
    margin-bottom: 1em;
    line-height: 2;
    font-weight: 300;
    ${mqMin(breakpoints.md)} {
      padding: 0 20px;
    }
  }
`;

export const Body = ({ children, label, transparent }) => {
  const loadingFinish = useContext(LoadingContext);
  
  return (
    <Wrapper transparent={transparent}>
      {children}
      {loadingFinish && <MessageBox label={label} />}
    </Wrapper>
  )
};