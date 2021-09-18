import React, { Component } from 'react';
import styled from 'styled-components';
import Flexbox from './components/Flexbox';
import Header from './components/Header';

const StyledContainer = styled(Flexbox)`
    max-width: 1250px;
`

class App extends Component {
    render() {
        return (
            <StyledContainer margin="0 auto" padding="0 1rem">
                <Header/>
            </StyledContainer>
        );
    }
}

export default App;