import React, { useState } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { FaHeart } from 'react-icons/fa';

function Album({ albumProps: { albumData } }) {

    //================================================================
    //                         Notes
    //================================================================
    //Need to develop a way to restore previous state (albumData) after a page reload in the browser
    //Two researched options to accomplish:
    //Save state loclally via localstorage/indexedDB
    //Save state at server side 
    //Make a wrapper for modal to prevent album component render on modal open and close
    //================================================================

    console.log('Render: Album Component');
    console.log(albumData);

    /**State variables*/

    /**Album images modal component state variable*/
    const [showModal, setShowModal] = useState(false);

    /**Callback functions*/
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

    /**Prepare images for carousel react bootstrap component*/
    //Build empty array
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

    return (

        <Container>
            <Row>
                <Col className='col album-col' xs={12} s={12} md={6} lg={6}>
                    <Image fluid src={albumData.images[0].uri} className='album-image' alt='Album Cover Art' />
                    <Button variant='dark' className='album-images-button' onClick={handleShowModal} block>See More Images</Button>
                    <Modal show={showModal} onHide={handleCloseModal} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
                        <Modal.Header closeButton />
                        <Modal.Body id='contained-modal-title-vcenter'>
                            <Carousel>
                                {images}
                            </Carousel>
                        </Modal.Body>
                    </Modal>
                </Col>
                <Col className='col' xs={12} s={12} md={6} lg={6}>
                    <h2 className='mt-3 mb-2'>{albumData.title}</h2>
                    <h3 className='text-muted'>{albumData.artists[0].name}</h3>
                    <Row className='album-details'>
                        <Col>
                            <p><strong>Format:</strong> {albumData.formats[0].name}</p>
                            <p><strong>Genre:</strong> {albumData.genres[0]}</p>
                            <p><strong>Label:</strong> {albumData.labels[0].name}</p>
                            <p><strong>Cat #:</strong> {albumData.labels[0].catno}</p>
                            <p><strong>Release Country:</strong> {albumData.country}</p>
                            <p><strong>Release Year:</strong> {albumData.year}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button>Collection</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant='dark'><FaHeart /> ADD TO WISHLIST</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );

};

export default Album;