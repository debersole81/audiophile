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





    return (
        <h1>Wish List</h1>
    );
};

export default WishList;