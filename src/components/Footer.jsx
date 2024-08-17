import styled from 'styled-components'
import {  } from '@material-ui/core';
import { GitHub, Instagram, LinkedIn, Twitter } from '@material-ui/icons';

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
`
const Logo = styled.h1`

`
const Decs = styled.p`

`
const SocialContainer = styled.div`

`
const SocialIcon = styled.div`

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
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <GitHub />
                    </SocialIcon>
                    <SocialIcon>
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