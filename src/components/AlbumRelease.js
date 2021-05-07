import React, { useState } from 'react';
import '../App.css'
import AlbumReleaseTracks from './AlbumReleaseTracks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { FaHeart, FaRecordVinyl } from 'react-icons/fa';

function AlbumRelease(props) {

    /* #region Destructure Props */
    const { albumReleaseData,
        addReleaseToCollection,
        addReleaseToWishList,
        deleteReleaseFromCollection,
        userCollectionReleases,
        userWishListReleases
    } = props.albumReleaseProps;
    /* #endregion Destructure Props */

    /* #region State Variables */
    /* Album release images modal component state variable */
    const [showModal, setShowModal] = useState(false);
    /* #endregion State Variables */

    /* #region Callback Functions */
    /* Handle show more images button click */
    const handleShowModal = (e) => {
        e.preventDefault();

        //Set showModal state to true
        setShowModal(true);
    };

    /* Handle modal close button click */
    const handleCloseModal = (e) => {
        //Set showModal to false
        setShowModal(false);
    };
    /* #endregion Callback Functions */

    /* #region Carousel Component Formatting */
    //Declare empty array
    const images = [];

    //Format images and push onto images array
    albumReleaseData.images.forEach((element, index) => {

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
    let collectionReleaseId;
    let wishListReleaseId;

    //Map through each element in userCollectionReleases
    userCollectionReleases.forEach((element) => {
        //Compare userCollectionReleases albumId to albumReleaseData id
        if (element.albumId === albumReleaseData.id) {
            //Set collectionReleaseId equal to the matching element's GraphQL generated id
            return (collectionReleaseId = element.id)
        }
    })

    //Map through each element in userWishListReleases
    userWishListReleases.forEach((element) => {
        //Compare userWishListReleases albumId to albumReleaseData id
        if (element.albumId === albumReleaseData.id) {
            //Set wishListReleaseId equal to the matching element's GraphQL generated id
            return (wishListReleaseId = element.id)
        }
    })

    console.log(collectionReleaseId);
    console.log(wishListReleaseId);

    /* #endregion GraphQL Album Id's */


    return (
        <Container>
            <Row>
                <Col className='col album-release-image-col' xs={12} s={12} md={7} lg={6} xl={5}>
                    <Image fluid src={albumReleaseData.images[0].uri} alt='Album Cover Art' />
                    {(Array.isArray(images) && images.length) ? <Button variant='dark' className='album-release-images-button' onClick={handleShowModal} block>SEE MORE IMAGES</Button> : null}
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
                    <h2 className='mt-3 mb-2'>{albumReleaseData.title}</h2>
                    <h3 className='text-muted'>{albumReleaseData.artists[0].name}</h3>
                    <Row className='album-release-details'>
                        <Col>
                            {(albumReleaseData.formats) ? <p><strong>Format:</strong> {albumReleaseData.formats[0].name} </p> : null}
                            {(albumReleaseData.genres) ? <p><strong>Genre:</strong> {albumReleaseData.genres[0]}</p> : null}
                            {(albumReleaseData.styles) ? <p><strong>Style:</strong> {albumReleaseData.styles.join(', ')}</p> : null}
                            {(albumReleaseData.labels) ? <p><strong>Label:</strong> {albumReleaseData.labels[0].name}</p> : null}
                            {(albumReleaseData.labels) ? <p><strong>Cat #:</strong> {albumReleaseData.labels[0].catno}</p> : null}
                            {(albumReleaseData.country) ? <p><strong>Release Country:</strong> {albumReleaseData.country}</p> : null}
                            {(albumReleaseData.year) ? <p><strong>Release Year:</strong> {albumReleaseData.year}</p> : null}
                        </Col>
                    </Row>
                    <Row className='album-release-add-buttons-row'>
                        <Col>
                            {(userCollectionReleases.some((element) => (element.albumId === albumReleaseData.id))) ?
                                <Button variant='dark' size='sm' id={collectionReleaseId} onClick={deleteReleaseFromCollection} block><FaRecordVinyl /> REMOVE FROM COLLECTION</Button> :
                                <Button variant='dark' size='sm' onClick={addReleaseToCollection} block><FaRecordVinyl /> ADD TO COLLECTION</Button>
                            }
                            {(userWishListReleases.some((element) => (element.albumId === albumReleaseData.id))) ?
                                <Button variant='dark' size='sm' block><FaHeart /> REMOVE FROM WISHLIST</Button> :
                                <Button variant='dark' size='sm' onClick={addReleaseToWishList} block><FaHeart /> ADD TO WISHLIST</Button>
                            }
                        </Col>
                    </Row>
                </Col>
                <AlbumReleaseTracks {...props} />
            </Row>
        </Container>);
};

export default AlbumRelease;