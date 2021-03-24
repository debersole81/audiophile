import React from 'react';

/**Notes
 * Build button to 'View Album Versions'
 * Button will fire a callback in ProtectedComponents.js and provide access to master_id
 * Protected components callback will... 
 * ...call Discogs Master Release Versions EP
 * ...setAlbumVersions data
 * ...setAlbumVersions pagination data
 * Build button to 'Hide Album Versions'
 * Button will clear albumVersions data in Protected component
 * Button will clear albumVersions data in Protected component
 * View/Hide buttons will render based on an inline conditional that ...
 * ...will evaluate albumVersions state object
 * ...if albumVersions in falsy, render show button
 * ...if albumVersions is truthy, render hide button 
 */


function AlbumVersions() {

    return (
        <h1>Album versions will display here</h1>
    );
};

export default AlbumVersions;