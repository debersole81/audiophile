import React, {useState, useEffect} from "react";

function Search () {

    useEffect(() => { //runs the fetchItems function after the component mounts
        fetchItems();
    }, []); //empty brackets ensures that useEffect will only run after the component mounts

    const [artists, setArtists] = useState([]); //artist state manager
    
    const fetchItems = async () => { //makes an async call to discogs api
        const data = await fetch ( //fetches data from discogs api and assigns it to a data variable
            `https://api.discogs.com/releases/249504`
        );

        const items = await data.json(); //converts data from fetchItems to .json
        console.log(items);

        setArtists(items.artists); //sets artist state from artist data fetched from discogs API
    };

    return(
        <div>
            <h1>Search</h1>
        </div>
    );
}

export default Search;