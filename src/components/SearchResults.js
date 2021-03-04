import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SearchResults(props) {

    console.log('Render: Search Results Component');
    console.log(props.searchData);

    if (Array.isArray(props.searchData) && props.searchData.length) {
        return (

            //this works
            // <div>
            //     {props.searchData.map((results) =>
            //         <ul key={results.id}>
            //             <li className='album-links' id={results.master_id} onClick={props.handleAlbumClick}>{results.title}</li>
            //         </ul>
            //     )}
            // </div>


            //retrieving attributes seems to make retreiving DOM attributes difficult/if not impossible.
            //I have been researching for longer than I should be this morning to no avail.
            //It appears that I might be albe to use a useRef hook, but I don't think that is the answer because the hook is typically used with mutable values.
            //I could use a button, or just scrap react-bootstrap and use vanilla bootstrap or something else.
            
            <Container>
                <Row>
                    {props.searchData.map((results) =>
                        <Col key={results.id} style={{ padding: '1rem' }}>
                            <Card style={{ width: '12rem' }} id={results.master_id} onClick={props.handleAlbumClick}>
                                <Card.Img variant='top' src={results.cover_image} style={{ height: '12rem' }} alt='Album Cover Art' />
                                <Card.Body>
                                    <Card.Title className='text-truncate'>{results.title.split(' - ')[1]}</Card.Title>
                                    <Card.Subtitle className='mb-2 text-truncate text-muted'>{results.title.split(' - ')[0]}</Card.Subtitle>
                                    <Card.Text className='text-truncate'>
                                        {results.label[0]}<br />
                                        {results.year}<br />
                                    </Card.Text>
                                    {/**This also works, but I don't want a button. I'd prefer that the entire card is clickable*/}
                                    {/* <Button id={results.master_id} onClick={props.handleAlbumClick}>View</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }

    return (null);
    // //     <Container className='text-center'>
    //         <h1>Search for something!</h1>
    //     </Container>
    // );
};


export default SearchResults;