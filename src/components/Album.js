import React, { useState } from 'react';
import AlbumImagesModal from './AlbumImagesModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Album({ albumProps: { albumData } }) {

    console.log('Render: Album Component');
    console.log(albumData);

    /**State variables*/
    /**Album images modal component state variables*/
    const [showModal, setShowModal] = useState(false); 

    /**Callback functions*/
    /**Handle more images button click*/
    const handleMoreImages = (e) => {
        e.preventDefault();

        //Set showModal state to true
        setShowModal(true);
    };

    console.log(showModal);

    return (
        <Container>
            <Row>
                <Col>
                    <Image src={albumData.images[0].uri} style={{ height: '18rem', width: '18rem' }} alt='Album Cover Art' />
                    <Button variant='outline-dark' className='mt-2' style={{ width: '18rem' }} onClick={handleMoreImages} block>View More Images</Button>
                </Col>
                <Col>
                    <h3>Album Details</h3>
                </Col>
            </Row>
            {showModal ? <AlbumImagesModal/> : null}
        </Container>
        
    );

};

export default Album;