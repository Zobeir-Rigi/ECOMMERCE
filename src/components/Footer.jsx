import styled from 'styled-components'
import {  } from '@material-ui/core';
import { GitHub, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
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
        padding: 20px;
        ${mobile({ display: "none" })}
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
        flex: 1;
        padding: 20px;
        ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


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
            <Center>
            <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
            </Center>
            <Right>
            <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 14 Bedford Row, WC1R 4ED
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +44 7399058028
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> rigi.zobir@yahoo.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}
export default Footer;