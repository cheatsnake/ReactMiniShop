import React, { Component } from 'react';
import Gridbox from '../components/Gridbox';
import ItemCard from '../components/ItemCard';
import { CategoryTitle } from '../components/Titles';

class CategoryPage extends Component {

    render() {
        const {data} = this.props;

        return (
            <>
                <CategoryTitle margin="10rem 0 0 0">{data.category}</CategoryTitle>
                <Gridbox gap="5rem 2rem" margin="5rem 0 4rem 0">
                    {
                        data.items.map(item => {
                            return (
                                <ItemCard 
                                    key={item.id} 
                                    data={item}/>
                            )
                        })
                    }
                </Gridbox>
            </> 
        );
    }
}

export default CategoryPage;