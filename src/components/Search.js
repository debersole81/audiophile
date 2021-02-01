import React, { useState, useEffect } from 'react';
import { defaultQuery, buildURL, defaultGETOptions } from '../apiParameters'
import SearchResults from './SearchResults';




function Search () {
    
    /*State managers*/
    const [search, setSearch] = useState();
    const [apiTimeoutElapse, setApiTimeoutElapse] = useState(true);

    /**Change handlers*/    
    const handleSearchChange = (e) => { //will run the search drop down
        e.preventDefault();
        
        setSearch({
            [e.target.name]: e.target.value
        });
        
        if(apiTimeoutElapse && search.length > 4) {
          
           /**Call discogsAPI (search, per_page, page(use default value as 1))*/



            setApiTimeoutElapse(false);

            
        }
    
        setTimeout(() => {
            setApiTimeoutElapse(true);
        }, 1000);
    }


    console.log(search);
    
    return(
        <div>
            <h1>Search</h1>
            <form>
                <label> {''}
                <input
                    type='text'
                    name='search'
                    placeholder='Enter album or artist name to get started'
                    onChange={handleSearchChange}
                />
                </label>
            </form>
        </div>
    );
};

export default Search;