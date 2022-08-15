import React from 'react';
import styled from 'styled-components';
import { breakpoints, mqMin, mqMax, mqRange } from '../style/mq';
import { font } from '../style/font';
import { Body } from '../components/Body';

const Title = styled.h2`
  margin: 120px auto 80px;
  line-height: 2.2;
  font-size: 2em;
  ${font.pixel10}
  text-align: center;
  ${mqMin(breakpoints.sm)} {
    margin: 120px auto;
    font-size: 3em;
  }
`;

export const ErrorPage = () => {
  const label = 'error';
  return (
    <Body label={label}><Title>404 Error</Title></Body>
  )
};