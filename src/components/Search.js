import React from 'react';
import '../App.css';
import SearchResults from './SearchResults';
import SearchResultsPaginationWrapper from './SearchResultsPaginationWrapper';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Search(props) {

    /** #region Props destructure */
    const { search, onSearchFormChange, searchSubmit, searchDataLoading } = props.searchProps;
    /** #endregion Props destructure */

    return (
        <React.Fragment>
            <Jumbotron className='search-jumbotron'>
                <Row className='row'>
                    <Col className='col'>
                        <h1>Search Albums</h1>
                        <p className='lead text-muted'>Find an album to add to your collection or wishlist.</p>
                    </Col>
                </Row>
                <Row className='row justify-content-center'>
                    <Col className='col' md={10} lg={8} xl={8}>
                        <Form className='search-form' onSubmit={searchSubmit}>
                            <Form.Group>
                                <Form.Label srOnly>Search</Form.Label>
                                <Row className='row justify-content-center'>
                                    <Col className='col search-form-col' xs={10} sm={11} md={11} lg={11} xl={11}>
                                        <Form.Control
                                            type='text'
                                            name='search'
                                            placeholder='Type an album or artist name.'
                                            value={search}
                                            onChange={onSearchFormChange}
                                        />
                                    </Col>
                                    <Col className='col search-button-col' xs={2} sm={1} md={1} lg={1} xl={1}>
                                        {(searchDataLoading) ?
                                            <Button variant='dark' size='sm' className='search-button'>
                                                <Spinner
                                                    as='span'
                                                    animation='border'
                                                    size='sm'
                                                    role='status'
                                                    aria-hidden='true'
                                                />
                                                <span className='sr-only'>Loading...</span>
                                            </Button> :
                                            <Button variant='dark' size='sm' className='search-button' onClick={searchSubmit}>Go!</Button>
                                        }
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Jumbotron>
            <SearchResults searchResultsProps={props.searchResultsProps} />
            <SearchResultsPaginationWrapper searchResultsPaginationProps={props.searchResultsPaginationProps} />
        </React.Fragment>
    );
};

export default Search;