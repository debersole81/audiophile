import React, { useState } from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

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
                    <Button variant='dark' className='album-button' onClick={handleShowModal} block>See More Images</Button>
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
                    <h3 className='mb-4'>{albumData.title}</h3>
                    <div>
                        <h4>{albumData.artists[0].name}</h4>
                        <p style={{ margin: 0 }}>{albumData.labels[0].name} - {albumData.labels[0].catno}</p>
                        <p style={{ margin: 0 }}>{albumData.formats[0].name}</p>
                        <p style={{ margin: 0 }}>{albumData.country} &#8226; {albumData.year}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );

};

export default Album;