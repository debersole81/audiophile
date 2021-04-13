import React, { useState } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import DiscogsAPISearch from '../helper-functions/DiscogsAPISearch';
import DiscogsAPIMasterRelease from '../helper-functions/DiscogsAPIMasterRelease';
import DiscogsAPIRelease from '../helper-functions/DiscogsAPIRelease';
import discogsAPIMasterReleaseVersions from '../helper-functions/DiscogsAPIMasterReleaseVersions';
import Album from './Album';
import AlbumRelease from './AlbumRelease';
import Collection from './Collection';
import Dashboard from './Dashboard';
import Header from './Header';
import Randomizer from './Randomizer';
import Search from './Search';
import WishList from './WishList';


function ProtectedComponents(props) {

    console.log('Render: Protected Components');

    /* #region Global Variables */
    const history = useHistory();
    /* #endregion Global Variables*/


    /* #region State Variables */
    /** Search component state variables */
    const [search, setSearch] = useState('');

    /** SearchResults component state variables */
    const [searchData, setSearchData] = useState([]);

    /** SearchResultsPagination component state variables */
    const [searchResultsPagination, setSearchResultsPagination] = useState({});
    const [searchResultsMinPages, setSearchResultsMinPages] = useState(0);
    const [searchResultsMaxPages, setSearchResultsMaxPages] = useState(5);
    const [searchResultsMinPagesMobile, setSearchResultsMinPagesMobile] = useState(0);
    const [searchResultsMaxPagesMobile, setSearchResultsMaxPagesMobile] = useState(3);

    /** Album component state variables */
    const [albumMasterData, setAlbumMasterData] = useState({});
    const [albumData, setAlbumData] = useState({});

    /** AlbumReleases component state variables */
    const [albumReleasesData, setAlbumReleasesData] = useState({});
    const [albumReleaseData, setAlbumReleaseData] = useState({});

    /** AlbumReleasesPaginationWrapper and AlbumReleasesPagination components state variables */
    const [albumReleasesPagination, setAlbumReleasesPagination] = useState({});
    const [albumReleasesMinPages, setAlbumReleasesMinPages] = useState(0);
    const [albumReleasesMaxPages, setAlbumReleasesMaxPages] = useState(5);
    const [albumReleasesMinPagesMobile, setAlbumReleasesMinPagesMobile] = useState(0);
    const [albumReleasesMaxPagesMobile, setAlbumReleasesMaxPagesMobile] = useState(3);
    /* #endregion State Variables*/


    /* #region Callback Functions */

    /** Search component callback functions */
    /* Handle search form input field */
    const handleSearch = (({ target }) => {
        setSearch(target.value);
    });

    /* Handle search form submit */
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

    /** SearchResults component callback functions */
    /* Handle album click */
    const handleAlbumClick = (e) => {
        e.preventDefault();

        //Clear albumRelease data
        setAlbumReleasesData({});

        //Clear albumReleasesMinPages & albumReleasesMaxPages state
        setAlbumReleasesMinPages(0);
        setAlbumReleasesMaxPages(5);

        //Declare variable to store the value of main_release from Discogs API Master endpoint
        // let mainRelease = null;
        //Call Discogs API Master Release endpoint to retreive main_release ID           
        DiscogsAPIMasterRelease(e.target.id)
            .then(masterres => masterres.json())
            .then(
                (result) => {
                    // let mainRelease = result.main_release;
                    // console.log (mainRelease);
                    // setAlbumMasterData(result);
                    DiscogsAPIRelease(result.main_release)
                        .then(releaseres => releaseres.json())
                        .then(
                            (result) => {
                                setAlbumData(result)
                                history.push('/album');
                            })
                        .then(setAlbumMasterData(result))

                })
    };

    /** SearchResultsPagination component callback functions -- Mobile */
    /* Handle previous page button click */
    const handlePreviousSearchResultsPageMobile = (e) => {
        e.preventDefault();

        //If the current search results page is greater than 1, set pageNum equal to the current page - 1
        const pageNum = (searchResultsPagination.page > 1) ? searchResultsPagination.page - 1 : searchResultsPagination.page;

        //If the remainder of pageNum divided by 3 equals 0, decrement min and max pages by 3
        if ((pageNum) % 3 === 0) {
            setSearchResultsMinPagesMobile(searchResultsMinPagesMobile - 3);
            setSearchResultsMaxPagesMobile(searchResultsMaxPagesMobile - 3);
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

    /* Handle next page button click */
    const handleNextSearchResultsPageMobile = (e) => {
        e.preventDefault();

        //If the current search result page is less than the total search result pages, set pageNum to the current page + 1
        const pageNum = (searchResultsPagination.page < searchResultsPagination.pages) ? searchResultsPagination.page + 1 : searchResultsPagination.page;

        //If pageNum is greater than the value of searchResultsMaxPagesMobile, increment min and max pages by 3
        if (pageNum > searchResultsMaxPagesMobile) {
            setSearchResultsMinPagesMobile(searchResultsMinPagesMobile + 3);
            setSearchResultsMaxPagesMobile(searchResultsMaxPagesMobile + 3);
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

    /** SearchResultsPagination component callback functions -- Desktop & Mobile */
    /* Handle current page click */
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

    /* Handle first page button click */
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

    /* Handle previous page button click */
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

    /* Handle next page button click */
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

    /* Handle last page button click */
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

    /** AlbumReleasesHeader component callback functions */
    /* Handle view album releases button click */
    const handleViewAlbumReleases = (e) => {
        e.preventDefault();

        //Call Discogs Master Release Versions endpoint
        //Set albumReleasesData
        discogsAPIMasterReleaseVersions(albumData.master_id)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumReleasesData(result.versions);
                    setAlbumReleasesPagination(result.pagination);
                }
            );
    };

    /* Handle hide albun releases button click */
    const handleHideAlbumReleases = (e) => {
        e.preventDefault();

        //Clear albumReleases and albumReleases Pagination data
        setAlbumReleasesData({});
        setAlbumReleasesPagination({});
        setAlbumReleasesMinPages(0);
        setAlbumReleasesMaxPages(5);
        setAlbumReleasesMinPagesMobile(0);
        setAlbumReleasesMaxPagesMobile(3);
    };

    /** AlbumReleases component callback functions */
    /* Handle view release button click */
    const handleViewAlbumRelease = (e) => {
        e.preventDefault();

        //Call Discogs API Release endpoint
        DiscogsAPIRelease(e.target.id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                }
            )
    };

    /** AlbumReleasesPagination component callback functions -- Mobile */
    /* Handle previous page button click */
    const handlePreviousAlbumReleasesPageMobile = (e) => {
        e.preventDefault();

        //If the current page is greater than 1, set pageNum equal to the current page - 1
        const pageNum = (albumReleasesPagination.page > 1) ? albumReleasesPagination.page - 1 : albumReleasesPagination.page;

        //If pageNum divided by 3 has a remainder equal to 0, decrement min and max pages by 3
        if ((pageNum) % 3 === 0) {
            setAlbumReleasesMinPagesMobile(albumReleasesMinPagesMobile - 3);
            setAlbumReleasesMaxPagesMobile(albumReleasesMaxPagesMobile - 3);
        };

        //Call Discogs API Master Release endpoint
        //Set albumReleasesData
        //Set albumReleasesPagination
        discogsAPIMasterReleaseVersions(albumData.master_id, pageNum)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumReleasesData(result.versions);
                    setAlbumReleasesPagination(result.pagination);
                }
            );

        //Scroll to the top of the AlbumReleases component after refreshing results
        window.scroll(0, 1200);
    };

    /* Handle next page button click */
    const handleNextAlbumReleasesPageMobile = (e) => {
        e.preventDefault();

        //If the current page is less than the total pages, set pageNum equal to the current page + 1
        const pageNum = (albumReleasesPagination.page < albumReleasesPagination.pages) ? albumReleasesPagination.page + 1 : albumReleasesPagination.page;

        //If pageNum is greater than the value of albumReleasesMaxPagesMobile, increment min and max pages by 3
        if (pageNum > albumReleasesMaxPagesMobile) {
            setAlbumReleasesMinPagesMobile(albumReleasesMinPagesMobile + 3);
            setAlbumReleasesMaxPagesMobile(albumReleasesMaxPagesMobile + 3);
        };

        //Call Discogs API Master Release endpoint
        //Set albumReleasesData
        //Set albumReleasesPagination
        discogsAPIMasterReleaseVersions(albumData.master_id, pageNum)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumReleasesData(result.versions);
                    setAlbumReleasesPagination(result.pagination);
                }
            );

        //Scroll to the top of the AlbumReleases component after refreshing results
        window.scroll(0, 1200);
    };

    /** AlbumReleasesPagination component callback functions -- Desktop & Mobile */
    /* Handle current page click */
    const handleCurrentAlbumReleasesPage = (e) => {
        e.preventDefault();

        //Call Discogs API Master Release Versions endpoint
        //Set albumReleasesData
        //Set albumReleasesPagination
        discogsAPIMasterReleaseVersions(albumData.master_id, e.target.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumReleasesData(result.versions);
                    setAlbumReleasesPagination(result.pagination);
                }
            );

        //Scroll to the top of the AlbumReleases component after refreshing results
        window.scroll(0, 1200);
    };

    /* Handle first page button click */
    const handleFirstAlbumReleasesPage = (e) => {
        e.preventDefault();

        //Set min and max pages to initial values
        setAlbumReleasesMinPages(0);
        setAlbumReleasesMaxPages(5);

        //Call Discogs API Master Release Versions endpoint
        //Set albumReleasesData
        //Set albumReleasesPagination
        discogsAPIMasterReleaseVersions(albumData.master_id, 1)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumReleasesData(result.versions);
                    setAlbumReleasesPagination(result.pagination);
                }
            );

        //Scroll to the top of the AlbumReleases component after refreshing results
        window.scroll(0, 1200);
    };

    /* Handle previous page button click */
    const handlePreviousAlbumReleasesPage = (e) => {
        e.preventDefault();

        //If the current page is greater than 1, set pageNum equal to the current page - 1
        const pageNum = (albumReleasesPagination.page > 1) ? albumReleasesPagination.page - 1 : albumReleasesPagination.page;

        //If pageNum divided by 5 has a remainder equal to 0, decrement min and max pages by 5
        if ((pageNum) % 5 === 0) {
            setAlbumReleasesMinPages(albumReleasesMinPages - 5);
            setAlbumReleasesMaxPages(albumReleasesMaxPages - 5);
        };

        //Call Discogs API Master Release endpoint
        //Set albumReleasesData
        //Set albumReleasesPagination
        discogsAPIMasterReleaseVersions(albumData.master_id, pageNum)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumReleasesData(result.versions);
                    setAlbumReleasesPagination(result.pagination);
                }
            );

        //Scroll to the top of the AlbumReleases component after refreshing results
        window.scroll(0, 1200);
    };

    /* Handle next page button click */
    const handleNextAlbumReleasesPage = (e) => {
        e.preventDefault();

        //If the current page is less than the total pages, set pageNum equal to the current page + 1
        const pageNum = (albumReleasesPagination.page < albumReleasesPagination.pages) ? albumReleasesPagination.page + 1 : albumReleasesPagination.page;

        //If pageNum is greater than the value of albumReleasesMaxPages, increment min and max pages by 5
        if (pageNum > albumReleasesMaxPages) {
            setAlbumReleasesMinPages(albumReleasesMinPages + 5);
            setAlbumReleasesMaxPages(albumReleasesMaxPages + 5);
        };

        //Call Discogs API Master Release endpoint
        //Set albumReleasesData
        //Set albumReleasesPagination
        discogsAPIMasterReleaseVersions(albumData.master_id, pageNum)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumReleasesData(result.versions);
                    setAlbumReleasesPagination(result.pagination);
                }
            );

        //Scroll to the top of the AlbumReleases component after refreshing results
        window.scroll(0, 1200);
    };

    /* Handle last page button click */
    const handleLastAlbumReleasesPage = (e) => {
        e.preventDefault();

        //Set min page to total albumVersions pages - 5 and max page to the value of the total albumVersions pages
        setAlbumReleasesMinPages(albumReleasesPagination.pages - 5);
        setAlbumReleasesMaxPages(albumReleasesPagination.pages);

        //Call Discogs API Master Release endpoint
        //Set albumReleasesData
        //Set albumReleasesPagination
        discogsAPIMasterReleaseVersions(albumData.master_id, albumReleasesPagination.pages)
            .then(res => res.json())
            .then(
                (result) => {
                    setAlbumReleasesData(result.versions);
                    setAlbumReleasesPagination(result.pagination);
                }
            );

        //Scroll to the top of the AlbumReleases component after refreshing results
        window.scroll(0, 1200);
    };
    /* #endregion Callback Functions */


    /* #region Props Objects */
    /** Search component props */
    const searchProps = { search, handleSearch, handleSearchSubmit };

    /** SearchResults component props */
    const searchResultsProps = { searchData, handleAlbumClick };

    /** SearchResultsPagination component props */
    const searchResultsPaginationProps = {
        searchResultsPagination,
        searchResultsMinPages,
        searchResultsMaxPages,
        searchResultsMinPagesMobile,
        searchResultsMaxPagesMobile,
        handleCurrentSearchResultsPage,
        handleFirstSearchResultsPage,
        handlePreviousSearchResultsPage,
        handleNextSearchResultsPage,
        handleLastSearchResultsPage,
        handlePreviousSearchResultsPageMobile,
        handleNextSearchResultsPageMobile,
    };

    /** Album component props */
    const albumProps = {
        albumData,
        albumMasterData,
    };

    /** AlbumReleasesHeader and AlbumReleases component props */
    const albumReleasesProps = {
        albumReleasesData,
        handleViewAlbumReleases,
        handleHideAlbumReleases,
    };

    /** AlbumReleasesHeader and AlbumReleasesPagination component props */
    const albumReleasesPaginationProps = {
        albumReleasesPagination,
        albumReleasesMinPages,
        albumReleasesMaxPages,
        albumReleasesMinPagesMobile,
        albumReleasesMaxPagesMobile,
        handleCurrentAlbumReleasesPage,
        handleFirstAlbumReleasesPage,
        handlePreviousAlbumReleasesPage,
        handleNextAlbumReleasesPage,
        handleLastAlbumReleasesPage,
        handlePreviousAlbumReleasesPageMobile,
        handleNextAlbumReleasesPageMobile,
    }
    /* #endregion Props Objects*/


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
                        albumReleasesProps={albumReleasesProps}
                        albumReleasesPaginationProps={albumReleasesPaginationProps}
                    />}
                />
                <Route exact path='/albumrelease' render={(props) =>
                    <AlbumRelease />}
                />
            </Switch>
        </div>
    );
};

export default ProtectedComponents;