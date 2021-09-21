import React, { Component } from 'react';
import styled from 'styled-components';
import { OptionButton, ViewButton } from './Buttons';
import CartItem from './CartItem';
import Flexbox from './Flexbox';
import { Title } from './Titles';

const StyledOverlay = styled(Flexbox)`
    top: 80px;
    left: 0;
    background-color: #0000005e;
    z-index: 11;
`

const StyledContainer = styled(Flexbox)`
    max-width: 1250px;
`

const StyledCartWindow = styled(Flexbox)`
    max-width: 325px;
    align-self: flex-end;
    background-color: #fff;
    max-height: 540px;
    overflow-y: auto;
`

const StyledItemBlock = styled(Flexbox)`
    max-height: 340px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 5px;
    }
` 

class CartOverlay extends Component {
    render() {
        return (
            <StyledOverlay position="fixed" height="calc(100vh - 80px)">
                <StyledContainer direction="column" margin="0 auto">
                    <StyledCartWindow direction="column" width="auto" height="auto" padding="1rem">
                        <Title><b>My Bag</b>, 2 items</Title>
                        <StyledItemBlock direction="column">
                            <CartItem/>
                            <CartItem/>
                        </StyledItemBlock>
                        <Flexbox justify="space-between" margin="3rem 0 0 0">
                            <Title weight="700">Total</Title>
                            <Title weight="700">$100.00</Title>
                        </Flexbox>
                        <Flexbox justify="space-between" margin="2rem 0 0 0">
                            <ViewButton size="0.875rem" outlined>View Bag</ViewButton>
                            <ViewButton size="0.875rem" primary>Check out</ViewButton>
                        </Flexbox>
                    </StyledCartWindow>
                </StyledContainer>
            </StyledOverlay>
        );
    }
}

export default CartOverlay;