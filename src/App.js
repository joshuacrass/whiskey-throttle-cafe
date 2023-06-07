import React, { useEffect } from 'react';
import styled from 'styled-components';
import WebFont from 'webfontloader';

import './App.css';
import Header from './components/Header';

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #000;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const Subtitle = styled.h2`
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  color: #855b32;
  margin-bottom: 32px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
  padding: 16px;
  width: 100%;
`;

const ContactEmail = styled.a`
  color: #f5e7d8;
  text-decoration: none;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
`;

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Rye:400', 'Oldenburg:400'],
      },
    });
  }, []);

  return (
    <Wrapper classname='App'>
      <Header />
      <Content>
        <img
          src='/images/whiskeythrottlecafe.png'
          alt='Cafe'
          width={800}
          height={600}
        />
        <Subtitle>Comming Soon!</Subtitle>
      </Content>
      <Footer>
        <ContactEmail href='mailto:info@whiskeythrottlecafe.com'>
          info@whiskeythrottlecafe.com
        </ContactEmail>
      </Footer>
    </Wrapper>
  );
};

export default App;
