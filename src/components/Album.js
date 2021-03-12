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

    // /**Prepare images for carousel react bootstrap component*/
    // //Build empty array
    // const images = [];

    // //Format images and push onto images array
    // albumReleaseData.images.forEach((element, index) => {

    //     if (element.type === 'secondary') {
    //         images.push(
    //             <Carousel.Item key={index}>
    //                 <img
    //                     className='d-block w-100'
    //                     src={element.uri}
    //                     alt={`More images slide ${index}`}
    //                 />
    //             </Carousel.Item>
    //         )
    //     };
    // });

    return (null
        // <Container>
        //     <Row>
        //         <Col>
        //             <Image src={albumReleaseData.images[0].uri} style={{ height: '18rem', width: '18rem' }} alt='Album Cover Art' />
        //             <Button variant='outline-dark' className='mt-2' style={{ width: '18rem' }} onClick={handleShowModal} block>See More Images</Button>
        //             <Modal show={showModal} onHide={handleCloseModal} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
        //                 <Modal.Header closeButton />
        //                 <Modal.Body id='contained-modal-title-vcenter'>
        //                     <Carousel>
        //                         {images}
        //                     </Carousel>
        //                 </Modal.Body>
        //             </Modal>
        //         </Col>
        //         <Col>
        //             <h3 className='mb-4'>{albumReleaseData.title}</h3>
        //             <div className='text-muted'>
        //                 <h4 className>{albumReleaseData.artists[0].name}</h4>
        //                 <p style={{margin: 0}}>{albumReleaseData.labels[0].name} - {albumReleaseData.labels[0].catno}</p>
        //                 <p style={{margin: 0}}>{albumReleaseData.formats[0].name}</p>
        //                 <p style={{margin: 0}}>{albumReleaseData.country} &#8226; {albumReleaseData.year}</p>
        //             </div>
        //         </Col>
        //     </Row>
        // </Container>

    );

};

export default Album;