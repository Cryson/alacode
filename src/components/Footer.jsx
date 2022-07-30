import React from 'react';
import styled, { css } from 'styled-components';
import { size, mqMin, mqMax, mqRange } from '../style/mq';
import { color } from '../style/color';
import { vwChange, vwRange } from '../style/vw';
import { font } from '../style/font';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  flex: 1 1 100%;
  max-width: 960px;
  margin-top: 80px;
  text-align: center;
  letter-spacing: 0.08em;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <p><small>Copylight (c) 2022 alacode All Rights Reserved.</small></p>
    </FooterContainer>
  );
}