import React, { useEffect, useState } from 'react';

function SearchResults () {

    /**State managers*/
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        /**Build URL*/
        let url = baseURL;
        for (let [key, value] of Object.entries(query)) {
            url = url + key + '=' + value + '&';
        }
        url = url.slice(0, -1);
        
        const options = {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'User-Agent' : 'vinylrecordscatalogue/1.0+localhost:3000'
            }
        };

    }, []);

};

export default SearchResults;