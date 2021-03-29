import React from 'react';
import '../App.css';
import AlbumVersions from '../components/AlbumVersions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function AlbumVersionsHeader(props) {

    console.log(props);

    /**Destructuring props*/
    const { handleViewAlbumVersions } = props.albumVersionsProps;
    const { albumVersionsData } = props.albumVersionsProps;

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
                        <Button onClick={handleViewAlbumVersions}>SEE MORE VERSIONS OF THIS ALBUM</Button>
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
                    <Button>HIDE VERSIONS</Button>
                </Col>
            </Row>
            <AlbumVersions />
        </Container>
    );
};

export default AlbumVersionsHeader;
