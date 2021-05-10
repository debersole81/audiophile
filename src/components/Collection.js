import React from "react";

/**Notes
 * When an album in the collection is clicked, use the handleAlbumClick callback in ProtectedComponents to render the album
 */

function Collection(props) {
    
    /* #region Destructure Props */
    const { userCollectionAlbums, userCollectionReleases } = props.collectionProps;
    console.log(userCollectionAlbums, userCollectionReleases);
    /* #endregion Destructure Props */

    return (
        <h1>Collection</h1>
    );
};

export default Collection;