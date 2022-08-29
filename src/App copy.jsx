import React from 'react';
import styled, { css, createGlobalStyle  } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar.jsx';
import { Footer } from './components/Footer.jsx';
import { TopPage } from './components/TopPage.jsx';
import { ProfilePage } from './components/ProfilePage.jsx';
import { SkillPage } from './components/SkillPage.jsx';
import { ServicePage } from './components/ServicePage.jsx';
import { ItemsPage } from './components/ItemsPage.jsx';
import { ContactPage } from './components/ContactPage.jsx';

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1280px;
`;

export const App = () => {
  return (
    <Router>
      <Body>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/skill" element={<SkillPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Body>
    </Router>
  );
}