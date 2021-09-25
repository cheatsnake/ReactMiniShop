import React, { Component } from 'react';
import Flexbox from '../components/Flexbox';
import { Text } from '../components/Titles';

class ErrorPage extends Component {
    render() {
        return (
            <Flexbox height="calc(100vh - 80px)" direction="column" justify="center" align="center">
                <Text size="5rem" weight="700">404</Text>
                <Text size="2rem" weight="400">Not Found</Text>
            </Flexbox>
        );
    }
}

export default ErrorPage;