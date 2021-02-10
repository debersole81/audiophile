import React, { useState } from 'react';
import callDiscogsAPI from '../CallDiscogsAPI'
import SearchResults from './SearchResults';
import Pagination from './Pagination'
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'


function Search () {
    
    /*State managers*/
    const [search, setSearch] = useState(''); 
    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState({});
    const [pageNumberLimit, setPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    // const [apiTimeoutElapse, setApiTimeoutElapse] = useState(true);
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);

    /**Change handlers*/    
    /**Search form change handler*/
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
 
    /**Search form button handler*/
    const handleSubmit = (e) => {
        e.preventDefault();

        /**Call Discogs API*/
        callDiscogsAPI(search.search)
        .then(res => res.json())
        .then(
            (result) => {
                setData(result.results);
                setPagination(result.pagination);
                console.log(result);
            }
        );

    };

    console.log(data);
    console.log(pagination);

    /**Pagination handlers*/
    /**Current page handler. Fires when a page number is clicked in Pagination.js*/
    const handleCurrentPage = (e) => { 
        e.preventDefault();
        
        const pageNum = e.target.id;
        console.log(pageNum);

        /**Call Discogs API*/
        callDiscogsAPI(search.search, pageNum)
        .then(res => res.json())
        .then(
            (result) => {
                setData(result.results);
                setPagination(result.pagination);
            }
        );
    };

    /**First page handler. Fires when Pagination.First is clicked in Pagination.js */
    const handleFirstPage = (e) => {
        e.preventDefault();

        const pageNum = 1;

        /**Call Discogs API*/
        callDiscogsAPI(search.search, pageNum)
        .then(res => res.json())
        .then(
            (result) => {
                setData(result.results);
                setPagination(result.pagination);
            }
        );       
    };

    /**Previous page handler. Fires when Pagination.Prev is clicked in Pagination.js*/
    const handlePrevPage = (e) => {
        e.preventDefault();

        const pageNum = (pagination.page > 1) ? pagination.page - 1 : pagination.page;

        /**Call Discogs API*/
        callDiscogsAPI(search.search, pageNum)
        .then(res => res.json())
        .then(
            (result) => {
                setData(result.results);
                setPagination(result.pagination);
            }
        );  
    };

    /**Next page handler. Fires when Pagination.Next is clicked in Pagination.js*/
    const handleNextPage = (e) => {
        e.preventDefault();

        const pageNum = (pagination.page < pagination.pages) ? pagination.page + 1 : pagination.page;

        /**Call Discogs API*/
        callDiscogsAPI(search.search, pageNum)
        .then(res => res.json())
        .then(
            (result) => {
                setData(result.results);
                setPagination(result.pagination);
            }
        );  
    };

    /**Last page handler. Fires when Pagniation.Last is clicked in Pagination.js*/
    const handleLastPage = (e) => {
        e.preventDefault();

        const pageNum = pagination.pages;

        /**Call Discogs API*/
        callDiscogsAPI(search.search, pageNum)
        .then(res => res.json())
        .then(
            (result) => {
                setData(result.results);
                setPagination(result.pagination);
            }
        );  
    };


    /**Passing props*/
    const passingProps = {
        data: data,
        pagination: pagination,
        pageNumberLimit: pageNumberLimit,
        minPageNumberLimit: minPageNumberLimit,
        maxPageNumberLimit: maxPageNumberLimit,
        handleCurrentPage: handleCurrentPage,
        handleFirstPage: handleFirstPage,
        handlePrevPage: handlePrevPage,
        handleNextPage: handleNextPage,
        handleLastPage: handleLastPage,        
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