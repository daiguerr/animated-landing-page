import React from 'react';
import styled from 'styled-components';
import Secondarybutton from './Secondarybutton';
import phone from '../img/phone.svg';
import ring1 from '../img/ring_orange.svg';
import message1 from '../img/message_pink.svg';
import message2 from '../img/message_blue.svg'

function HeaderContent() {
    return (
        <HeaderContentStyled>
            <div className="left-content">
                <div className="left-text-container">
                    <h1>Smart banking for freelancers</h1>
                    <p className='white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus officiis necessitatibus provident optio commodi consequuntur aut quasi tempore reprehenderit debitis vitae modi aspernatur, vero eveniet nam numquam facere repellendus.</p>
                    <Secondarybutton name={'Register Now'} />
                </div>
            </div>
            <div className="right-content">
                <img src={phone} alt="" className='phone'/>
                <img src={ring1} alt="" className='ring1'/>
                <img src={message1} alt="" className="message1" />
                <img src={message2} alt="" className="message2" />
            </div>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
display:grid;
grid-template-columns: repeat(2,1fr);
padding-top:3rem;
@media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
.left-content{
display:flex;
align-items:center;
padding-right: 4rem;
@media screen and (max-width: 700px){
                text-align: center;
                margin: 0 0 10px 30px;
            }
}
h1{
    font-size:4rem;
    font-weight: 600;
    @media screen and (max-width: 700px){
                font-size: 2rem;
            }
}
.white{
    color:white;
    padding: 1.4rem 0;
    line-height: 1.8rem;
    @media screen and (max-width: 700px){
                font-size: 1rem;
            }
}
.right-content{
    position: relative; 
    display:flex;
    justify-content:center;
}
.phone{
    width:80%;
}
.ring1{
    position:absolute;
    bottom: 20%;
    right:0;
    left: auto;
    @media screen and (max-width: 700px){
                width: 20%;
            }
}
.message1{
    position:absolute;
    top: 0;
    right:0;
    left: auto;
    @media screen and (max-width: 700px){
                width: 20%;
            }
}
.message2{
    position:absolute;
    bottom: 15%;
    left:0;
    @media screen and (max-width: 700px){
                width: 20%;
            }
}
`;
export default HeaderContent