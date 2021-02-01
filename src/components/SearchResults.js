import React, { useEffect, useState } from 'react';
import { defaultQuery, buildURL, defaultGETOptions } from '../apiParameters'


function SearchResults () {

    /**State managers*/
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => { //this will just do calldiscogs api and return .json
        // /**Build URL*/        
        // buildURL(defaultQuery)

        // /**Initiate HTTP request to Discogs, then handle response*/
        // fetch(url, defaultGETOptions)
        //     .then(res => res.json()) //abstract this
        //     .then( //output of callDiscogs api function
        //         (result) => {
        //             setItems(result.items);
        //             console.log(result);
        //         },
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(error);
        //         }
        //     );
    }, []); //[] tells useEffect to run only when component mounts

    return(
        <div>
            <h1>Search Results</h1>
        </div>
    );
};


export default SearchResults;