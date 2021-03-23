import React from 'react';

/**
 * Pass albumData props
 * Destructure props
 * Use bootstrap table to display track number, track title, and track time
 * tracklist data is an array of objects
 * will need a way to map through each object and add it to the bootstrap table component (forEach? .map?)
 */

function AlbumTracks(albumData) {

    console.log('Render: AlbumTracks Component');
    console.log(albumData);

    return (
        <h1>This will hold the album tracks</h1>
    );
};

export default AlbumTracks;

