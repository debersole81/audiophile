import React, { useEffect, useState } from 'react';
import DiscogsAPIRelease from '../helper-functions/DiscogsAPIRelease';
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
    //================================================================

    console.log('Render: Album Component');
    console.log(albumData);

    /**State variables*/
    /**Album release data state variable*/
    const [albumReleaseData, setAlbumReleaseData] = useState({});

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
    const handleCloseModal = () => {

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

    useEffect(() => {
        fetch('https://api.discogs.com/releases/1582643')
            .then(res => res.json())
            .then((result) => console.log(result))
    }, []);


    return (
        <Container>
            <Row>
                <Col>
                    <Image src={albumData.images[0].uri} style={{ height: '18rem', width: '18rem' }} alt='Album Cover Art' />
                    <Button variant='outline-dark' className='mt-2' style={{ width: '18rem' }} onClick={handleShowModal} block>See More Images</Button>
                    <Modal show={showModal} onHide={handleCloseModal} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
                        <Modal.Header closeButton />
                        <Modal.Body id='contained-modal-title-vcenter'>
                            <Carousel>
                                {images}
                            </Carousel>
                        </Modal.Body>
                    </Modal>
                </Col>
                <Col>
                    <h3 className='mb-3'>{albumData.title}</h3>
                    <h4>{albumData.artists[0].name}</h4>
                    <p>Label: Capitol Records</p>
                </Col>
            </Row>
        </Container>

    );

};

export default Album;