import React from 'react';
import SearchResults from './SearchResults';
import SearchResultsPagination from './SearchResultsPagination'
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'


function Search(props) {

    console.log(props.searchData);

    return (
        <React.Fragment>
            <Jumbotron className='text-center'>
                <h1>Search Albums</h1>
                <p className='lead text-muted'>Find albums to add to your collection or wishlist.</p>
                <Form className='justify-content-center' onSubmit={props.handleSearchSubmit}>
                    <Form.Group className='form-group'>
                        <Form.Label srOnly>Search</Form.Label>
                        <Form.Control className='form-control' type='text' name='search' placeholder='Type an album or artist name.' value={props.search} onChange={props.handleSearch} />
                    </Form.Group>
                </Form>
            </Jumbotron>
            {/* <SearchResults />
            <SearchResultsPagination /> */}
        </React.Fragment>
    );
};

export default Search;