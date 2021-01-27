import React, { useState, useEffect } from 'react';


/*Build HTTP header*/
const baseURL = 'https://api.discogs.com/database/search?'; //q=Nirvana&key=KNMVnsceTtAqbvAVbsPX&secret=YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO'
const query = {
    q: '',
    format: 'vinyl',
    key: 'KNMVnsceTtAqbvAVbsPX',
    secret: 'YjfVFNTeaEqVblcDGkanBBRSWPAeIXBO'
};


function Search () {
    
    /*State managers*/
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState();



    return(
        <div>
            <h1>Search</h1>
        </div>
    );
}

export default Search;