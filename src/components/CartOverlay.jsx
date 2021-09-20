import React, { Component } from 'react';
import styled from 'styled-components';
import Flexbox from './Flexbox';

const StyledOverlay = styled(Flexbox)`
    top: 80px;
    left: 0;
    background-color: #0000005e;
    z-index: 11;
`

class CartOverlay extends Component {
    render() {
        return (
            <StyledOverlay position="fixed" height="calc(100vh - 80px)">

            </StyledOverlay>
        );
    }
}

export default CartOverlay;