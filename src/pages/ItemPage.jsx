import React, { Component } from 'react';
import { SizeButton, ViewButton } from '../components/Buttons';
import Flexbox from '../components/Flexbox';
import ItemImg from '../components/ItemImg';
import { Text } from '../components/Titles';
import { Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class ItemPage extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
      };

    render() {
        const data = this.props.location.state.propsData;

        console.log(data);

        if (!this.props.location.state) return <Redirect to="/women" />;

        return (
            <Flexbox margin="80px 0 0 0" padding="2rem 0 0 0">
                <Flexbox width="auto" direction="column" margin="0 2rem 0 0">
                    <ItemImg margin="0 0 2rem 0" width="80px" height="80px" src={data.url}/>
                    <ItemImg margin="0 0 2rem 0" width="80px" height="80px" src={data.url}/>
                    <ItemImg margin="0 0 2rem 0" width="80px" height="80px" src={data.url}/>
                    <ItemImg margin="0 0 2rem 0" width="80px" height="80px" src={data.url}/>
                    <ItemImg margin="0 0 2rem 0" width="80px" height="80px" src={data.url}/>
                </Flexbox>
                    <ItemImg width="610px" height="530px" src={data.url}/>
                <Flexbox width="250px" direction="column" margin="0 0 0 5rem">
                    <Text size="1.875rem">{data.name}</Text>
                    <Text size="1.125rem" transform="uppercase" margin="2rem 0 0 0" weight="700">Size:</Text>
                    <Flexbox justify="space-between" margin="0.5rem 0 0 0">
                        <SizeButton out size="xs"/>
                        <SizeButton size="s"/>
                        <SizeButton size="m"/>
                        <SizeButton size="l"/>
                    </Flexbox>
                    <Text size="1.125rem" transform="uppercase" weight="700" margin="2rem 0 0 0">Price:</Text>
                    <Text size="1.5rem" weight="700" margin="1rem 0 0 0">${data.price}.00</Text>
                    <ViewButton to="/cart" width="100%" primary="true" margin="1.5rem 0 0 0">Add to cart</ViewButton>
                    <Text margin="2rem 0 0 0">
                    Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                    </Text>
                </Flexbox>
            </Flexbox>
        );
    }
}

const ItemPageWithRouter = withRouter(ItemPage);

export default ItemPageWithRouter;