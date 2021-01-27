import { React, useState } from 'react';
import Styled from 'styled-components';
import Img from './../../assets/images/11.webp';
import Imge from './../../assets/images/small.jpeg';

function Last() {
    const [value,setValues] = useState(
        [
            {
                image: Img,
                heading: "Entire homes",
            },
            {
                image: Imge,
                heading: "Cabins and cottages",
            },  
            {
                image: Img,
                heading: "Unique stays",
            },
            {
                image: Imge,
                heading: "Pets welcome",
            }

        ]
    )
    return(
        <Container>
            <Heading>Live anywhere</Heading>
            <Division>
            {value.map((data)=> (
                <Box>
                    <Image src={data.image} />
                    <Head>{data.heading}</Head>
                </Box>
            ))}
            </Division>
        </Container>
    );
}

const Container = Styled.section`
    width: 90%;
    margin: 0 auto;
    margin-top: 80px;
`
const Heading = Styled.h1`

`
const Division = Styled.div`
    display: flex;
    justify-content: space-between;
`
const Box = Styled.div`
    width: 23%;
`
const Image = Styled.img`
    width: 100%;
    height: 350px;
    border-radius: 8px;
`
const Head = Styled.h3`

`
export default Last;