import React, { Component } from 'react';
import { CartButton, CurrencyButton, NavButton } from './Buttons';
import Flexbox from './Flexbox';
import ShopIcon from '../icons/logo.svg';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { toggleCartOverlay } from '../store/CartReducer';

const StyledHeader = styled(Flexbox)`
    max-width: 1230px;
    z-index: 12;
    background-color: #fff;
`

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
        
        const {location, toggleOverlay, count} = this.props;

        return (
            <StyledHeader position="fixed" margin="0 auto">
                <Flexbox position="relative" height="80px" justify="space-between" align="center">
                    <Flexbox width="234px">

                        {location && location.includes('/women') ? 
                            <NavButton to="/women" active="true">Women</NavButton> : 
                            <NavButton to="/women">Women</NavButton>
                        }
                            
                        {location && location.includes('/men') ? 
                            <NavButton to="/men" active="true" >Men</NavButton>: 
                            <NavButton to="/men">Men</NavButton>
                        }

                        {location && location.includes('/kids') ? 
                            <NavButton to="/kids" active="true" >Kids</NavButton> : 
                            <NavButton to="/kids">Kids</NavButton>
                        }

                    </Flexbox>
                    <StyledLogo src={ShopIcon} alt="Logo"/>
                    <Flexbox width="120px" justify="space-between">
                        <CurrencyButton/>
                        {
                            count ? <CartButton onClick={toggleOverlay} opacity="100" count={count}/>
                            : <CartButton onClick={toggleOverlay} opacity="0" count={count}/>
                        }
                    </Flexbox>
                </Flexbox>
            </StyledHeader>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleOverlay: () => dispatch(toggleCartOverlay()),
    }
}

export default connect(null, mapDispatchToProps)(Header);