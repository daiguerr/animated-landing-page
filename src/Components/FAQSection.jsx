import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Questions from './Question';
import questions from '../questions';

function FAQSection() {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading">Frequently<span> asked questions</span></h3>
                <p className="c-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quia eligendi omnis unde nisi rerum molestiae numquam officia fugit harum nesciunt id debitis libero repellat quidem, provident incidunt doloremque et!</p>
                <div className="questions-container">
                    {
                    questions.map((q)=>{
                        return <Questions key={q.id} {...q}/>
                    })
                }
                </div>
            </InnerLayout>
        </FaqStyled>
    )
}

const FaqStyled = styled.section`
.c-para{
    width: 60%;
    margin: 0 auto;
}
.questions-container{
    padding-top: 4rem;
}

`;

export default FAQSection