import React, { Component } from 'react';
import styled from 'styled-components';
import Flexbox from '../components/Flexbox';
import Gridbox from '../components/Gridbox';
import Header from '../components/Header';
import ItemCard from '../components/ItemCard';
import { CategoryTitle } from '../components/Titles';

const StyledContainer = styled(Flexbox)`
    max-width: 1250px;
`

class CategoryPage extends Component {

    render() {
        const url = "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_465,c_limit/uine1pshjr41hoyh1qvj/joggery-sportswear-club-fleece-6wr1Jb.png";

        return (
            <StyledContainer direction="column" margin="0 auto" padding="0 1rem 7rem 1rem">
                <Header/>
                <CategoryTitle margin="5rem 0 0 0">Category name</CategoryTitle>
                <Gridbox gap="5rem 2rem" margin="5rem 0 0 0">
                    <ItemCard img={url}/>
                    <ItemCard img={url}/>
                    <ItemCard img={url}/>
                    <ItemCard img={url}/>
                    <ItemCard img={url}/>
                    <ItemCard img={url}/>
                </Gridbox>
            </StyledContainer>
        );
    }
}

export default CategoryPage;