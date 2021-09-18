import React, { Component } from 'react';
import styled from 'styled-components';
import { ItemCardButton } from './Buttons';
import Flexbox from './Flexbox';
import ItemImg from './ItemImg';
import { ItemName, ItemPrice } from './Titles';

const StyledItemCard = styled(Flexbox)`
    cursor: pointer;
    transition: 0.5s all;
    button {
        opacity: 0;
    }
    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
        button {
            opacity: 1;
        }
    }
`

class ItemCard extends Component {
    render() {
        return (
            <StyledItemCard position="relative" direction="column" width="auto" padding="1rem">
                <ItemImg src={this.props.img}/>
                <ItemCardButton/>
                <ItemName margin="2rem 0 0 0">Nike Running Pants</ItemName>
                <ItemPrice margin="0.5rem 0 0 0">$70.00</ItemPrice>
            </StyledItemCard>
        );
    }
}

export default ItemCard;