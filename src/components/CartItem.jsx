import React, { Component } from 'react';
import { OptionButton } from './Buttons';
import Flexbox from './Flexbox';
import ItemImg from './ItemImg';
import { Title } from './Titles';

class CartItem extends Component {
    render() {
        return (
            <Flexbox margin="2rem 0 0 0">
                <Flexbox direction="column" justify="space-between">
                    <Title weight="300" lh="1.5rem">Nike Running Shoes</Title>
                    <Title margin=".5rem 0 0 0" weight="500">$50.00</Title>
                    <Flexbox margin="2rem 0 0 0">
                        <OptionButton margin="0 0.5rem 0 0" size="0.875rem">S</OptionButton>
                        <OptionButton size="0.875rem">M</OptionButton>
                    </Flexbox>
                </Flexbox>
                <Flexbox>
                    <Flexbox width="auto" direction="column" justify="space-between" align="center" margin="0 0.7rem 0 0">
                        <OptionButton margin>+</OptionButton>
                        1
                        <OptionButton>-</OptionButton>
                    </Flexbox>
                    <ItemImg src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9800a9eaf0da4e0d909bac6300bb18b2_9366/adidas_x_LEGO(r)_Sport_Shoes_Yellow_FY8440_01_standard.jpg" width="105px" height="137px"/>
                </Flexbox>
            </Flexbox>
        );
    }
}

export default CartItem;