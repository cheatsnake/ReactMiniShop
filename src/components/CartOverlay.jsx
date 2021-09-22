import React, { Component } from 'react';
import styled from 'styled-components';
import { ViewButton } from './Buttons';
import CartItem from './CartItem';
import Flexbox from './Flexbox';
import { Text } from './Titles';

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
                        <Text><b>My Bag</b>, 2 items</Text>
                        <StyledItemBlock direction="column">
                            <CartItem/>
                            <CartItem/>
                        </StyledItemBlock>
                        <Flexbox justify="space-between" margin="3rem 0 0 0">
                            <Text weight="700">Total</Text>
                            <Text weight="700">$100.00</Text>
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