import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import CartLogo from '../icons/Cart.svg';
import CartLogoWhite from '../icons/Cart2.svg';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: inherit;
    transition: 0.3s all;
    &:focus {
        outline: none;
    }
`

const StyledNavButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
    text-decoration: none;
    color: #000;
    background-color: inherit;
    transition: 0.3s all;
    width: 100%;
    height: 80px;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
        background-color: #f7f7f7;
    }
    &:focus {
        outline: none;
    }
    ${props => props.active && css`
        color: ${props => props.theme.colors.main};
        border-bottom: 3px solid ${props => props.theme.colors.main};
    `}
`

const StyledCurrencyButton = styled.select`
    border: none;
    font-size: 1.125rem;
    font-weight: 500;
    &:focus {
        outline: none;
    }
`

const StyledCartButton = styled(StyledButton)`
    img {
        width: 20px;
        height: 20px;
    }
`

const StyledItemCartButton = styled(StyledButton)`
    position: absolute;
    bottom: 4.5rem;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: end;
    width: 52px;
    height: 52px;
    background-color: ${props => props.theme.colors.main};
    border-radius: 50%;
    transition: 0.5s all;
    img {
        width: 25px;
        height: 25px;
    }
    &:hover {
        background-color: #4da865;
    }
`

const StyledOptionButton = styled(StyledButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    font-size: ${props => props.size || "1rem"};
    padding: ${props => props.padding || "0.7rem 0.4rem"};
    line-height: 0rem;
    margin: ${props => props.margin || 0};
`

const StyledViewButton = styled(StyledButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width || "48%"};
    font-size: ${props => props.size || "1rem"};
    padding: ${props => props.padding || "0.7rem 0.5rem"};
    margin: ${props => props.margin || 0};
    text-transform: uppercase;
    font-weight: 600;
    ${props => props.outlined && css`
        border: 1px solid black;
    `}
    ${props => props.primary && css`
        color: #fff;
        background-color: ${props => props.theme.colors.main};
    `}
`

export class NavButton extends Component {
    render() {
        return <StyledNavButton {...this.props}/>
    }
}

export class CurrencyButton extends Component {
    render() {
        return <StyledCurrencyButton {...this.props}>
            <option value="$">$ USD</option>
            <option value="€">€ EUR</option>
            <option value="¥">¥ JPY</option>
        </StyledCurrencyButton>
    }
}

export class CartButton extends Component {
    render() {
        return <StyledCartButton {...this.props}>
            <img src={CartLogo} alt="Cart" />
        </StyledCartButton>
    }
}

export class ItemCardButton extends Component {
    render() {
        return <StyledItemCartButton {...this.props}>
            <img src={CartLogoWhite} alt="Cart" />
        </StyledItemCartButton>
    }
}

export class OptionButton extends Component {
    render() {
        return <StyledOptionButton {...this.props}/>
    }
}
export class ViewButton extends Component {
    render() {
        return <StyledViewButton {...this.props}/>
    }
}