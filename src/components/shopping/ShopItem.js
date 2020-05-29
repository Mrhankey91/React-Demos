import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ShopItem = ({item, categoryID, addToCart}) =>{

    return(
        <Link className="product-item" to={"/shop/product/"+categoryID+"/"+item.id}>
            <h1 className="title">{item.name}</h1>
            <p className="price">${item.price}</p>
            {/*<button className="addcart" onClick={() => addToCart(item.id, categoryID)}>Add to cart</button>*/}
        </Link>
    );
}

ShopItem.propTypes = {
    item: PropTypes.object,
    categoryID: PropTypes.number
};

export default ShopItem;