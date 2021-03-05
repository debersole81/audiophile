import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function Album({ albumProps: { albumData } }) {

    console.log(albumData);

    return (
        <Container>
            <Row xs={2} md={4} lg={6}>
                <Col>
                    <h1>Album Image View</h1>
                </Col>
                <Col>
                    <h1>Album Details</h1>
                </Col>
            </Row>
        </Container>
    )

};

export default Album;