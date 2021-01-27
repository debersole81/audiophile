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
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState();

    const handleSearchChange = (e) => {
        setSearch({
            [e.target.name]: e.target.value
        });
    }
    console.log(search);

    useEffect(() => {
        /*Build url*/
        let url = baseURL;
        for (let [key, value] of Object.entries(query)) {
            url = url + key + '=' + value + '&';
        }
        url = url.slice(0, -1);
        console.log(url);
    
        const options = {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'User-Agent': 'vinylrecordscatalogue/1.0+localhost:3000'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.items);
                    console.log(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }                
            );
    }, []);


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