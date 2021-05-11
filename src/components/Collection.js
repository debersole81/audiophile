import React from "react";

/**Notes
 * When an album in the collection is clicked, use the handleAlbumClick callback in ProtectedComponents to render the album
 */

function Collection(props) {

    /* #region Destructure Props */
    const { userCollectionAlbums, userCollectionReleases } = props.collectionProps;
    /* #endregion Destructure Props */

    /* #region Join and Sort User Albums and Releases */
    /** Join user albums and releases, assign output to userCollection */
    const userCollection = userCollectionAlbums.concat(userCollectionReleases);

    /**Sort userCollection by artist name and then by album name */
    //Define compare function to pass to array.sort method
    function compare(a, b) {
        //Declare variables for artistName fields
        const firstArtistName = a.artistName.toUpperCase();
        const secondArtistName = b.artistName.toUpperCase();
        //Declare variables for albumTitle fields
        const firstAlbumTitle = a.albumTitle.toUpperCase();
        const secondAlbumTitle = b.albumTitle.toUpperCase();

        // If artistNames are equal, sort by albumTitle
        if (firstArtistName === secondArtistName) {
            return (firstAlbumTitle > secondAlbumTitle) ? 1 : (firstAlbumTitle < secondAlbumTitle) ? -1 : 0;
            //If artistNames are not equal, sort first by artistName and then repeat loop to sort albumTitles
        } else {
            return (firstArtistName < secondArtistName) ? -1 : 1;
        }
    };
    //Declare a new variable to hold the sorted userCollection array
    const sortedUserCollection = userCollection.sort(compare);
    console.log(sortedUserCollection);
    /* #endregion Join and Sort User Albums and Releases */

   
    return (
        <React.Fragment>
            {/* {Object.fromEntries(Object.entries(groupedUserCollection).map(({key, value}, index) => {
                <h3>{value}</h3>
            }))} */}
        </React.Fragment>
    );
};

export default Collection;