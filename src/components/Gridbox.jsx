import React, { Component } from 'react';
import styled from 'styled-components';

const StyledGridbox = styled.div`
    display: grid;
    grid-template-columns: ${props => props.columns || "1fr 1fr 1fr"};
    gap: ${props => props.gap || "1rem"};
    margin: ${props => props.margin || 0};
`

class Gridbox extends Component {
    render() {
        return <StyledGridbox {...this.props}/>
    }
}

export default Gridbox;