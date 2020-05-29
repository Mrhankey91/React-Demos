import React, { useState } from 'react';
import Shop from './Shop';

const ShoppingCart = ({cart, getProduct, updateItemCart, removeFromCart}) => {
    const [test, setState] = useState();

    const onChange = (event, id) =>{
        updateItemCart(id, event.target.value);
        setState(event.target.value);
    }

    const getTotalPrice = () =>{
        var totalPrice = 0;
        cart.map((item) =>{
            const product = getProduct(item.id, item.categoryID);
            totalPrice += product.price * item.amount;
        });
        return totalPrice;
    }
    
    if(cart.length === 0)
        return (<div><h1>Your cart</h1><p>Cart is empty</p></div>);
    else{
        return(
            <div>
                <h1>Your cart</h1>
                {
                    cart.map((item) =>{
                        const product = getProduct(item.id, item.categoryID);
                        return(
                            <div className="shoppingcart-item">
                                <input className="amount" type="number" onChange={(event) => onChange(event, item.id)} value={item.amount}/>
                                <h1 className="name">{product.name}</h1>
                                <p className="price">${product.price}</p>
                                <button className="remove" onClick={() => removeFromCart(item.id)}>X</button>
                            </div>
                        );
                    })
                }
                <p>Total: ${getTotalPrice()}</p>
            </div>
        );
    }
}

export default ShoppingCart;