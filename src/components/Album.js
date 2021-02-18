import React from 'react';
import discogsAPIRelease from '../helper-functions/DiscogsAPIRelease';

function Album () {

    /**Test call to Discogs API release endpoint*/
    discogsAPIRelease()
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