import React, { useState, useEffect } from 'react';
import callDiscogsAPI from '../CallDiscogsAPI'
import SearchResults from './SearchResults';




function Search () {
    
    /*State managers*/
    const [search, setSearch] = useState();
    const [items, setItems] = useState();
    // const [apiTimeoutElapse, setApiTimeoutElapse] = useState(true);
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);


    /**Change handlers*/    
    const handleSearchChange = (e) => { //will run the search drop down
        e.preventDefault();
        
        setSearch({
            [e.target.name]: e.target.value
        });
        
        // if(apiTimeoutElapse && search.length > 4) {
          
        // //    useEffect(() => {

        // //    }
           
        
        // /**Call discogsAPI (search, per_page, page(use default value as 1))*/



        //     setApiTimeoutElapse(false);

            
        // }
    
        // setTimeout(() => {
        //     setApiTimeoutElapse(true);
        // }, 1000);
    };

    console.log(search);

    const handleSubmit = (e) => {
        e.preventDefault();

        /**Call Discogs API*/
        callDiscogsAPI(search)
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result.items);
                console.log(result);
            }
        );

    }

    
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
                <button onClick={handleSubmit}>Go!</button>                
            </form>
        </div>
    );
};

export default Search;