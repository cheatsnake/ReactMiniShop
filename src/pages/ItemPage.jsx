import React, { Component } from 'react';
import { OptionButton, ViewButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import ItemImg from '../components/ItemImg';
import { ItemPrice, Text } from '../components/Titles';

class ItemPage extends Component {
    render() {

        const {data} = this.props;

        console.log(data[2].url);

        return (
            <Flexbox margin="80px 0 0 0" padding="2rem 0 0 0">
                <Flexbox width="auto" direction="column" margin="0 2rem 0 0">
                    <ItemImg margin="0 0 2rem 0" width="80px" height="80px" src={data[2].url}/>
                    <ItemImg margin="0 0 2rem 0" width="80px" height="80px" src={data[2].url}/>
                    <ItemImg margin="0 0 2rem 0" width="80px" height="80px" src={data[2].url}/>
                    <ItemImg margin="0 0 2rem 0" width="80px" height="80px" src={data[2].url}/>
                    <ItemImg margin="0 0 2rem 0" width="80px" height="80px" src={data[2].url}/>
                </Flexbox>
                    <ItemImg width="610px" height="530px" src={data[2].url}/>
                <Flexbox width="250px" direction="column" margin="0 0 0 5rem">
                    <Text size="1.875rem">Nike Running Shoes</Text>
                    <Text size="1.125rem" transform="uppercase" margin="2rem 0 0 0" weight="700">Size:</Text>
                    <Flexbox justify="space-between" margin="0.5rem 0 0 0">
                        <OptionButton padding="1rem">XS</OptionButton>
                        <OptionButton padding="1rem">S</OptionButton>
                        <OptionButton padding="1rem">M</OptionButton>
                        <OptionButton padding="1rem">L</OptionButton>
                    </Flexbox>
                    <Text size="1.125rem" transform="uppercase" weight="700" margin="2rem 0 0 0">Price:</Text>
                    <Text size="1.5rem" weight="700" margin="1rem 0 0 0">$50.00</Text>
                    <ViewButton width="100%" primary margin="1.5rem 0 0 0">Add to cart</ViewButton>
                    <Text margin="2rem 0 0 0">
                    Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                    </Text>
                </Flexbox>
            </Flexbox>
        );
    }
}

export default ItemPage;