import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCategoryTitle = styled.h1`
    font-size: 2.625rem;
    font-weight: 400;
    margin: ${props => props.margin || 0};
`

const StyledItemName = styled.h3`
    font-size: 1.125rem;
    font-weight: 300;
    margin: ${props => props.margin || 0};
`

const StyledItemPrice = styled.h3`
    font-size: 1.125rem;
    font-weight: 500;
    margin: ${props => props.margin || 0};
`

export class CategoryTitle extends Component {
    render() {
        return <StyledCategoryTitle {...this.props}/>
    }
}

export class ItemName extends Component {
    render() {
        return <StyledItemName {...this.props}/>
    }
}

export class ItemPrice extends Component {
    render() {
        return <StyledItemPrice {...this.props}/>
    }
}