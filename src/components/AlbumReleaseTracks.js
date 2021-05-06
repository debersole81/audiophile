import React from 'react';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

function AlbumReleaseTracks(props) {

    /** Destructuring props */
    const { albumReleaseData } = props.albumReleaseProps;

    return (
        <Container>
            <Row className='row album-release-tracks-row'>
                <Col className='col'>
                    <h5 className='album-release-tracks-thead'>Tracklist</h5>
                    <Table bordered responsive>
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Track Name</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        {albumReleaseData.tracklist.map((track, index) =>
                            <tbody key={index}>
                                <tr>
                                    <td>{track.position}</td>
                                    <td>{track.title}</td>
                                    <td>{(track.duration) ? track.duration : '-'}</td>
                                </tr>
                            </tbody>
                        )}
                    </Table>
                </Col>
            </Row>
        </Container>
    );};

export default AlbumReleaseTracks;