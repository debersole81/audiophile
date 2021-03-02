import React, { useState } from 'react';
import discogsAPISearch from '../helper-functions/DiscogsAPISearch'
import SearchResults from './SearchResults';
import Pagination from './Pagination'
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'


function Search () {
    
    /**Global variables*/
    
    /**Pagination display limit*/
    const paginationDisplayLimit = 5;

    /*State variables*/
    //const [search, setSearch] = useState(''); //done
    //const [data, setData] = useState([]); //done
    //const [pagination, setPagination] = useState({}); //done
    // const [minPaginationNum, setMinPaginationNum] = useState(0);
    // const [maxPaginationNum, setMaxPaginationNum] = useState(5);
    // const [apiTimeoutElapse, setApiTimeoutElapse] = useState(true);
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);

    /**Change handlers*/    
    


    /**Passing props*/ //only pass down what each component needs
    const passingProps = {
        data: data,
        pagination: pagination,
        paginationDisplayLimit: paginationDisplayLimit,
        minPaginationNum: minPaginationNum,
        maxPaginationNum: maxPaginationNum,
        handleCurrentPage: handleCurrentPage,
        handleFirstPage: handleFirstPage,
        handlePrevPage: handlePrevPage,
        handleNextPage: handleNextPage,
        handleLastPage: handleLastPage,        
    };
    
    return(
        <React.Fragment>
            <Jumbotron className='text-center'>
                <h1>Search Albums</h1>
                <p className='lead text-muted'>Find albums to add to your collection or wishlist.</p>
                    <Form className='form-inline justify-content-center'>
                        <Form.Group className='form-group'>
                            <Form.Label srOnly>Search</Form.Label>
                            <Form.Control className='form-control' type='text' name='search' placeholder='Type an album or artist name.' onChange={handleSearchChange}/>
                            <Button className='btn' variant='secondary' type='submit' size='md' onClick={handleSubmit}>Go!</Button>
                        </Form.Group>
                    </Form>
            </Jumbotron>            
            <SearchResults {...passingProps}/>
            <Pagination {...passingProps}/>
        </React.Fragment>
    );
};

export default Search;