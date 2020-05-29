import React, {  } from 'react';
import ShopSearchBar from './ShopSearchBar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {ReactComponent as ShoppingCartIcon} from '../../shoppingcart.svg';

const ShopHeader = ({categories, shoppingCartItemCount, onItemSearch}) => {
    return(
        <div>
            <nav className="">
                <ul className="header-menu text-right">
                    <li className="header-menu-item header-menu-category absolute left">Categories
                        <ul className="categories">
                            {
                                categories.map((category) => 
                                    <Link className="category-item" to={"/shop/category/"+category.id}>{category.name}</Link>
                                )
                            }
                        </ul>
                    </li>
                    <ShopSearchBar onItemSearch={onItemSearch} />
                    <li className="header-menu-item absolute right"><Link to="/shop/cart"><ShoppingCartIcon className="shopping-cart"/>{shoppingCartItemCount>0 && <div className="shopping-cart-count"> <p>{shoppingCartItemCount}</p></div>}</Link></li>
                </ul>
            </nav>
        </div>
    );
}

ShopHeader.propTypes = {
    categories: PropTypes.array,
    shoppingCart: PropTypes.number
}

export default ShopHeader;