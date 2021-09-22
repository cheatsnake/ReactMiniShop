import React, { Component } from 'react';
import Gridbox from '../components/Gridbox';
import ItemCard from '../components/ItemCard';
import { CategoryTitle } from '../components/Titles';

class CategoryPage extends Component {

    render() {
        const {data, location} = this.props;
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
                <CategoryTitle margin="10rem 0 0 0">{data[i].category}</CategoryTitle>
                <Gridbox gap="5rem 2rem" margin="5rem 0 4rem 0">
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

export default CategoryPage;