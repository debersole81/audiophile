import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SearchResults (state) {

    console.log(state.items);

    if(state.items !== undefined) {
        return(
            <Container>
                <Row>
                    {state.items.map((results) =>
                        <Col key={results.id} style={{ padding: '1rem' }}>
                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant='top' src={results.cover_image} style={{ height: '12rem' }} alt='Album Cover Art'/>
                                <Card.Body>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    )};
                </Row>
            </Container>
        );
    }

    return(
        <div>
            <h1>Search for something!</h1>
        </div>
    );
};


export default SearchResults;