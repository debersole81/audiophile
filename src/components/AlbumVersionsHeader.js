import React from 'react';
import '../App.css';
import AlbumVersions from '../components/AlbumVersions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

/**Notes
 * Build button to 'View Album Versions'
 * Button will fire a callback in ProtectedComponents.js and provide access to master_id
 * Protected components callback will... 
 * ...call Discogs Master Release Versions EP
 * ...setAlbumVersions data
 * ...setAlbumVersions pagination data (but do I need this if I scroll the overflow?)

 */

/**Refactoring
 * Is there a better way to view/hide the album versions component without clearing and setting state each time?
 */


function AlbumVersionsHeader(props) {

    console.log('Render: AlbumVersionsHeader Component');
    console.log(props);

    /**Destructuring props*/
    const { albumData } = props.albumProps;
    const { handleViewAlbumVersions } = props.albumVersionsProps;
    const { handleHideAlbumVersions } = props.albumVersionsProps;
    const { handleAlbumClick } = props.albumVersionsProps;
    const { albumVersionsData } = props.albumVersionsProps;

    console.log(albumData);
    console.log(albumVersionsData);

    //pass handleAlbumVersions and albumVersionsData to the AlbumVersions component

    if (Object.keys(albumVersionsData).length === 0 && albumVersionsData.constructor === Object) {
        return (
            <Container>
                <Row className='row album-versions-header-row'>
                    <Col className='col album-versions-header-h5-col' xs={12} s={12} lg={6}>
                        <h5 className='album-versions-header-thead'>Album Versions</h5>
                    </Col>
                    <Col className='col album-versions-header-button-col' xs={12} s={12} lg={6}>
                        <Button size='sm' variant='outline-light' className='album-versions-header-button' onClick={handleViewAlbumVersions}>SHOW VERSIONS</Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container>
            <Row className='row album-versions-header-row'>
                <Col className='col album-versions-header-h5-col' xs={12} s={12} lg={6}>
                    <h5 className='album-versions-header-thead'>Album Versions</h5>
                </Col>
                <Col className='col album-versions-header-button-col' xs={12} s={12} lg={6}>
                    <Button size='sm' variant='outline-light' className='album-versions-header-button' onClick={handleHideAlbumVersions}>HIDE VERSIONS</Button>
                </Col>
            </Row>
            <AlbumVersions albumVersionsProps={props.albumVersionsProps} albumVersionsPaginationProps={props.albumVersionsPaginationProps} />
        </Container>
    );
};

export default AlbumVersionsHeader;
