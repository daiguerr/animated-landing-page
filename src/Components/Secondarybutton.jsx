import React from 'react';
import styled from 'styled-components';
import arrow from '../img/arrow.svg'

function Secondarybutton({name}) {
    return (
        <SecondaryButtonStyled>
            {name}
            <img src={arrow} alt=''/>
        </SecondaryButtonStyled>
    )
}
const SecondaryButtonStyled = styled.button`
background-color: var(--dark-primary);
padding: .7rem 2rem;
font-family:inherit;
font-size:inherit;
color:inherit;
border-radius: 20px;
outline:none;
border:none;
cursor:pointer;
display:flex;
align-items:center;
justify-content: space-between;
img{
    padding-left: .8rem;
}
@media screen and (max-width: 700px){
                font-size:85%;
            }
`;

export default Secondarybutton