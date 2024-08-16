import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

`
const Title = styled.h1`
    display: flex;
`
const Button = styled.button`
    display: flex;
`
const CategoryItem = ({el}) => {
    return(
        <Container >
           <Image src={el.img} />
           <Info>
                <Title>{el.title}</Title>
                <Button>SHOP NOW</Button>
           </Info>
        </Container>
    )
}

export default CategoryItem;