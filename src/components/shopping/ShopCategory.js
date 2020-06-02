import React, {useState, useEffect} from 'react';
import ShopItem from './ShopItem';
import PropTypes from 'prop-types';

const ShopCategory = ({match, getCategory, addToCart}) =>{
    var category = useState(null);

    category = getCategory(match.params.id);
    
    if(category !== null){
        return(
            <div>
                <p>{category.name}</p>
                {
                    category.items.map((item) => 
                        <ShopItem item={item} categoryID={category.id} addToCart={addToCart} />
                    )
                }
            </div>
        );
    }else{
        return(<div></div>);
    }
    return(<div></div>);
}

ShopCategory.propTypes = {
};

export default ShopCategory;