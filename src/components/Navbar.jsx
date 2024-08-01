import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content:space-between;
`;

const Left = styled.div`
    width:33.3%
`
const Center = styled.div`
        width:33.3%
`
const Right = styled.div`
        width:33.3%

`



const Navbar = ()=> {
    return(
        <Container>
            <Wrapper>
                <Left>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, commodi blanditiis! Nemo, explicabo, modi voluptatibus sit totam est saepe vel libero sequi expedita cum minus?</Left>
                <Center>center</Center>
                <Right>right</Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar