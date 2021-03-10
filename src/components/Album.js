import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
    /**Album images modal component state variables*/
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

    console.log(showModal);

    return (
        <Container>
            <Row>
                <Col>
                    <Image src={albumData.images[0].uri} style={{ height: '18rem', width: '18rem' }} alt='Album Cover Art' />
                    <Button variant='outline-dark' className='mt-2' style={{ width: '18rem' }} onClick={handleShowModal} block>Show More Images</Button>
                    <Modal show={showModal} onHide={handleCloseModal} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
                        <Modal.Header closeButton />
                        <Modal.Body id='contained-modal-title-vcenter'>
                            <h1>This is a Modal</h1>
                        </Modal.Body>
                    </Modal>
                </Col>
                <Col>
                    <h3>Album Details</h3>
                </Col>
            </Row>
        </Container>

    );

};

export default Album;