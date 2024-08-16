import styled from 'styled-components'

const Container = styled.div`
    
`
const Image = styled.img`
    
`
const Product = ({el}) => {
    return(
        <Container>
            <Image src= {el.img}/>
        </Container>
    )
}
export default Product;