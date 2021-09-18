import React, {Component} from 'react';
import styled from 'styled-components';

const StyledFlexbox = styled.div`
    display: flex;
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "auto"};
    position: ${props => props.position || "static"};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    flex-direction: ${props => props.direction || 'row'};
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || 0};
    border-bottom: ${props => props.borderBottom || 0};
`

class Flexbox extends Component {
    render() {
        return <StyledFlexbox {...this.props}/>
    }
}

export default Flexbox;
