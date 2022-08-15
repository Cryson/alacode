import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { LoadingContext } from './components/Context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { breakpoints, mqMax } from './style/mq';
import { Sidebar } from './components/Sidebar.jsx';
import { Footer } from './components/Footer.jsx';
import { LoadingCube } from './components/LoadingCube';
import { ScrollToTop } from './components/ScrollToTop';
import { TopPage } from './pages/TopPage';
import { ProfilePage } from './pages/ProfilePage';
import { SkillPage } from './pages/SkillPage';
import { ServicePage } from './pages/ServicePage';
import { ItemsPage } from './pages/ItemsPage';
import { ContactPage } from './pages/ContactPage';
import { ErrorPage } from './pages/ErrorPage';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1280px;
  background: inherit;
`;
const MouseStalker = styled.div`
  width: 0;
  height: 0;
  ${mqMax(breakpoints.sm)} {
    display: none;
  }
  #mouse-stalker {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 40px;
    height: 40px;
    margin: -20px 0 0 -20px;
    pointer-events: none;
    fill: rgba(255, 255, 255, 0.4);
  }
`;

export const App: React.FC = () => {
  const mouseRef = useRef<SVGSVGElement>(null);
  const [complete, setComplete] = useState(false);
  const [hoge, setHoge] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setComplete(true);
    }, 800);

    document.addEventListener('mousemove', (e) => {
      gsap.to(mouseRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35
      });
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <MouseStalker>
        <svg id="mouse-stalker" ref={mouseRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.5 80.5"><g id="grid"><path className="cls-1" d="M70.25 50.25h10v10h-10zM70.25 40.25h10v10h-10zM70.25 30.25h10v10h-10zM70.25 20.25h10v10h-10zM60.25 60.25h10v10h-10zM60.25 50.25h10v10h-10zM60.25 40.25h10v10h-10zM60.25 30.25h10v10h-10zM60.25 20.25h10v10h-10zM60.25 10.25h10v10h-10zM50.25 70.25h10v10h-10zM50.25 60.25h10v10h-10zM50.25 50.25h10v10h-10zM50.25 40.25h10v10h-10zM50.25 30.25h10v10h-10zM50.25 20.25h10v10h-10zM50.25 10.25h10v10h-10zM50.25.25h10v10h-10zM40.25 70.25h10v10h-10zM40.25 60.25h10v10h-10zM40.25 50.25h10v10h-10zM40.25 40.25h10v10h-10zM40.25 30.25h10v10h-10zM40.25 20.25h10v10h-10zM40.25 10.25h10v10h-10zM40.25.25h10v10h-10zM30.25 70.25h10v10h-10zM30.25 60.25h10v10h-10zM30.25 50.25h10v10h-10zM30.25 40.25h10v10h-10zM30.25 30.25h10v10h-10zM30.25 20.25h10v10h-10zM30.25 10.25h10v10h-10zM30.25.25h10v10h-10zM20.25 70.25h10v10h-10zM20.25 60.25h10v10h-10zM20.25 50.25h10v10h-10zM20.25 40.25h10v10h-10zM20.25 30.25h10v10h-10zM20.25 20.25h10v10h-10zM20.25 10.25h10v10h-10zM20.25.25h10v10h-10zM10.25 60.25h10v10h-10zM10.25 50.25h10v10h-10zM10.25 40.25h10v10h-10zM10.25 30.25h10v10h-10zM10.25 20.25h10v10h-10zM10.25 10.25h10v10h-10zM.25 50.25h10v10h-10zM.25 40.25h10v10h-10zM.25 30.25h10v10h-10zM.25 20.25h10v10h-10z" /></g></svg>
      </MouseStalker>
      <LoadingContext.Provider value={hoge}>
        <Wrapper>
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/skill" element={<SkillPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/items" element={<ItemsPage complete={complete} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Sidebar />
          <Footer />
        </Wrapper>
      </LoadingContext.Provider>
      <LoadingCube complete={complete} setHoge={setHoge} />
    </Router>
  );
}