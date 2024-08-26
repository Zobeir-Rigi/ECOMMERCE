import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"

import Footer from "../components/Footer";

const Container = styled.div`
    
`
const Title = styled.h1`
     margin-bottom: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const ProductList = () =>{
    return (
        <div>
            <Container>
                <Navbar />
                <Announcement />
                <Title>Dresses</Title>
                <FilterContainer>
                <Filter>Filter1</Filter>
                <Filter>Filter2</Filter>
                </FilterContainer>
                <Filter></Filter>
                <Products />
                <Newsletter />
                <Footer />
            </Container>
        </div>
    )
}

export default ProductList;