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
        
        /**Build request method and headers*/
        const options = {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'User-Agent' : 'vinylrecordscatalogue/1.0+localhost:3000'
            }
        };

        /**Initiate HTTP request to Discogs, then handle response*/
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
    }, []); //[] tells useEffect to run only when component mounts

};

export default SearchResults;