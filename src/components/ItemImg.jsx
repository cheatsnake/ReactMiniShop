import React, { Component } from 'react';
import styled from 'styled-components';

const StyledItemImg = styled.img`
    width: ${props => props.width || "356px"};
    height: ${props => props.height || "356px"};
    object-fit: cover;
`

class ItemImg extends Component {
    render() {
        return <StyledItemImg {...this.props}/>
    }
}

export default ItemImg;