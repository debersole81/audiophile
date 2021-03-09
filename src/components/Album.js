import React, { useState } from 'react';
import AlbumImagesModal from './AlbumImagesModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

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
    /**Handle album images modal button click in album component*/
    const handleShowModal = (e) => {
        e.preventDefault();

        //Set showModal state to true
        setShowModal(true);
    };

    /**Handle album images modal close button click in AlbumImagesModal component*/
    const handleCloseModal = (e) => {
        e.preventDefault();

        //Set showModal to false
        setShowModal(false);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Image src={albumData.images[0].uri} style={{ height: '18rem', width: '18rem' }} alt='Album Cover Art' />
                    <Button variant='outline-dark' className='mt-2' style={{ width: '18rem' }} onClick={handleShowModal} block>View More Images</Button>
                </Col>
                <Col>
                    <h3>Album Details</h3>
                </Col>
            </Row>
            {showModal ? <AlbumImagesModal albumImages={albumData.images}/> : null}
        </Container>
        
    );

};

export default Album;