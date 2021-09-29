import React, { Component } from 'react';
import styled from 'styled-components';
import { ViewButton } from './Buttons';
import CartItem from './CartItem';
import Flexbox from './Flexbox';
import { Text } from './Titles';
import { connect } from 'react-redux';
import { toggleCartOverlay } from '../store/CartReducer';

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
    width: 325px;
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
        const {toggleOverlay, cartItems} = this.props;

        const onClose = (e) => {
            if (e.target.parentNode.parentNode.parentNode.id === 'root') {
                toggleOverlay();
            }
        }

        return (
            <StyledOverlay onClick={e => onClose(e)} position="fixed" height="calc(100vh - 80px)">
                <StyledContainer direction="column" margin="0 auto">
                    <StyledCartWindow direction="column" width="auto" height="auto" padding="1rem">
                        <Text margin="0 0 1rem 0"><b>My Bag</b>, {cartItems.length} items</Text>
                        <StyledItemBlock direction="column">
                            {
                                cartItems.length ? cartItems.map(item => {
                                    return <CartItem key={item.id} itemId={item.id}/>
                                })
                                : <Text margin="0.5rem 0 0 0" weight="300" size="1.5rem">Your bag is empty.</Text>
                            }
                        </StyledItemBlock>
                        {
                            cartItems.length ? 
                            (
                            <Flexbox justify="space-between" margin="1rem 0 0 0">
                                <Text weight="700">Total</Text>
                                <Text 
                                    weight="700"
                                    >${cartItems.reduce((total, current) => total + current.price * current.count, 0).toFixed(2)}</Text>
                            </Flexbox>
                            )
                            : null
                        }
                        <Flexbox justify="space-between" margin="2rem 0 0 0">
                            <ViewButton 
                                to="/cart" 
                                onClick={toggleOverlay} 
                                size="0.875rem" 
                                outlined="true"
                                >View Bag</ViewButton>
                            <ViewButton 
                                to="/checkout" 
                                onClick={toggleOverlay} 
                                size="0.875rem" 
                                primary="true"
                                >Check out</ViewButton>
                        </Flexbox>
                    </StyledCartWindow>
                </StyledContainer>
            </StyledOverlay>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.CartItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleOverlay: () => dispatch(toggleCartOverlay()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);