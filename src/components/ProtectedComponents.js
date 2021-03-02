import React, { useState, useCallback } from "react";
import { Route, Switch } from 'react-router-dom';
import DiscogsAPISearch from '../helper-functions/DiscogsAPISearch';
import Album from './Album';
import Collection from './Collection';
import Dashboard from './Dashboard';
import Header from './Header';
import Randomizer from './Randomizer';
import Search from './Search';
import WishList from './WishList';


function ProtectedComponents(props) {

    console.log('Render: Protected Components');

    /**State variables*/
    /**Search component state variables*/
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);

    /**SearchResults component state variables*/
    const [searchResultsPagination, setSearchResultsPagination] = useState({});
    const [searchResultsMinPages, setSearchResultsMinPages] = useState(0);
    const [searchResultsMaxPages, setSearchResultsMaxPages] = useState(5);

    /**Callback functions*/
    /**Search component callback functions*/
    /**Handle search form input field*/
    const handleSearch = useCallback(({ target }) => {
        setSearch(target.value);
    });

    /**Handle search form submit*/
    const handleSearchSubmit = useCallback((e) => {
        e.preventdefault();

        //Call Discogs API Search endpoint
        DiscogsAPISearch(search)
            .then(res => res.json())
            .then(
                (result) => {
                    setSearchData(result.results);
                    setSearchResultsPagination(result.pagination);
                }
            );
    });

    /**SearchResults component pagination callback functions*/
    /**Handle current page click*/
    const handleCurrentSearchResultsPage = (e) => {
        e.preventdefault();

        //Assign Pagination component page id to pageNum variable
        const pageNum = e.target.id;

        //Call Discogs API Search endpoint
        DiscogsAPISearch(search, pageNum)
            .then(res => res.json())
            .then(
                (result) => {
                    setSearchData(result.results);
                    setSearchResultsPagination(result.pagination);
                }
            );

        //Scroll to the top of the browser window after refreshing results
        window.scroll(0, 0);
    };

    /**Handle first page click*/
    const handleFirstSearchResultsPage = (e) => {
        e.preventdefault();

        //Set min and max page numbers to initial values
        setSearchResultsMinPages(0);
        setSearchResultsMaxPages(5);

        //Call Discogs API Search endpoint
        DiscogsAPISearch(search, 1)
            .then(res => res.json())
            .then(
                (result) => {
                    setSearchData(result.results);
                    setSearchResultsPagination(result.pagination);
                }
            );
        
        //Scroll to the top of the browser window after refreshing results
        window.scrollTo(0,0);
    };


    return (
        <div>
            <Header logoutSubmit={props.logoutSubmit} />
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/collection' component={Collection} />
                <Route exact path='/wishlist' component={WishList} />
                <Route exact path='/randomizer' component={Randomizer} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/album' component={Album} />
            </Switch>
        </div>
    );
};

export default ProtectedComponents;