import React, { Component } from 'react';
import { CartButton, CurrencyButton, HeaderNavButton } from './Buttons';
import Flexbox from './Flexbox';
import ShopIcon from '../icons/logo.svg';
import styled from 'styled-components';

const StyledLogo = styled.img`
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width: 41px;
    height: 41px;
`

class Header extends Component {
    render() {
        return (
            <Flexbox position="relative" height="80px" justify="space-between" align="center">
                <Flexbox width="234px">
                    <HeaderNavButton>Women</HeaderNavButton>
                    <HeaderNavButton>Men</HeaderNavButton>
                    <HeaderNavButton>Kids</HeaderNavButton>
                </Flexbox>
                <StyledLogo src={ShopIcon} alt="Logo"/>
                <Flexbox width="110px" justify="space-between">
                    <CurrencyButton/>
                    <CartButton/>
                </Flexbox>
            </Flexbox>
        );
    }
}

export default Header;