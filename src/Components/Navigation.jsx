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
.logo{
  @media screen and (max-width: 600px){
                display:none;
            }
}

ul{
  display:flex;
  justify-content:space-between;
  width: 40%;
  @media screen and (max-width: 700px){
                font-size: 85%;
                justify-content:space-between;
            }
}
a{
  @media screen and (max-width: 700px){
                margin-right:15px;
            }
}
`;

export default Navigation;