import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

const ShopSearchBar = ({onItemSearch}) =>{
    var [search, setSearch] = useState();
    var [searchResults, setSearchResults] = useState([]);
    const inputSearch = useRef();

    useEffect(() =>{setSearchResults(onItemSearch(search));},[search]);

    const onChange = (event) =>{
        setSearch(event.target.value);
    }

    const startSearch = (event) =>{
        event.preventDefault();
    }
    const endSearch = (event) =>{
        setSearch("");
        inputSearch.current.value = "";
    }

    return(
        <form className="search-bar" onSubmit={startSearch}>
            <input ref={inputSearch} className="header-menu-search" placeholder="Search.." type="text" onChange={onChange}/>
            <div className="search-results">
                { searchResults !== null && searchResults.map((item) => {
                    return (
                        <Link className="search-result" to={"/shop/product/"+item.cid+"/"+item.id} onClick={endSearch}>
                            <h1>{item.name}</h1>
                            <p>${item.price}</p>
                        </Link>);
                })}
            </div>
        </form>)
    ;
}

export default ShopSearchBar;