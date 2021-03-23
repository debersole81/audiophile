import React from 'react';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

/**
 * Pass albumData props
 * Destructure props
 * Use bootstrap table to display position, title, and duration
 * tracklist data is an array of objects
 * will need a way to map through each object and add it to the bootstrap table component (forEach? .map?)
 * use a conditional to display a - if track duration value is null 
*/

function AlbumTracks(albumData) {

    console.log('Render: AlbumTracks Component');
    console.log(albumData);

    return (
        <Container>
            <Row className='row'>
                <Col className='col'>
                    <Table>
                        <thead>Tracklist</thead>
                        <tbody>
                            
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default AlbumTracks;

