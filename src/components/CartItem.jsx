import React, { Component } from 'react';
import { OptionButton } from './Buttons';
import Flexbox from './Flexbox';
import ItemImg from './ItemImg';
import { Text } from './Titles';

class CartItem extends Component {
    render() {

        const {nameSize, priceSize, priceWeight, optionBtnSize, optionBtnPadding, imgHeight, imgWidth, width} = this.props;

        console.log(this.props);

        return (
            <Flexbox margin="2rem 0 0 0" justify="space-between">
                <Flexbox direction="column" justify="space-between">
                    <Text weight="300" size={nameSize || "1rem"} lh="1.5rem">Nike Running Shoes</Text>
                    <Text margin=".5rem 0 0 0" size={priceSize || "1rem"} weight={priceWeight || "500"}>$50.00</Text>
                    <Flexbox margin="2rem 0 0 0">
                        <OptionButton padding={optionBtnPadding} margin="0 0.5rem 0 0" size={optionBtnSize || "0.875rem"}>S</OptionButton>
                        <OptionButton padding={optionBtnPadding} size={optionBtnSize || "0.875rem"}>M</OptionButton>
                    </Flexbox>
                </Flexbox>
                <Flexbox width={width || "100%"}>
                    <Flexbox direction="column" justify="space-between" align="center" margin="0 0.7rem 0 0">
                        <OptionButton padding={optionBtnPadding} size={optionBtnSize || "0.875rem"}>+</OptionButton>
                        <Text weight={priceWeight} size={priceSize}>1</Text>
                        <OptionButton padding={optionBtnPadding} size={optionBtnSize || "0.875rem"}>-</OptionButton>
                    </Flexbox>
                    <ItemImg src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9800a9eaf0da4e0d909bac6300bb18b2_9366/adidas_x_LEGO(r)_Sport_Shoes_Yellow_FY8440_01_standard.jpg" width={imgWidth || "105px"} height={imgHeight || "137px"}/>
                </Flexbox>
            </Flexbox>
        );
    }
}

export default CartItem;