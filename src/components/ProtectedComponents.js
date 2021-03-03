import React, { useState } from "react";
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

    /**SearchResults component state variables*/
    const [searchData, setSearchData] = useState([]);
    const [searchResultsPagination, setSearchResultsPagination] = useState({});
    const [searchResultsMinPages, setSearchResultsMinPages] = useState(0);
    const [searchResultsMaxPages, setSearchResultsMaxPages] = useState(5);

    /**Album component state variables*/
    const [albumData, setAlbumData] = useState({});

    /**Callback functions*/
    /**Search component callback functions*/
    /**Handle search form input field*/
    const handleSearch = (({ target }) => {
        setSearch(target.value);
    });

    /**Handle search form submit*/
    const handleSearchSubmit = ((e) => {
        e.preventDefault();

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
        e.preventDefault();

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

    /**Handle first page button click*/
    const handleFirstSearchResultsPage = (e) => {
        e.preventDefault();

        //Set min and max pages to initial values
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
        window.scrollTo(0, 0);
    };

    /**Handle previous page button click*/
    const handlePreviousSearchResultsPage = (e) => {
        e.preventDefault();

        //If search result total pages are greater than 1, assign a value to pageNum that is equal to the current page - 1
        const pageNum = (searchResultsPagination.page > 1) ? searchResultsPagination.page - 1 : searchResultsPagination.page;

        //Decrement min and max pages by 5
        if ((pageNum) % 5 === 0) {
            setSearchResultsMinPages(searchResultsMinPages - 5);
            setSearchResultsMaxPages(searchResultsMaxPages - 5);
        };

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
        window.scrollTo(0, 0);
    };

    /**Handle next page button click*/
    const handleNextSearchResultsPage = (e) => {
        e.preventDefault();

        //If the current search result page is less than the total search result pages, assign a value to pageNum that is equal to the current page + 1
        const pageNum = (searchResultsPagination.page < searchResultsPagination.pages) ? searchResultsPagination.page + 1 : searchResultsPagination.page;

        //Increment min and max pages by 5
        if (pageNum > searchResultsMaxPages) {
            setSearchResultsMinPages(searchResultsMinPages + 5);
            setSearchResultsMaxPages(searchResultsMaxPages + 5);
        };

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
        window.scrollTo(0, 0);
    };

    /**Handle last page button click*/
    const handleLastSearchResultsPage = (e) => {
        e.preventDefault();

        //Set min page to total search result pages - 5 and max page to the value to total search result pages
        setSearchResultsMinPages(searchResultsPagination.pages - 5);
        setSearchResultsMaxPages(searchResultsPagination.pages);

        //Call Discogs API Search endpoint
        DiscogsAPISearch(search, searchResultsPagination.pages)
            .then(res => res.json())
            .then(
                (result) => {
                    setSearchData(result.results);
                    setSearchResultsPagination(result.pagination);
                }
            );

        //Scroll to the top of the browser window after refreshing results
        window.scrollTo(0, 0);
    };

    /**Props objects*/
    /**Search component props*/
    const searchProps = { search, handleSearch, handleSearchSubmit };

    /**SearchResults component props*/
    const searchResultsProps = { searchData };

    /**Pagination component props*/
    const searchResultsPaginationProps = { 
        searchResultsPagination, 
        searchResultsMinPages, 
        searchResultsMaxPages,
        handleCurrentSearchResultsPage,
        handleFirstSearchResultsPage,
        handlePreviousSearchResultsPage,
        handleNextSearchResultsPage,
        handleLastSearchResultsPage,        
     };

    return (
        <div>
            <Header logoutSubmit={props.headerProps.logoutSubmit} />
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/collection' component={Collection} />
                <Route exact path='/wishlist' component={WishList} />
                <Route exact path='/randomizer' component={Randomizer} />
                <Route exact path='/search' render={(props) =>
                    <Search
                        searchProps={searchProps}
                        searchResultsProps={searchResultsProps}
                        searchResultsPaginationProps={searchResultsPaginationProps} />}
                />
                <Route exact path='/album' component={Album} />
            </Switch>
        </div>
    );
};

export default ProtectedComponents;