import React from "react";
import { useHistory } from 'react-router-dom';
import '../App.css';
import masterReleaseLogo from '../assets/master-release-logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
import Jumbotron from "react-bootstrap/Jumbotron";

function WishList(props) {

    /* #region Global Variables */
    /** useHistory hook variable. */
    const history = useHistory();
    /* #endregion Global Variables */

    /* #region Destructure Props */
    const {
        userWishListAlbums,
        userWishListReleases,
        handleAlbumClick,
        handleViewAlbumRelease,
        deleteAlbumFromWishList,
        deleteReleaseFromWishList
    } = props.wishListProps;
    /* #endregion Destructure Props */

    /* #region Join and Sort User Albums and Releases */
    /** Join user albums and releases, assign output to userCollection */
    const userWishList = userWishListAlbums.concat(userWishListReleases);

    /**Sort userWishList by artist name and then by album name */
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
    const sortedUserWishList = userWishList.sort(compare);
    /* #endregion Join and Sort User Albums and Releases */
    console.log(sortedUserWishList);
    



    return (
        <h1>Wish List</h1>
    );
};

export default WishList;