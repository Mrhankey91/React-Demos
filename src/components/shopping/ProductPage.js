import React, {useState} from 'react';

const ProductPage = ({match, getProduct, addToCart}) =>{
    var product = useState();
    product = getProduct(match.params.id, match.params.cid);

    return(
        <div className="product-page">
            <img className="image" src={"../../../product-image/"+product.productimage}></img>
            <div className="container">
                <h1 className="name">{product.name}</h1>
                <p className="description">{product.description}</p>
                <p className="price">${product.price}</p>
                <button className="addcart" onClick={() => addToCart(product.id, match.params.cid)}>Add to cart</button>
            </div>
        </div>
    );
}

export default ProductPage;