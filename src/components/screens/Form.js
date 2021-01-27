import React from 'react';
import Styled from 'styled-components';

function Form(){
    return(
        <Div>
            <Fom>
                <Divi>
                    <Input type="text" placeholder="Username"/>
                    <Input type="password" placeholder="Password"/>
                    <Button>log in</Button>
                    <Button>create</Button>
                </Divi>
            </Fom>
        </Div>
    );
}
const Div = Styled.div`
    background: #f8f8f8;
    width: 100%;
    margin: 0 auto;
    padding: 60px 0;
    margin-top: 140px;
`
const Fom = Styled.form`
    width:90%;
    display: flex;
    justify-content: center;
    margin: 0 auto; 
`
const Divi = Styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #f5f5f5;
    border-radius: 4px;
    box-shadow: 4px 1px 10px 2px rgba(0,0,0,0.1);
    padding: 10px;
`
const Input = Styled.input`
    margin-bottom: 20px;
    padding: 10px 20px;
    border-radius: 4px;
    border:2px solid #eef2d2;
`
const Button = Styled.button`
    padding: 8px 12px;
    background: #ffc74e;
    border:1px solid #ffc74e;
    border-radius: 8px;
    width: 60%;
    margin: 0 auto;
    margin-bottom:10px;
    color: #000;
`


export default Form;