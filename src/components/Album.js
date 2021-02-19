import React from 'react';
import discogsAPIMaster from '../helper-functions/DiscogsAPIMaster';

//To view the status of changes, setup a route for this component in App.js. Remove when complete.

function Album () {

    /**Test call to Discogs API master endpoint*/
    discogsAPIMaster(17243)
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
        }
    )


    return(
        <div>
            <h1>Album View</h1>
        </div>
    )
    
};

export default Album;