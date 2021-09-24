import React, { Component } from 'react';
import styled from 'styled-components';
import { ViewButton } from '../components/Buttons';
import CartItem from '../components/CartItem';
import Flexbox from '../components/Flexbox';
import { Text } from '../components/Titles';

const StyledBox = styled(Flexbox)`
    border-top: 1px solid #cccccc;
    margin: 1.5rem 0 0 0;
`

class CartPage extends Component {
    render() {

        return (
            <Flexbox direction="column" margin="80px 0 0 0">
                <Text margin="4rem 0 0 0" size="2rem" weight="700" transform="uppercase">Cart</Text>
                <Flexbox direction="column" margin="1rem 0 0 0">
                    <StyledBox>
                        <CartItem 
                            nameSize="1.875rem" 
                            priceSize="1.5rem" 
                            priceWeight="700" 
                            lineHeight="3rem"
                            widthBtn="50px" 
                            optionBtnSize="1rem"
                            optionBtnPadding="1.25rem"
                            imgHeight="185px"
                            imgWidth="140px"
                            width="auto"/>
                    </StyledBox>
                    <StyledBox>
                        <CartItem 
                            nameSize="1.875rem" 
                            priceSize="1.5rem" 
                            priceWeight="700"
                            lineHeight="3rem"
                            widthBtn="50px" 
                            optionBtnSize="1rem"
                            optionBtnPadding="1.25rem"
                            imgHeight="185px"
                            imgWidth="140px"
                            width="auto"/>
                    </StyledBox>
                </Flexbox>
                <Flexbox justify="flex-end">
                    <ViewButton to="/checkout" margin="3rem 0 0 0" width="210px" primary="true">Check out</ViewButton>
                </Flexbox>
            </Flexbox>
        );
    }
}

export default CartPage;