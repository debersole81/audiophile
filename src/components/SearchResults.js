import React, { useState } from 'react';

function SearchResults () {

    /*State managers*/
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
};

export default SearchResults;