import React from 'react';
import '../App.css';
import AlbumVersions from '../components/AlbumVersions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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


function AlbumVersionsHeader(props) {

    console.log(props);

    /**Destructuring props*/
    const { albumData } = props.albumProps;
    const { handleViewAlbumVersions } = props.albumVersionsProps;
    const { albumVersionsData } = props.albumVersionsProps;

    console.log(albumData);
    console.log(albumVersionsData);

    //pass handleAlbumVersions and albumVersionsData to the AlbumVersions component

    if (Object.keys(albumVersionsData).length === 0 && albumVersionsData.constructor === Object) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h5>Album Versions</h5>
                    </Col>
                    <Col>
                        <Button id={albumData.master_id} onClick={handleViewAlbumVersions}>SEE MORE VERSIONS OF THIS ALBUM</Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h5>Album Versions</h5>
                </Col>
                <Col>
                    <Button>HIDE ALBUM VERSIONS</Button>
                </Col>
            </Row>
            <AlbumVersions />
        </Container>
    );
};

export default AlbumVersionsHeader;
