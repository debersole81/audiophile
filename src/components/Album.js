import React, { useEffect, useState } from 'react';
import '../App.css';
import masterReleaseLogo from '../assets/master-release-logo.svg';
import AlbumTracks from '../components/AlbumTracks'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { FaHeart, FaRecordVinyl } from 'react-icons/fa';

/**
 * Develop a way to restore previous state (albumData) after a page reload in the browser
 * Two researched options to accomplish--
 * Save state locally via localstorage/indexedDB
 * Save state at server side
 * Make a wrapper for modal to pevent album component render on modal open and cloase
 * 
 */

function Album(props) {

    /* #region Destructure Props*/
    const { albumData,
        albumMasterData,
        addAlbumToCollection,
        addAlbumToWishList,
        deleteAlbumFromCollection,
        deleteAlbumFromWishList,
        userCollectionAlbums,
        userWishListAlbums
    } = props.albumProps;
    /* #endregion Destructure Props*/

    /* #region State Variables*/
    /** Album images modal component state variable */
    const [showModal, setShowModal] = useState(false);
    /* #endregion State Variables*/

    /* #region Callback Functions */
    /**Handle show more images button click*/
    const handleShowModal = (e) => {
        e.preventDefault();

        //Set showModal state to true
        setShowModal(true);
    };

    /**Handle modal close button click*/
    const handleCloseModal = (e) => {
        //Set showModal to false
        setShowModal(false);
    };
    /* #endregion Callback Functions */

    /* #region Carousel Component Formatting */
    //Declare empty array
    const images = [];

    //Format images and push onto images array
    albumData.images.forEach((element, index) => {
        if (element.type === 'secondary') {
            images.push(
                <Carousel.Item key={index}>
                    <img
                        className='d-block w-100'
                        src={element.uri}
                        alt={`More images slide ${index}`}
                    />
                </Carousel.Item>
            )
        };
    });
    /* #endregion Carousel Component Formatting */

    /* #region GraphQL Album Id's */
    let collectionAlbumId;
    let wishListAlbumId;

    //Map through each element in userCollectionAlbums
    userCollectionAlbums.forEach((element) => {
        //Compare userCollectionAlbums albumId to albumData id
        if (element.albumId === albumData.id) {
            //Set collectionAlbumId equal to the matching element's GraphQL generated id   
            return (collectionAlbumId = element.id)
        };
    })

    //Map through each element in userWishListAlbums
    userWishListAlbums.forEach((element) => {
        //Compare userCollectionAlbums albumId to albumData id
        if (element.albumId === albumData.id) {
            //Set collectionAlbumId equal to the matching element's GraphQL generated id   
            return (wishListAlbumId = element.id)
        };
    })
    /* #endregion GraphQL Album Id's */

    return (
        <Container className='mt-3'>
            <Row>
                <Col className='col album-image-col' xs={12} s={12} md={7} lg={6} xl={5}>
                    <Image fluid src={albumData.images[0].uri} alt='Album Cover Art' />
                    {(Array.isArray(images) && images.length) ? <Button variant='dark' className='album-images-button' onClick={handleShowModal} block>See More Images</Button> : null}
                    <Modal show={showModal} onHide={handleCloseModal} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
                        <Modal.Header closeButton />
                        <Modal.Body id='contained-modal-title-vcenter'>
                            <Carousel>
                                {images}
                            </Carousel>
                        </Modal.Body>
                    </Modal>
                </Col>
                <Col className='col mt-1' xs={12} s={12} md={5} lg={6} xl={7}>
                    <h2 className='mt-3 mb-2'>{albumData.title}</h2>
                    <h3 className='text-muted'>{albumData.artists[0].name}</h3>
                    <Row className='album-details'>
                        <Col className='col' xs={8} s={8} md={8} lg={7} xl={7}>
                            {(albumData.formats) ? <p><strong>Format:</strong> {albumData.formats[0].name} </p> : null}
                            {(albumData.genres) ? <p><strong>Genre:</strong> {albumData.genres[0]}</p> : null}
                            {(albumData.styles) ? <p><strong>Style:</strong> {albumData.styles.join(', ')}</p> : null}
                            {(albumData.labels) ? <p><strong>Label:</strong> {albumData.labels[0].name}</p> : null}
                            {(albumData.labels) ? <p><strong>Cat #:</strong> {albumData.labels[0].catno}</p> : null}
                            {(albumData.country) ? <p><strong>Release Country:</strong> {albumData.country}</p> : null}
                            {(albumData.year) ? <p><strong>Release Year:</strong> {albumData.year}</p> : null}
                        </Col>
                        {(albumData.id === albumMasterData.main_release) ?
                            <Col className='col album-master-logo-col' xs={4} s={4} md={4} lg={5} xl={5}>
                                <Image src={masterReleaseLogo} className='album-master-logo' alt='Album Master Release Logo' />
                            </Col> : null
                        }
                    </Row>
                    <Row className='album-add-buttons-row'>
                        <Col>
                            {(userCollectionAlbums.some(element => (element.albumId === albumData.id))) ?
                                <Button variant='dark' size='sm' id={collectionAlbumId} onClick={deleteAlbumFromCollection} block><FaRecordVinyl /> Remove From Collection</Button> :
                                <Button variant='dark' size='sm' onClick={addAlbumToCollection} block><FaRecordVinyl /> Add To Collection</Button>
                            }
                            {(userWishListAlbums.some(element => (element.albumId === albumData.id))) ?
                                <Button variant='dark' size='sm' id={wishListAlbumId} onClick={deleteAlbumFromWishList} block><FaHeart /> Remove From Wishlist</Button> :
                                <Button variant='dark' size='sm' onClick={addAlbumToWishList} block><FaHeart /> Add To Wishlist</Button>
                            }
                        </Col>
                    </Row>
                </Col>
                <AlbumTracks {...props} />
            </Row>
        </Container>
    );
};

export default Album;