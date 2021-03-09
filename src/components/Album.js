import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Album({ albumProps: { albumData } }) {

    console.log('Render: Album Component');
    
    console.log(albumData);

    return (
        <Container>
            <Row xs={2} md={4} lg={6}>
                <Col md={4}>
                    <Image src={albumData.images[0].uri} style={{ height: '18rem', width: '18rem' }} alt='Album Cover Art' />
                </Col>
                <Col md={{ span: 2, offset: 2 }}>
                    <h3>Album Details</h3>
                </Col>
            </Row>
        </Container>
    );

};

export default Album;