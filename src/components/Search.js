import React, { useState } from 'react';
import callDiscogsAPI from '../CallDiscogsAPI'
import SearchResults from './SearchResults';
import Pagination from './Pagination'
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'


function Search () {
    
    /*State managers*/
    const [search, setSearch] = useState(''); //Is it cheaper (on resources) to have as few useState calls as possible?
    const [items, setItems] = useState();
    const [currentPage, setCurrentPage] = useState();
    const [totalPages, setTotalPages] = useState();
    // const [apiTimeoutElapse, setApiTimeoutElapse] = useState(true);
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);

    /**Change handlers*/    
    
    /**Search form onChange handler*/
    const handleSearchChange = (e) => {
        e.preventDefault();
        
        setSearch({
            [e.target.name]: e.target.value
        });
        
        // if(apiTimeoutElapse && search.length > 4) {
          
        // //    useEffect(() => {

        // //    }
           
        
        // /**Call discogsAPI (search, per_page, page(use default value as 1))*/



        //     setApiTimeoutElapse(false);

            
        // }
    
        // setTimeout(() => {
        //     setApiTimeoutElapse(true);
        // }, 1000);
    };
 
    /**Search form button onSubmit handler*/
    const handleSubmit = (e) => {
        e.preventDefault();

        /**Call Discogs API*/
        callDiscogsAPI(search.search)
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result.results);
                setCurrentPage(result.pagination.page);
                setTotalPages(result.pagination.pages);
                console.log(result);
            }
        );

    };

    /**Pagination next page handler*/
    const handleNextPage = (e) => {
        e.preventDefault();

        let pageNum = (currentPage < totalPages) ? currentPage++ : currentPage;
            
        /**Call Discogs API*/
        callDiscogsAPI(search.search, pageNum)
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result.results);
                setCurrentPage(result.pagination.page);
                setTotalPages(result.pagination.pages);
            }
        );
    }

    /**Passing props*/
    const passingProps = {
        items: items,
        currentPage: currentPage,
        totalPages: totalPages,
        handleNextPage: handleNextPage,
    };
    
    return(
        <React.Fragment>
            <Jumbotron className='text-center'>
                <h1>Search Vinyl Records</h1>
                <p className='lead text-muted'>Find vinyl records to add to your collection or wishlist.</p>
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