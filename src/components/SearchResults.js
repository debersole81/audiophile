import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SearchResults (state) {

    console.log(state.items);

    if(state.items !== undefined) {
        return(
            <Container>
                {state.items.map((results) =>
                    <h1>{results.title}</h1>
                )};
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