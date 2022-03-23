import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg';

function Navigation() {
  let url="";
  return (
    <NavigationStyled>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <ul>
        <li><a href={url}>Home</a></li>
        <li><a href={url}>Features</a></li>
        <li><a href={url}>Pricing</a></li>
      </ul>
      <PrimaryButton name={'Sign Up'} />
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
min-height: 10vh;
align-items: center;

ul{
  display:flex;
  justify-content:space-between;
  width: 40%;
}
`;

export default Navigation;