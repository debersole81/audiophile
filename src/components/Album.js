import React from 'react';
import Container from 'react-bootstrap/Container';

function Album( { albumProps: {albumData} } ) {

    console.log(albumData);

    return (
        <Container>
            <h1>Album View</h1>
        </Container>
    )

};

export default Album;