import React from 'react';

function Album( { albumProps: {albumData} } ) {

    console.log(albumData);

    return (
        <div>
            <h1>Album View</h1>
        </div>
    )

};

export default Album;