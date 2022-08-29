import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterContainer>
      <p><small>Copylight (c) 2022 alacode All Rights Reserved.</small></p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  flex: 1 1 100%;
  max-width: 960px;
  margin-top: 80px;
  text-align: center;
  letter-spacing: 0.08em;
`;