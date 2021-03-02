import React from 'react';
import SearchResults from './SearchResults';
import Pagination from './Pagination'
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'


function Search(props) {

    return (
        <React.Fragment>
            <Jumbotron className='text-center'>
                <h1>Search Albums</h1>
                <p className='lead text-muted'>Find albums to add to your collection or wishlist.</p>
                <Form className='form-inline justify-content-center'>
                    <Form.Group className='form-group'>
                        <Form.Label srOnly>Search</Form.Label>
                        <Form.Control className='form-control' type='text' name='search' placeholder='Type an album or artist name.' onChange={props.handleSearch} />
                        <Button className='btn' variant='secondary' type='submit' size='md' onClick={props.handleSearchSubmit}>Go!</Button>
                    </Form.Group>
                </Form>
            </Jumbotron>
            {/* <SearchResults />
            <Pagination /> */}
        </React.Fragment>
    );
};

export default Search;