import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ItemCardButton } from './Buttons';
import Flexbox from './Flexbox';
import ItemImg from './ItemImg';
import { ItemName, ItemPrice } from './Titles';
import { connect } from 'react-redux';
import { addToCartReducer } from '../store/CartReducer';

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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
`

class ItemCard extends Component {

    render() {

        const {data, addToCartReducer} = this.props;

        function addToCart(e) {
            e.preventDefault();
            addToCartReducer([{id: data.id, url: data.url, name: data.name, price: data.price}]);
        }

        return (
            <StyledLink to={`/item${data.id}`} >
                <StyledItemCard position="relative" direction="column" width="auto" padding="1rem">
                    <ItemImg src={data.url}/>
                    <ItemCardButton onClick={(e) => addToCart(e)}/>
                    <ItemName margin="2rem 0 0 0">{data.name}</ItemName>
                    <ItemPrice margin="0.5rem 0 0 0">${data.price}.00</ItemPrice>
                </StyledItemCard>
            </StyledLink>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCartReducer: (payload) => dispatch(addToCartReducer(payload)),
    }
}

export default connect(null, mapDispatchToProps)(ItemCard);