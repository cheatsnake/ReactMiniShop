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

const StyledContainer = styled(Flexbox)`
    max-width: 1250px;
`

class App extends Component {
    render() {
        

        const data = [
            {
                category: "Women",
                url: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dw9935ec3b/images/59495501/Rebel_59495501_blackwhite_hi-res.jpg?sw=558&sh=558&sm=fit",
                itemName: "Woman sport shoes",
                itemCose: "$49.99"
            },
            {
                category: "Men",
                url: "https://sc04.alicdn.com/kf/Hd2b8080e8fba481dbca6f0d9d6720f21q.jpg",
                itemName: "Man sport shoes",
                itemCose: "$59.99"
            },
            {
                category: "Kids",
                url: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9800a9eaf0da4e0d909bac6300bb18b2_9366/adidas_x_LEGO(r)_Sport_Shoes_Yellow_FY8440_01_standard.jpg",
                itemName: "Kids sport shoes",
                itemCose: "$29.99"
            },
        ];
        const {overlay} = this.props;
        const location = this.props.location.pathname;

        return (
            <StyledContainer direction="column" margin="0 auto" padding="0 1rem 2rem 1rem">
                {overlay ? <CartOverlay/> : null}
                <Header location={location}/>
                <Switch>
                    <Route path="/women">
                        <CategoryPage location={location} data={data}/>
                    </Route>
                    <Route path="/men">
                        <CategoryPage location={location} data={data}/>
                    </Route>
                    <Route path="/kids">
                        <CategoryPage location={location} data={data}/>
                    </Route>
                    <Route path="/item">
                        <ItemPage location={location} data={data}/>
                    </Route>
                    <Route path="/cart">
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
