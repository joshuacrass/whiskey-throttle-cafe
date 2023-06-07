import React from 'react';
import styled from 'styled-components';

// Styles
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e1e;
  padding: 16px;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #f5e7d8;
  font-family: 'Oldenburg', sans-serif;
  font-size: 16px;
  span {
    padding-left: 20px;
  }
`;

const LoginLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-family: 'Oldenburg', sans-serif;
  font-size: 16px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src='/images/WTC_Logo.png' alt='Cafe' width={50} height={50} />
        <span>Whiskey Throttle Cafe</span>
      </Logo>
      <LoginLink href='/login'>Login</LoginLink>
    </HeaderContainer>
  );
};

export default Header;
