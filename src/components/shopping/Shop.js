import React, { useState, useRef, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ShopHeader from "./ShopHeader";
import '../../styles/index.scss';
import '../../styles/Shop.scss';
import {itemsData} from '../../data/shopping/items';
import ShopCategory from "./ShopCategory";
import ShoppingCart from "./ShoppingCart";
import ProductPage from "./ProductPage";

const Shop = () => {
    var [id, setID] = useState(0);
    var [shoppingCartItemCount, setShoppingCartItemCount] = useState(0);
    var [cart, setCart] = useState([]);
    const api = "https://api.vriens.me/v1/shop/";

    const getCategories = () =>{
        let data = fetch(api + "categories")
            .then(res => res.json()
            .then((resp) =>{
                return resp;
            })
        );
    }

    const getCategory = (id) =>{
        /*let data = fetch(api + "category/" + id)
            .then(res => res.json()
            .then((resp) =>{
                return resp;
            })
        );
        const response = await fetch(api + "category/" + id);
        return (await response.json());*/

        for(var i = 0; i< itemsData.categories.length; ++i){
            if(itemsData.categories[i].id === id){
                return itemsData.categories[i];
            }
        }
        return null;
    }

    const getProduct = (id, cid) =>{
        return itemsData.categories.filter((cat) => cat.id === cid)[0].items.filter((item) => item.id === id)[0];
        return null;
    }

    useEffect(() =>{
        setShoppingCartItemCount(cart.length);
    }, [cart.length]);

    const addToCart = (id, cid) =>{
        var updated = false;
        setCart(cart.map(item => {
            if(item.id === id){
                updated = true;
                return {...item, amount: item.amount + 1}
            }else{return item}
        }));
        if(!updated)
            setCart(cart.concat({id: id, categoryID: cid, amount: 1}));
    }
    const removeFromCart = (id) =>{
        setCart(
            cart.filter((item) => item.id !== id)
        );
    }
    const updateItemCart = (id, amount) =>{
        /*setCart(cart.map(item => {
            if(item !== undefined && item.id === id) 
                item.amount = amount;
        }));*/
        for(var i=0; i< cart.length; ++i){
            if(cart[i].id === id){
                cart[i].amount = amount
                setCart(cart);
                break;
            }
        }
    }
    const onItemSearch = (search) =>{
        if(search === "" || search === undefined)
            return null;

        var result = [];
        itemsData.categories.map((cat) => {
            cat.items.map((item) => {
                if(item.name.toLowerCase().includes(search.toLowerCase())){
                    item.cid = cat.id;
                    result = [...result, item];
                }
            })
        });
        return result;
    }
    
    return(
        <Router>
            <ShopHeader categories={itemsData.categories} shoppingCartItemCount={shoppingCartItemCount} onItemSearch={onItemSearch} />
            
            <Switch>
                <Route path="/shop/" exact>
                    <p>home</p>
                </Route>
                <Route path="/shop/category/:id" component={(props) =>  <ShopCategory {...props} getCategory={getCategory} addToCart={addToCart} />}>
                   
                </Route>
                <Route path="/shop/product/:cid/:id" component={(props) => <ProductPage {...props} getProduct={getProduct} addToCart={addToCart}/>} >

                </Route>
                <Route path="/shop/cart" component={() => <ShoppingCart cart={cart} getProduct={getProduct} updateItemCart={updateItemCart} removeFromCart={removeFromCart} />} />
                <Route>
                    <p>Not Found</p>
                </Route>
            </Switch>
        </Router>
    );
}

export default Shop;