import React, {useState, useEffect} from "react";

function Search () {

    const fetchItems = async () => { //makes an async call to discogs api
        const data = await fetch ( //fetches data from discogs api and assigns it to a data variable
            `https://api.discogs.com/releases/249504`
        )
        console.log(data);
    };

    return(
        <div>
            <h1>Search</h1>
        </div>
    );
}

export default Search;