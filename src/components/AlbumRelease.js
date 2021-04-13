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
    console.log('Render: AlbumRelease Component');

    /** Destructure props */
    const { albumReleaseData } = props.albumReleaseProps;
    console.log(albumReleaseData);

    /** State variables */
    /* Album release images modal component state variable */
    const [showModal, setShowModal] = useState(false);

    /** Callback functions */
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

    /** Prepare images for carousel react bootstrap component */
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

    return (
        <Container>
            <Row>
                <Col className='col album-image-col' xs={12} s={12} md={7} lg={6} xl={5}>
                    <Image fluid src={albumReleaseData.images[0].uri} alt='Album Cover Art' />
                    <Button variant='dark' className='album-images-button' onClick={handleShowModal} block>SEE MORE IMAGES</Button>
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
                    <Row className='album-details'>
                        <Col>
                            <p><strong>Format:</strong> {albumReleaseData.formats[0].name}</p>
                            <p><strong>Genre:</strong> {albumReleaseData.genres[0]}</p>
                            <p><strong>Style:</strong> {albumReleaseData.styles.join(', ')}</p>
                            <p><strong>Label:</strong> {albumReleaseData.labels[0].name}</p>
                            <p><strong>Cat #:</strong> {albumReleaseData.labels[0].catno}</p>
                            <p><strong>Release Country:</strong> {albumReleaseData.country}</p>
                            <p><strong>Release Year:</strong> {albumReleaseData.year}</p>
                        </Col>
                    </Row>
                    <Row className='album-add-buttons-row'>
                        <Col>
                            <Button variant='dark' size='sm' block><FaRecordVinyl /> ADD TO COLLECTION</Button>
                            <Button variant='dark' size='sm' block><FaHeart /> ADD TO WISHLIST</Button>
                        </Col>
                    </Row>
                </Col>
                <AlbumReleaseTracks {...props}/>
            </Row>
        </Container>);
};

export default AlbumRelease;