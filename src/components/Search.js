import React, { useState, useEffect } from 'react';

function Search () {
    
    /*State managers*/
    const [search, setSearch] = useState();

    /**Change handlers*/    
    const handleSearchChange = (e) => {
        setSearch({
            [e.target.name]: e.target.value
        });
    }
    console.log(search);

    /*Build HTTP query*/
    const baseURL = 'https://api.discogs.com/database/search?'; //q=Nirvana&key=KNMVnsceTtAqbvAVbsPX&secret=YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO'
    const query = {
        q: search,
        format: 'vinyl',
        maxResults: '25',
        key: 'KNMVnsceTtAqbvAVbsPX',
        secret: 'YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO'
    };

    console.log(query.q);

    /**Build URL*/
    const buildURL = () => {

        let url = baseURL;
        for (let [key, value] of Object.entries(query)) {
            url = url + key + '=' + value + '&';
        };
        url = url.slice(0, -1);
    };

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