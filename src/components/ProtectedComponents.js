import React, { useState } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import DiscogsAPISearch from '../helper-functions/DiscogsAPISearch';
import DiscogsAPIMasterRelease from '../helper-functions/DiscogsAPIMasterRelease';
import DiscogsAPIRelease from '../helper-functions/DiscogsAPIRelease';
import discogsAPIMasterReleaseVersions from '../helper-functions/DiscogsAPIMasterReleaseVersions';
import Album from './Album';
import Collection from './Collection';
import Dashboard from './Dashboard';
import Header from './Header';
import Randomizer from './Randomizer';
import Search from './Search';
import WishList from './WishList';


function ProtectedComponents(props) {

    console.log('Render: Protected Components');

    /**Global variables*/
    const history = useHistory();

    /**State variables*/
    /**Search component state variables*/
    const [search, setSearch] = useState('');

    /**SearchResults component state variables*/
    const [searchData, setSearchData] = useState([]);

    /**SearchREsultsPagination component state variables*/
    const [searchResultsPagination, setSearchResultsPagination] = useState({});
    const [searchResultsMinPages, setSearchResultsMinPages] = useState(0);
    const [searchResultsMaxPages, setSearchResultsMaxPages] = useState(5);

    /**Album component state variables*/
    const [albumData, setAlbumData] = useState({});

    /**AlbumVersions component state variables*/
    const [albumVersionsData, setAlbumVersionsData] = useState({});

    /**AlbumVersionsPagination component state variables*/
    const [albumVersionsPagination, setAlbumVersionsPagination] = useState({});
    const [albumVersionsMinPages, setAlbumVersionsMinPages] = useState(0);
    const [albumVersionsMaxPages, setAlbumVersionsMaxPages] = useState(5);

    /**Callback functions*/
    /**Search component callback functions*/
    /**Handle search form input field*/
    const handleSearch = (({ target }) => {
        setSearch(target.value);
    });

    /**Handle search form submit*/
    const handleSearchSubmit = (e) => {
        e.preventDefault();

        //Clear searchResultsMinPages & searchResultsMaxPages state
        setSearchResultsMinPages(0);
        setSearchResultsMaxPages(5);

        //Call Discogs API Search endpoint
        //Set searchData
        //Set searchResultsPagination
        DiscogsAPISearch(search)
            .then(res => res.json())
            .then(
                (result) => {
                    setSearchData(result.results);
                    setSearchResultsPagination(result.pagination);
                }
            );
    };

    /**SearchResults component callback functions*/
    /**Handle album click*/
    const handleAlbumClick = (e) => {
        e.preventDefault();

        //Clear albumVersions state
        setAlbumVersionsData({});

        //Clear albumVersionsMinPages & albumVersionsMaxPages state
        setAlbumVersionsMinPages(0);
        setAlbumVersionsMaxPages(5);

        //Call Discogs API Master Release endpoint to retreive main_release ID
        //Then call Discgos API Release endpoint passing main_release ID as param
        //Set albumData
        DiscogsAPIMasterRelease(e.target.id)
            .then(masterres => masterres.json())
            .then(
                (result) => {
                    DiscogsAPIRelease(result.main_release)
                        .then(releaseres => releaseres.json())
                        .then(
                            (result) => {
                                setAlbumData(result)
                                history.push('/album');
                            })
                })
    };

    /**SearchResultsPagination component callback functions*/
    /**Handle current page click*/
    const handleCurrentSearchResultsPage = (e) => {
        e.preventDefault();

        //Assign Pagination component page id to pageNum variable
        const pageNum = e.target.id;

        //Call Discogs API Search endpoint
        //Set searchData
        //Set searchResultsPagination
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
        //Set searchData
        //Set searchResultsPagination
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

        //If the current search results page is greater than 1, assign a value to pageNum that is equal to the current page - 1
        const pageNum = (searchResultsPagination.page > 1) ? searchResultsPagination.page - 1 : searchResultsPagination.page;

        //Decrement min and max pages by 5
        if ((pageNum) % 5 === 0) {
            setSearchResultsMinPages(searchResultsMinPages - 5);
            setSearchResultsMaxPages(searchResultsMaxPages - 5);
        };

        //Call Discogs API Search endpoint
        //Set searchData
        //Set searchResultsPagination
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
        //Set searchData
        //Set searchResultsPagination
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
        //Set searchData
        //Set searchResultsPagination
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

    /**AlbumVersionsHeader component callback functions*/
    /**Handle view album versions button click*/
    const handleViewAlbumVersions = (e) => {
        e.preventDefault();

        console.log('clicked');

        //Call Discogs Master Release Versions endpoint
        //Set albumVersionsData
        discogsAPIMasterReleaseVersions(albumData.master_id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setAlbumVersionsData(result.versions);
                    setAlbumVersionsPagination(result.pagination);
                }
            );
    };

    console.log(albumVersionsData);
    console.log(albumVersionsPagination);

    /**Handle hide albun versions button click*/
    const handleHideAlbumVersions = (e) => {
        e.preventDefault();

        setAlbumVersionsData({});
    };

    /**AlbumVersionsPagination component callback functions*/
    /**Handle current page click*/
    const handleCurrentAlbumVersionsPage = (e) => {
        e.preventDefault();

        //Assign Pagination component page id to pageNum variable
        const pageNum = e.target.id;

        //Call Discogs API Master Release Versions endpoint
        //Set albumVersionsData
        //Set albumVersionsPagination
        discogsAPIMasterReleaseVersions(albumData.master_id, pageNum)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumVersionsData(result.versions);
                    setAlbumVersionsPagination(result.pagination);
                }
            );

        //Scroll to the top of the albumVersions component after refreshing results
        window.scroll(0, 1200);
    };

    /**Handle first page button click*/
    const handleFirstAlbumVersionsPage = (e) => {
        e.preventDefault();

        //Set min and max pages to initial values
        setAlbumVersionsMinPages(0);
        setAlbumVersionsMaxPages(5);

        //Call Discogs API Master Release Versions endpoint
        //Set albumVersionsData
        //Set albumVersionsPagination
        discogsAPIMasterReleaseVersions(albumData.master_id, 1)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumVersionsData(result.versions);
                    setAlbumVersionsPagination(result.pagination);
                }
            );

        //Scroll to the top of the albumVersions component after refreshing results
        window.scroll(0, 1200);
    };

    /**Handle previous page button click*/
    const handlePreviousAlbumVersionsPage = (e) => {
        e.preventDefault();

        //If the current albumVersions page is greater than 1, assign a value to pageNum that is equal to the current page - 1
        const pageNum = (albumVersionsPagination.page > 1) ? albumVersionsPagination.page - 1 : albumVersionsPagination.page;

        //Decrement min and max pages by 5
        if ((pageNum) % 5 === 0) {
            setAlbumVersionsMinPages(albumVersionsMinPages - 5);
            setAlbumVersionsMaxPages(albumVersionsMaxPages - 5);
        };

        //Call Discogs API Master Release endpoint
        //Set albumVersionsData
        //Set albumVersionsPagination
        discogsAPIMasterReleaseVersions(albumData.master_id, pageNum)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumVersionsData(result.versions);
                    setAlbumVersionsPagination(result.pagination);
                }
            );

        //Scroll to the top of the albumVersions component after refreshing results
        window.scroll(0, 1200);
    };

    /**Handle next page button click*/
    const handleNextAlbumVersionsPage = (e) => {
        e.preventDefault();

        //If the current albumVersions page is less than the total albumVersions pages, assign a value to pageNum that is equal to the current page + 1
        const pageNum = (albumVersionsPagination.page < albumVersionsPagination.pages) ? albumVersionsPagination.page + 1 : albumVersionsPagination.page;

        //Increment min and max pages by 5
        if (pageNum > albumVersionsMaxPages) {
            setAlbumVersionsMinPages(albumVersionsMinPages + 5);
            setAlbumVersionsMaxPages(albumVersionsMaxPages + 5);
        };

        //Call Discogs API Master Release endpoint
        //Set albumVersionsData
        //Set albumVersionsPagination
        discogsAPIMasterReleaseVersions(albumData.master_id, pageNum)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumVersionsData(result.versions);
                    setAlbumVersionsPagination(result.pagination);
                }
            );

        //Scroll to the top of the albumVersions component after refreshing results
        window.scroll(0, 1200);
    };

    /**Handle last page button click*/
    const handleLastAlbumVersionsPage = (e) => {
        e.preventDefault();

        //Set min page to total albumVersions pages - 5 and max page to the value of the total albumVersions pages
        setAlbumVersionsMinPages(albumVersionsPagination.pages - 5);
        setAlbumVersionsMaxPages(albumVersionsPagination.pages);

        //Call Discogs API Master Release endpoint
        //Set albumVersionsData
        //Set albumVersionsPagination
        discogsAPIMasterReleaseVersions(albumData.master_id, albumVersionsPagination.pages)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumVersionsData(result.versions);
                    setAlbumVersionsPagination(result.pagination);
                }
            );

        //Scroll to the top of the albumVersions component after refreshing results
        window.scroll(0, 1200);
    };

    /**Props objects*/
    /**Search component props*/
    const searchProps = { search, handleSearch, handleSearchSubmit };

    /**SearchResults component props*/
    const searchResultsProps = { searchData, handleAlbumClick };

    /**SearchResultsPagination component props*/
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

    /**Album component props*/
    const albumProps = { albumData };

    /**AlbumVersions and AlbumVersionsHeader component props*/
    const albumVersionsProps = {
        handleViewAlbumVersions,
        handleHideAlbumVersions,
        albumVersionsData,
    };

    /**AlbumVersionsPagination component props*/
    const albumVersionsPaginationProps = {
        albumVersionsPagination,
        albumVersionsMinPages,
        albumVersionsMaxPages,
        handleCurrentAlbumVersionsPage,
        handleFirstAlbumVersionsPage,
        handlePreviousAlbumVersionsPage,
        handleNextAlbumVersionsPage,
        handleLastAlbumVersionsPage,
    }


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
                        searchResultsPaginationProps={searchResultsPaginationProps}
                    />}
                />
                <Route exact path='/album' render={(props) =>
                    <Album
                        albumProps={albumProps}
                        albumVersionsProps={albumVersionsProps}
                        albumVersionsPaginationProps={albumVersionsPaginationProps}
                    />}
                />
            </Switch>
        </div>
    );
};

export default ProtectedComponents;