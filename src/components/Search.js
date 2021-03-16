import React from 'react';
import SearchResults from './SearchResults';
import SearchResultsPagination from './SearchResultsPagination'
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';


function Search(props) {

    console.log('Render: Search Component');

    return (
        <React.Fragment>
            <Jumbotron className='search-jumbotron'>
                <Row className='row'>
                    <Col className='col'>
                        <h1>Search Albums</h1>
                    </Col>
                </Row>
                <p className='lead text-muted'>Find albums to add to your collection or wishlist.</p>
                <Form className='justify-content-center' onSubmit={props.searchProps.handleSearchSubmit}>
                    <Form.Group className='form-group'>
                        <Form.Label srOnly>Search</Form.Label>
                        <Form.Control
                            className='form-control'
                            type='text'
                            name='search'
                            placeholder='Type an album or artist name.'
                            value={props.searchProps.search}
                            onChange={props.searchProps.handleSearch}
                        />
                    </Form.Group>
                </Form>
            </Jumbotron>
            <SearchResults {...props.searchResultsProps} />
            <SearchResultsPagination {...props.searchResultsPaginationProps} />
        </React.Fragment>
    );
};

export default Search;