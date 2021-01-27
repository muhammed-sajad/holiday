import React from 'react';
import Logo from '../../assets/images/cancel.png';
import Styled from 'styled-components';
import './Header.css';

function Header () {
    return(
        <Head>
            <div className="left">
                <a href="#">
                    <Image src={Logo} alt="logo" />
                </a>
            </div>
            <div className="middle">
                <form>
                    <Input type="text" placeholder="Start You Search"/>
                    <Go>Go</Go>
                </form>
            </div>
            <div className="right">
                <Start>Get Start</Start>
            </div>
        </Head>
    );
}
const Head = Styled.header`
    padding: 30px 20px;
    display: flex;
    justify-content:space-between;
    align-items:center;
`
const Image = Styled.img`
    width:50px;
`
const Input = Styled.input`
    width: 250px;
    border: 1px solid #777;
    border-radius: 50px;
    padding: 15px;
`
const Go = Styled.button`
    padding: 15px;
    background: #20232a;
    border: 1px solid #20232a;
    border-radius: 50px;
    color: #61dafb;
    margin-left: -40px;
`
const Start = Styled(Go)`
    padding: 15px 25px;
    color: #61dafb;
`

export default Header;