import React, { useState } from 'react'
import Styled from 'styled-components'

function First() {
    let count = 0;
    const [num,setNum] = useState(count)
    return (
        <div>
            <Div>{num}</Div>
            <Divi> 
                <Button onClick={() => setNum((prevState) => prevState -1)}>-</Button>
                <Button onClick={() => setNum(count)}>Reset</Button>
                <Button onClick={() => setNum((prevState) => prevState + 1)}>+</Button>
            </Divi>
        </div>
    );
}
const Div = Styled.div`
    padding: 5px 2px;
    background: red;
    border-radius: 8px;
    font-size: 32px;
    color: #fff;
    width: 7.5%;
    margin: 0 auto;
    margin-top: 40px;
    text-align: center;
`
const Divi = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin: 0 auto;
`
const Button = Styled.button`
padding: 5px 20px;
background: #363945;
border-radius: 8px;
font-size: 32px;
color: #fff;
border: 1px solid #363945;
margin: 20px;
width: 70%;
`

export default First;