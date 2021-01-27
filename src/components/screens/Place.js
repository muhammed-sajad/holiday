import { React, useState } from "react"; 
import Styled from 'styled-components';
import home from './../../assets/images/back.jpg';
import see from './../../assets/images/spt.jpg';


function Place() {
    const [value,setValues] = useState([
        {
            name:'Gokarna',
            time:'6 hours',
            image: see,
        },
        {
            name:'Ooty',
            time:'5 hours',
            image: home,
        },
        {
            name:'Kodaikanal',
            time:'3 hours',
            image: see,
        },
        {
            name:'Kalpetta',
            time:'4 hours',
            image: home,
        },
        {
            name:'Munnar',
            time:'6 hours',
            image: see,
        },
        {
            name:'Chennai',
            time:'7 hours',
            image: home,
        },
        {
            name:'Gavi',
            time:'9 hours',
            image: see,
        },
        {
            name:'Varkala',
            time:'8 hours',
            image: home,
        }
        ])

    return(
            <Container>
                {value.map((data)=>( 
                <Card>
                    <Image src={data.image} />
                    <Line>
                        <Head>{data.name}</Head>
                        <Para>{data.time}</Para>
                    </Line>
                </Card>  
                ))}  
            </Container>
    );
    }

const Container = Styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    margin-bottom:120px;
`
const Card = Styled.div`
    width: 24%;
    display: flex;
    margin-top: 40px;
    background: #f5f5f5;
`
const Image = Styled.img`
    height: 100px;
    width: 100px;
    border-radius: 8px;
    margin-right: 10px;

`
const Line = Styled.div`

`
const Head = Styled.h3`
 
`
const Para = Styled.p`
 
`

export default Place;