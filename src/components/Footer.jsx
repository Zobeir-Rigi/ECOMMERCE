import styled from 'styled-components'
import {  } from '@material-ui/core';
import { GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons';

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Decs = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color:white ;
    background-color: #${props=>props.color} ;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
        flex: 1;

`
const Right = styled.div`
        flex: 1;

`


const Footer = () =>{
    return(
        <Container>
            <Left>
                <Logo>ICDI.</Logo>
                <Decs>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo alias vel impedit aliquam repellat ad quidem quas saepe eos minima atque, expedita officia quos rerum ut nihil adipisci qui iure.
                </Decs>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <GitHub />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <LinkedIn />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    )
}
export default Footer;