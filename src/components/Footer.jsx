import styled from 'styled-components'
import {  } from '@material-ui/core';
import { GitHub, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import { mobile } from "../responsive";
import StyledLink from "../StyledLink";

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
                <Decs> 
                    At ICDI, we believe in the power of self-expression through fashion. Whether you're looking
                    for timeless classics or the latest trends, we've got you covered. Browse our collection and
                    discover pieces that not only complement your style but also empower you to say, "I can do it."
                </Decs>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <a href="https://x.com/Teraveler94" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Twitter />
                        </a>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <a href="https://github.com/Zobeir-Rigi" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <GitHub />
                        </a>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                    <a href="https://www.linkedin.com/in/zobeir-r-37068217b/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <LinkedIn />
                        </a>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
            <Title>Useful Links</Title>
        <List>
          <ListItem>
          <StyledLink to="/">Home</StyledLink></ListItem>
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