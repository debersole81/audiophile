import React, { useState } from 'react';
import callDiscogsAPI from '../CallDiscogsAPI'
import SearchResults from './SearchResults';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'




function Search () {
    
    /*State managers*/
    const [search, setSearch] = useState('');
    const [items, setItems] = useState();
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

    console.log(search.search);
    console.log(items);
    
    /**Search form button onClick handler*/
    const handleSubmit = (e) => {
        e.preventDefault();

        /**Call Discogs API*/
        callDiscogsAPI(search.search)
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result.results);
            }
        );

    }

    
    return(
        <React.Fragment>
            <Jumbotron className='text-center'>
                <h1>Search Vinyl Records</h1>
                <p className='lead text-muted'>Find vinyl records to add to your collection or wishlist.</p>
                    <Form className='form-inline justify-content-center'>
                        <Form.Group>
                            <Form.Label srOnly>Search</Form.Label>
                            <Form.Control className='col-sm-8' type='text' name='search' placeholder='Type an album or artist name.' onChange={handleSearchChange}/>
                            <Button variant='secondary' type='submit' size='md' onClick={handleSubmit}>Go!</Button>
                        </Form.Group>
                    </Form>
            </Jumbotron>            
            <SearchResults items={items}/>
        </React.Fragment>
    );
};

export default Search;