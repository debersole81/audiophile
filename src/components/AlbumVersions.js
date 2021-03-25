import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


/**Notes
 * Build button to 'View Album Versions'
 * Button will fire a callback in ProtectedComponents.js and provide access to master_id
 * Protected components callback will... 
 * ...call Discogs Master Release Versions EP
 * ...setAlbumVersions data
 * ...setAlbumVersions pagination data (but do I need this if I scroll the overflow?)
 * Build button to 'Hide Album Versions'
 * Button will clear albumVersions data in Protected component
 * Button will clear albumVersions data in Protected component
 * View/Hide buttons will render based on an inline conditional that ...
 * ...will evaluate albumVersions state object
 * ...if albumVersions in falsy, render show button
 * ...if albumVersions is truthy, render hide button 
 */


function AlbumVersions(props) {

    console.log(props);

    /**Destructure props*/
    const { albumData } = props.albumProps;
    const { handleViewAlbumVersions } = props.albumVersionsProps;
    const { albumVersionsData } = props.albumVersionsProps;

    console.log(albumVersionsData);


    return (
        <Container>
            <Row className='row'>
                <Col className='col'>
                    <h5>Album Versions</h5>
                </Col>
                <Col className='col'>
                    <Button id={albumData.master_id} onClick={handleViewAlbumVersions}>View Album Versions</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table>

                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default AlbumVersions;