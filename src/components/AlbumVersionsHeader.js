import React from 'react';
import '../App.css';
import AlbumVersions from '../components/AlbumVersions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function AlbumVersionsHeader(props) {

    /**Destructuring props*/
    const { albumData } = props.albumProps;
    const { handleAlbumVersions } = props.albumVersionsProps;
    

    return (
        <Container>
            <Row>
                <Col>
                    <h5>Album Versions</h5>
                </Col>
                <Col>
                    <Button></Button>
                </Col>
            </Row>
        </Container>
    )
};

export default AlbumVersionsHeader;
