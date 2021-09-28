import React, { Component } from 'react';
import { OptionButton, SizeButton } from './Buttons';
import Flexbox from './Flexbox';
import ItemImg from './ItemImg';
import { Text } from './Titles';

class CartItem extends Component {
    render() {

        const {item} = this.props; 
        const {paddingUp, nameSize, priceSize, priceWeight, optionBtnSize, widthBtn, lineHeight, optionBtnPadding, imgHeight, imgWidth, width} = this.props;

        return (
            <Flexbox margin={paddingUp || "0 0 2rem 0"} justify="space-between">
                <Flexbox direction="column" justify="space-between">
                    <Text weight="300" size={nameSize || "1rem"} lh="1.5rem">{item.name}</Text>
                    <Text margin=".5rem 0 0 0" size={priceSize || "1rem"} weight={priceWeight || "500"}>${item.price.toFixed(2)}</Text>
                    <Flexbox margin="2rem 0 0 0">
                        <SizeButton lh={lineHeight || "1.75rem"} width={widthBtn || "30px"} fontSize={optionBtnSize || "0.875rem"} size="s"/>
                        <SizeButton lh={lineHeight || "1.75rem"} width={widthBtn || "30px"} fontSize={optionBtnSize || "0.875rem"} size="m"/>
                    </Flexbox>
                </Flexbox>
                <Flexbox width={width || "100%"}>
                    <Flexbox direction="column" justify="space-between" align="center" margin="0 0.7rem 0 0">
                        <OptionButton plus padding={optionBtnPadding} size={optionBtnSize || "0.875rem"}></OptionButton>
                        <Text weight={priceWeight} size={priceSize}>1</Text>
                        <OptionButton minus padding={optionBtnPadding} size={optionBtnSize || "0.875rem"}></OptionButton>
                    </Flexbox>
                    <ItemImg src={item.url} width={imgWidth || "105px"} height={imgHeight || "137px"}/>
                </Flexbox>
            </Flexbox>
        );
    }
}

export default CartItem;
