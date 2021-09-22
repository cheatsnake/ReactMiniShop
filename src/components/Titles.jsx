import React, { Component } from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
    font-size: ${props => props.size || "1rem"};
    line-height: ${props => props.lh || "normal"};
    font-weight: ${props => props.weight || 400};
    text-transform: ${props => props.transform || "none"};
    margin: ${props => props.margin || 0};
`

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


export class Text extends Component {
    render() {
        return <StyledText {...this.props}/>
    }
}
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