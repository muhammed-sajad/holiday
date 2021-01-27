import React from 'react';
import Spot from './../../assets/images/pic.jpg';
import Styled from 'styled-components';

function Spotlight() {
    return(
        <>
            <Section>
                <Image></Image>
                <Div>
                    <Heading>Go Near</Heading>
                    <Explore>Explore nearby stays</Explore>
                </Div>
            </Section>
        </>
    );

}

const Section = Styled.div`
    position: relative;
`
const Image = Styled.div`
    width: 100%;
    height: 700px;
    background: url(${Spot}) no-repeat no-repeat;
    background-size: cover;
`
const Div = Styled.div`
`
const Heading = Styled.h1`
    font-size: 108px;
    width: 15%;
    display:block;
    position: absolute;
    top: 30%;
    left: 3%;
    line-height:0.8em;
    color: #fff;
`
const Explore = Styled.button`
    padding 10px;
    border: 1px solid #fff;
    border-radius: 8px;
    background: #fff;
    font-weight: 600;
    position: absolute;
    top: 67%;
    left: 3.5%;
    color: #000;
`

export default Spotlight;