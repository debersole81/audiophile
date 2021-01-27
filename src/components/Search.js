import React, { useState, useEffect } from 'react';


/*Build HTTP header*/
const baseURL = 'https://api.discogs.com/database/search?'; //q=Nirvana&key=KNMVnsceTtAqbvAVbsPX&secret=YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO'
const query = {
    q: '',
    format: 'vinyl',
    maxResults: '25',
    key: 'KNMVnsceTtAqbvAVbsPX',
    secret: 'YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO'
};


function Search () {
    
    /*State managers*/
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState();

    useEffect(() => {
        /*Build url*/
        let url = baseURL;
        for (let [key, value] of Object.entries(query)) {
            url = url + key + '=' + value + '&';
        }
    });


    return(
        <div>
            <h1>Search</h1>
        </div>
    );
};

export default Search;