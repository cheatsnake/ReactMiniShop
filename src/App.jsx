import React, { Component } from 'react';
import CategoryPage from './pages/CategoryPage';
import styled from 'styled-components';
import Flexbox from './components/Flexbox';
import Header from './components/Header';
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import ItemPage from './pages/ItemPage';
import CartOverlay from './components/CartOverlay';
import { connect } from 'react-redux';
import CartPage from './pages/CartPage';
import data from './data.json';

const StyledContainer = styled(Flexbox)`
    max-width: 1250px;
`

class App extends Component {
    render() {

        const {overlay} = this.props;
        const location = this.props.location.pathname;

        function filteredData(arr, param) {
            return arr.filter(elem => elem.category === param); 
        }

        return (
            <StyledContainer direction="column" margin="0 auto" padding="0 1rem 2rem 1rem">
                {overlay ? <CartOverlay/> : null}
                <Header location={location}/>
                <Switch>
                    <Route path="/women">
                        <CategoryPage location={location} data={filteredData(data, 'Women')}/>
                    </Route>
                    <Route path="/men">
                        <CategoryPage location={location} data={filteredData(data, 'Men')}/>
                    </Route>
                    <Route path="/kids">
                        <CategoryPage location={location} data={filteredData(data, 'Kids')}/>
                    </Route>
                    <Route path="/item:id" render={
                        ({match}) => {
                            const {id} = match.params;
                            return <ItemPage itemId={id} data={data} />
                        }
                    }/>
                    <Route path="/cart" >
                        <CartPage location={location} data={data}/>
                    </Route>
                    <Redirect to="/women"/>
                </Switch>
            </StyledContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        overlay: state.cart.CartOverlay,
    }
}

export default connect(mapStateToProps)(withRouter(App));
