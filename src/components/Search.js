import React, { useState } from 'react';
import callDiscogsAPI from '../CallDiscogsAPI'
import SearchResults from './SearchResults';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';




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
        <Container>
            <Jumbotron className='text-center'>
            <h1>Search Vinyl Records</h1>
            <form>
                <label> {''}
                <input
                    type='text'
                    name='search'
                    placeholder='Enter album or artist name to get started'
                    onChange={handleSearchChange}
                />
                </label>
                <button onClick={handleSubmit}>Go!</button>                
            </form>
            </Jumbotron>            
            <SearchResults items={items}/>
        </Container>
    );
};

export default Search;