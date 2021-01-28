import React, { useState, useEffect } from 'react';


/*Build HTTP query*/
const baseURL = 'https://api.discogs.com/database/search?'; //q=Nirvana&key=KNMVnsceTtAqbvAVbsPX&secret=YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO'
const query = {
    q: 'Foo Fighters',
    format: 'vinyl',
    maxResults: '25',
    key: 'KNMVnsceTtAqbvAVbsPX',
    secret: 'YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO'
};


function Search () {
    
    /*State managers*/
    const [search, setSearch] = useState();

    const handleSearchChange = (e) => {
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