import React, { Component } from 'react';
import styled from 'styled-components';
import { ViewButton } from '../components/Buttons';
import CartItem from '../components/CartItem';
import Flexbox from '../components/Flexbox';
import { Text } from '../components/Titles';
import { connect } from 'react-redux';

const StyledBox = styled(Flexbox)`
    border-top: 1px solid #cccccc;
    margin: 1.5rem 0 0 0;
`

class CartPage extends Component {
    render() {

        const {cartItems} = this.props;

        return (
            <Flexbox direction="column" margin="80px 0 0 0">
                <Text margin="4rem 0 0 0" size="2rem" weight="700" transform="uppercase">Cart</Text>
                <Flexbox direction="column" margin="1rem 0 0 0">

                    {
                        cartItems.length ? cartItems.map(item => {
                            return (
                                <StyledBox key={item.id}>
                                <CartItem 
                                    item={item}
                                    paddingUp="2rem 0 1rem 0"
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
                            )
                        }) : <Text size="1.5rem">Your cart is empty</Text>
                    }
                </Flexbox>
                {
                    cartItems.length ? (
                        <Flexbox justify="flex-end">
                            <ViewButton to="/checkout" margin="3rem 0 0 0" width="210px" primary="true">Check out</ViewButton>
                        </Flexbox>
                    ) : null
                }
            </Flexbox>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.CartItems,
    }
}

export default connect(mapStateToProps)(CartPage);
