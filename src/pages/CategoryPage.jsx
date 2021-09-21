import React, { Component } from 'react';
import CartOverlay from '../components/CartOverlay';
import Gridbox from '../components/Gridbox';
import ItemCard from '../components/ItemCard';
import { CategoryTitle } from '../components/Titles';
import { connect } from 'react-redux';

class CategoryPage extends Component {

    render() {
        const {data, location, overlay} = this.props;
        let i = 0;

        function fetchData() {
            if (location && location.includes('/women')) {
                i = 0;
            } else if (location && location.includes('/men')) {
                i = 1;
            } else {
                i = 2;
            }
        }
        fetchData();

        return (
            <>
                {overlay ? <CartOverlay/> : null}
                <CategoryTitle margin="10rem 0 0 0">{data[i].category}</CategoryTitle>
                <Gridbox gap="5rem 2rem" margin="5rem 0 0 0">
                    <div onClick={e => console.log(e.target)}><ItemCard img={data[i].url}/></div>
                    <ItemCard img={data[i].url}/>
                    <ItemCard img={data[i].url}/>
                    <ItemCard img={data[i].url}/>
                    <ItemCard img={data[i].url}/>
                    <ItemCard img={data[i].url}/>
                </Gridbox>
            </> 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        overlay: state.cart.CartOverlay,
    }
}

export default connect(mapStateToProps)(CategoryPage);