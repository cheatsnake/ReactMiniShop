import React, { Component } from 'react';
import { OptionButton, SizeButton } from './Buttons';
import Flexbox from './Flexbox';
import ItemImg from './ItemImg';
import { Text } from './Titles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { decItemCartReducer, incItemCartReducer } from '../store/CartReducer';


class CartItem extends Component {
    render() {
        const {cartItems, itemId, paddingUp, nameSize, 
            priceSize, priceWeight, optionBtnSize, widthBtn, 
            lineHeight, optionBtnPadding, imgHeight, imgWidth, 
            width, incItem, decItem} = this.props;

        const item = cartItems.find(item => item.id === itemId);

        return (
            <Flexbox margin={paddingUp || "0 0 2rem 0"} justify="space-between">
                <Flexbox direction="column" justify="space-between">
                    <Text 
                        weight="300" 
                        size={nameSize || "1rem"} 
                        lh="1.5rem"
                        >{item.name}</Text>
                    <Text 
                        margin=".5rem 0 0 0" 
                        size={priceSize || "1rem"} 
                        weight={priceWeight || "500"}
                        >${item.price.toFixed(2)}</Text>
                    <Flexbox margin="2rem 0 0 0">
                        <SizeButton 
                            lh={lineHeight || "1.75rem"} 
                            width={widthBtn || "30px"} 
                            fontSize={optionBtnSize || "0.875rem"} 
                            size="s"/>
                        <SizeButton 
                            lh={lineHeight || "1.75rem"} 
                            width={widthBtn || "30px"} 
                            fontSize={optionBtnSize || "0.875rem"} 
                            size="m"/>
                    </Flexbox>
                </Flexbox>
                <Flexbox width={width || "100%"}>
                    <Flexbox 
                        direction="column" 
                        justify="space-between" 
                        align="center" 
                        margin="0 0.7rem 0 0">
                        <OptionButton 
                            onClick={() => incItem(item)} 
                            plus 
                            padding={optionBtnPadding} 
                            size={optionBtnSize || "0.875rem"}></OptionButton>
                        <Text 
                            weight={priceWeight} 
                            size={priceSize}
                            >{item.count}</Text>
                        <OptionButton 
                            onClick={() => decItem(item)} 
                            minus 
                            padding={optionBtnPadding} 
                            size={optionBtnSize || "0.875rem"}></OptionButton>
                    </Flexbox>
                    <ItemImg 
                        src={item.url} 
                        width={imgWidth || "105px"} 
                        height={imgHeight || "137px"}/>
                </Flexbox>
            </Flexbox>
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
        incItem: (payload) => dispatch(incItemCartReducer(payload)),
        decItem: (payload) => dispatch(decItemCartReducer(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartItem));
