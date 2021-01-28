import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';




function Search () {
    
    /*State managers*/
    const [search, setSearch] = useState();

    /**Change handlers*/    
    const handleSearchChange = (e) => {
        e.preventDefault();

        setSearch({
            [e.target.name]: e.target.value
        });
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