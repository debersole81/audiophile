import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import {
  createCollectionAlbum,
  createCollectionRelease,
  createWishListAlbum,
  createWishListRelease,
  deleteCollectionAlbum,
  deleteCollectionRelease,
  deleteWishListAlbum,
  deleteWishListRelease,
} from "../graphql/mutations";
import {
  listCollectionAlbums,
  listCollectionReleases,
  listWishListAlbums,
  listWishListReleases,
} from "../graphql/queries";
import DiscogsAPISearch from "../helper-functions/DiscogsAPISearch";
import DiscogsAPIMasterRelease from "../helper-functions/DiscogsAPIMasterRelease";
import DiscogsAPIRelease from "../helper-functions/DiscogsAPIRelease";
import discogsAPIMasterReleaseVersions from "../helper-functions/DiscogsAPIMasterReleaseVersions";
import Album from "./Album";
import AlbumRelease from "./AlbumRelease";
import Collection from "./Collection";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Footer from "./Footer";
import Randomizer from "./Randomizer";
import Search from "./Search";
import WishList from "./WishList";
// import { autoLogOut } from "../helper-functions/AutoLogOut";

function ProtectedComponents(props) {
  /* #region Global hooks */
  useEffect(() => {
    // autoLogOut()
    // //Clear authenticate user from local storage on window close
    // window.onbeforeunload = () => {
    //     localStorage.clear();
    // };

    //Will need a GraphQL api call for all of the queries
    //Will need state variable objects for each call
    //This state will get updated here, and in the handlers for adding and deleting albums
    //Combine objects in collection and wishlist components

    /** Fetch user collection data */
    /* Fetch albums from user's collection */
    API.graphql(graphqlOperation(listCollectionAlbums))
      .then((data) => {
        setUserCollectionAlbums(data.data.listCollectionAlbums.items);
      })
      .catch((error) => {
        console.log(error);
      });

    /* Fetch releases from user's collection */
    API.graphql(graphqlOperation(listCollectionReleases))
      .then((data) => {
        setUserCollectionReleases(data.data.listCollectionReleases.items);
      })
      .catch((error) => {
        console.log(error);
      });

    /* Fetch albums from user's wishlist */
    API.graphql(graphqlOperation(listWishListAlbums))
      .then((data) => {
        setUserWishListAlbums(data.data.listWishListAlbums.items);
      })
      .catch((error) => {
        console.log(error);
      });

    /* Fetch releases from user's wishlist */
    API.graphql(graphqlOperation(listWishListReleases))
      .then((data) => {
        setUserWishListReleases(data.data.listWishListReleases.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  /* #endregion Global hooks */

  /* #region Global Variables */
  /** useHistory hook variable. */
  const history = useHistory();
  /* #endregion Global Variables */

  /* #region State Variables */
  /** User library state variables */
  const [userCollectionAlbums, setUserCollectionAlbums] = useState([]);
  const [userCollectionReleases, setUserCollectionReleases] = useState([]);
  const [userWishListAlbums, setUserWishListAlbums] = useState([]);
  const [userWishListReleases, setUserWishListReleases] = useState([]);

  /** Search component state variables */
  const [search, setSearch] = useState("");
  const [searchDataLoading, setSearchDataLoading] = useState(false);

  /** SearchResults component state variables */
  const [searchData, setSearchData] = useState([]);

  /** SearchResultsPagination component state variables */
  const [searchResultsPagination, setSearchResultsPagination] = useState({});
  const [searchResultsMinPages, setSearchResultsMinPages] = useState(0);
  const [searchResultsMaxPages, setSearchResultsMaxPages] = useState(5);
  const [searchResultsMinPagesMobile, setSearchResultsMinPagesMobile] =
    useState(0);
  const [searchResultsMaxPagesMobile, setSearchResultsMaxPagesMobile] =
    useState(3);

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
  const [albumReleasesMinPagesMobile, setAlbumReleasesMinPagesMobile] =
    useState(0);
  const [albumReleasesMaxPagesMobile, setAlbumReleasesMaxPagesMobile] =
    useState(3);

  /** Randomizer component state variables */
  const [randomize, setRandomize] = useState(false);
  const [randomAlbum, setRandomAlbum] = useState({});

  /* #endregion State Variables*/

  /* #region Callback Functions */
  /** Search Component Callback Functions */
  /* Search Form Change Handler */
  function onSearchFormChange(e) {
    setSearch(() => e.target.value);
  }

  /* Search Form Submit */
  function searchSubmit(e) {
    e.preventDefault();

    //Set searchDataLoading to true
    setSearchDataLoading(true);

    //Clear searchResultsMinPages & searchResultsMaxPages state
    setSearchResultsMinPages(0);
    setSearchResultsMaxPages(5);

    //Call Discogs API Search endpoint
    //Set searchData
    //Set searchResultsPagination
    DiscogsAPISearch(search)
      .then((res) => res.json())
      .then((result) => {
        setSearchData(result.results);
        setSearchResultsPagination(result.pagination);
        //Set searchDataLoading to false
        setSearchDataLoading(false);
      });
  }

  /** SearchResults Component Callback Functions */
  /* Album Click */
  function albumClick(e) {
    e.preventDefault();

    //Clear albumRelease data
    setAlbumReleasesData({});

    //Clear albumReleasesMinPages & albumReleasesMaxPages state
    setAlbumReleasesMinPages(0);
    setAlbumReleasesMaxPages(5);

    //Call Discogs API Master Release endpoint to retreive main_release ID
    DiscogsAPIMasterRelease(e.target.id)
      .then((masterres) => masterres.json())
      .then((result) => {
        //Call Discogs API Release endpoint and pass main_release id from Master Release endpoint result
        DiscogsAPIRelease(result.main_release)
          .then((releaseres) => releaseres.json())
          .then((result) => {
            setAlbumData(result);
            history.push("/album");
            window.scroll(0, 0);
          })
          .then(setAlbumMasterData(result));
      });
  }

  /** SearchResultsPagination Component Callback Functions -- Mobile */
  /* Handle Previous Page Button Click */
  function previousSearchResultsPageMobile(e) {
    e.preventDefault();

    //Set searchDataLoading to true
    setSearchDataLoading(true);

    //If the current search results page is greater than 1, set pageNum equal to the current page - 1
    const pageNum =
      searchResultsPagination.page > 1
        ? searchResultsPagination.page - 1
        : searchResultsPagination.page;

    //If the remainder of pageNum divided by 3 equals 0, decrement min and max pages by 3
    if (pageNum % 3 === 0) {
      setSearchResultsMinPagesMobile(searchResultsMinPagesMobile - 3);
      setSearchResultsMaxPagesMobile(searchResultsMaxPagesMobile - 3);
    }

    //Call Discogs API Search endpoint
    //Set searchData
    //Set searchResultsPagination
    DiscogsAPISearch(search, pageNum)
      .then((res) => res.json())
      .then((result) => {
        setSearchData(result.results);
        setSearchResultsPagination(result.pagination);
        //Set searchDataLoading to false
        setSearchDataLoading(false);
      });

    //Scroll to the top of the browser window after refreshing results
    window.scrollTo(0, 0);
  }

  /* Handle Next Page Button Click */
  function nextSearchResultsPageMobile(e) {
    e.preventDefault();

    //Set searchDataLoading to true
    setSearchDataLoading(true);

    //If the current search result page is less than the total search result pages, set pageNum to the current page + 1
    const pageNum =
      searchResultsPagination.page < searchResultsPagination.pages
        ? searchResultsPagination.page + 1
        : searchResultsPagination.page;

    //If pageNum is greater than the value of searchResultsMaxPagesMobile, increment min and max pages by 3
    if (pageNum > searchResultsMaxPagesMobile) {
      setSearchResultsMinPagesMobile(searchResultsMinPagesMobile + 3);
      setSearchResultsMaxPagesMobile(searchResultsMaxPagesMobile + 3);
    }

    //Call Discogs API Search endpoint
    //Set searchData
    //Set searchResultsPagination
    DiscogsAPISearch(search, pageNum)
      .then((res) => res.json())
      .then((result) => {
        setSearchData(result.results);
        setSearchResultsPagination(result.pagination);
        //Set searchDataLoading to false
        setSearchDataLoading(false);
      });

    //Scroll to the top of the browser window after refreshing results
    window.scrollTo(0, 0);
  }

  /** SearchResultsPagination Component Callback Functions -- Desktop & Mobile */
  /* Handle current page click */
  function currentSearchResultsPage(e) {
    e.preventDefault();

    //Set searchDataLoading to true
    setSearchDataLoading(true);

    //Assign Pagination component page id to pageNum variable
    const pageNum = e.target.id;

    //Call Discogs API Search endpoint
    //Set searchData
    //Set searchResultsPagination
    DiscogsAPISearch(search, pageNum)
      .then((res) => res.json())
      .then((result) => {
        setSearchData(result.results);
        setSearchResultsPagination(result.pagination);
        //Set searchDataLoading to false
        setSearchDataLoading(false);
      });

    //Scroll to the top of the browser window after refreshing results
    window.scroll(0, 0);
  }

  /* Handle first page button click */
  function firstSearchResultsPage(e) {
    e.preventDefault();

    //Set searchDataLoading to true
    setSearchDataLoading(true);

    //Set min and max pages to initial values
    setSearchResultsMinPages(0);
    setSearchResultsMaxPages(5);

    //Call Discogs API Search endpoint
    //Set searchData
    //Set searchResultsPagination
    DiscogsAPISearch(search, 1)
      .then((res) => res.json())
      .then((result) => {
        setSearchData(result.results);
        setSearchResultsPagination(result.pagination);
        //Set searchDataLoading to false
        setSearchDataLoading(false);
      });

    //Scroll to the top of the browser window after refreshing results
    window.scrollTo(0, 0);
  }

  /* Handle previous page button click */
  function previousSearchResultsPage(e) {
    e.preventDefault();

    //Set searchDataLoading to true
    setSearchDataLoading(true);

    //If the current search results page is greater than 1, assign a value to pageNum that is equal to the current page - 1
    const pageNum =
      searchResultsPagination.page > 1
        ? searchResultsPagination.page - 1
        : searchResultsPagination.page;

    //Decrement min and max pages by 5
    if (pageNum % 5 === 0) {
      setSearchResultsMinPages(searchResultsMinPages - 5);
      setSearchResultsMaxPages(searchResultsMaxPages - 5);
    }

    //Call Discogs API Search endpoint
    //Set searchData
    //Set searchResultsPagination
    DiscogsAPISearch(search, pageNum)
      .then((res) => res.json())
      .then((result) => {
        setSearchData(result.results);
        setSearchResultsPagination(result.pagination);
        //Set searchDataLoading to false
        setSearchDataLoading(false);
      });

    //Scroll to the top of the browser window after refreshing results
    window.scrollTo(0, 0);
  }

  /* Handle next page button click */
  function nextSearchResultsPage(e) {
    e.preventDefault();

    //If the current search result page is less than the total search result pages, assign a value to pageNum that is equal to the current page + 1
    const pageNum =
      searchResultsPagination.page < searchResultsPagination.pages
        ? searchResultsPagination.page + 1
        : searchResultsPagination.page;

    //Increment min and max pages by 5
    if (pageNum > searchResultsMaxPages) {
      setSearchResultsMinPages(searchResultsMinPages + 5);
      setSearchResultsMaxPages(searchResultsMaxPages + 5);
    }

    //Call Discogs API Search endpoint
    //Set searchData
    //Set searchResultsPagination
    DiscogsAPISearch(search, pageNum)
      .then((res) => res.json())
      .then((result) => {
        setSearchData(result.results);
        setSearchResultsPagination(result.pagination);
      });

    //Scroll to the top of the browser window after refreshing results
    window.scrollTo(0, 0);
  }

  /* Handle last page button click */
  function lastSearchResultsPage(e) {
    e.preventDefault();

    //Set min page to total search result pages - 5 and max page to the value to total search result pages
    setSearchResultsMinPages(searchResultsPagination.pages - 5);
    setSearchResultsMaxPages(searchResultsPagination.pages);

    //Call Discogs API Search endpoint
    //Set searchData
    //Set searchResultsPagination
    DiscogsAPISearch(search, searchResultsPagination.pages)
      .then((res) => res.json())
      .then((result) => {
        setSearchData(result.results);
        setSearchResultsPagination(result.pagination);
      });

    //Scroll to the top of the browser window after refreshing results
    window.scrollTo(0, 0);
  }

  /** Album Component Callback Functions */
  /* Add album to user's collection */
  function addAlbumToCollection(e) {
    e.preventDefault();

    /* Build object to upload album data to GraphQL API */
    const inputData = {
      releaseType: "Master",
      albumId: albumData.id,
      masterId: albumData.master_id,
      mainReleaseId: albumMasterData.main_release,
      albumTitle: albumData.title,
      artistName: albumData.artists[0].name,
      label: albumData.labels[0].name,
      releaseYear: albumData.year,
      albumImage: albumData.images[0].uri,
    };

    /* Upload album data to GraphQL API  */
    API.graphql(graphqlOperation(createCollectionAlbum, { input: inputData }))
      .catch((error) => {
        console.log(error);
      })
      /* Fetch albums from user's collection */
      .then(() => {
        API.graphql(graphqlOperation(listCollectionAlbums))
          .then((data) => {
            setUserCollectionAlbums(data.data.listCollectionAlbums.items);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  /* Add album to user's wishlist */
  function addAlbumToWishList(e) {
    e.preventDefault();

    /* Build object to upload album data to GraphQL API */
    const inputData = {
      releaseType: "Master",
      albumId: albumData.id,
      masterId: albumData.master_id,
      mainReleaseId: albumMasterData.main_release,
      albumTitle: albumData.title,
      artistName: albumData.artists[0].name,
      label: albumData.labels[0].name,
      releaseYear: albumData.year,
      albumImage: albumData.images[0].uri,
    };

    /* Upload album data to GraphQL API  */
    API.graphql(graphqlOperation(createWishListAlbum, { input: inputData }))
      .catch((error) => {
        console.log(error);
      })
      /* Fetch albums from user's wishlist */
      .then(() => {
        API.graphql(graphqlOperation(listWishListAlbums))
          .then((data) => {
            setUserWishListAlbums(data.data.listWishListAlbums.items);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  /* Remove album from user's collection */
  function deleteAlbumFromCollection(e) {
    e.preventDefault();

    /* Build object to delete album data from GraphQL API */
    const inputData = {
      id: e.target.id,
    };

    /* Delete album data from GraphQL API */
    API.graphql(graphqlOperation(deleteCollectionAlbum, { input: inputData }))
      .catch((error) => {
        console.log(error);
      })
      /* Fetch albums from user's collection */
      .then(() => {
        API.graphql(graphqlOperation(listCollectionAlbums))
          .then((data) => {
            setUserCollectionAlbums(data.data.listCollectionAlbums.items);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  /* Remove album from user's wishlist*/
  function deleteAlbumFromWishList(e) {
    e.preventDefault();

    /* Build object to delete album data from GraphQL API */
    const inputData = {
      id: e.target.id,
    };

    /* Delete album data from GraphQL API */
    API.graphql(graphqlOperation(deleteWishListAlbum, { input: inputData }))
      .catch((error) => {
        console.log(error);
      })
      /* Fetch albums from user's wishlist */
      .then(() => {
        API.graphql(graphqlOperation(listWishListAlbums))
          .then((data) => {
            setUserWishListAlbums(data.data.listWishListAlbums.items);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  /** AlbumReleasesHeader Component Callback Functions */
  /* Handle view album releases button click */
  function viewAlbumReleases(e) {
    e.preventDefault();

    //Call Discogs Master Release Versions endpoint
    //Set albumReleasesData
    discogsAPIMasterReleaseVersions(albumData.master_id)
      .then((res) => res.json())
      .then((result) => {
        setAlbumReleasesData(result.versions);
        setAlbumReleasesPagination(result.pagination);
        window.scroll(0, 1200);
      });
  }

  /* Handle hide albun releases button click */
  function hideAlbumReleases(e) {
    e.preventDefault();

    //Clear albumReleases and albumReleases Pagination data
    setAlbumReleasesData({});
    setAlbumReleasesPagination({});
    setAlbumReleasesMinPages(0);
    setAlbumReleasesMaxPages(5);
    setAlbumReleasesMinPagesMobile(0);
    setAlbumReleasesMaxPagesMobile(3);
    window.scroll(0, 0);
  }

  /** AlbumReleases Component Callback Functions */
  /* Handle view release button click */
  function viewAlbumRelease(e) {
    e.preventDefault();

    //Call Discogs API Release endpoint
    //Set albumRelease data
    DiscogsAPIRelease(e.target.id)
      .then((res) => res.json())
      .then((result) => {
        setAlbumReleaseData(result);
        history.push("/albumrelease");
        window.scroll(0, 0);
      });
  }

  /** AlbumReleasesPagination Component Callback Functions -- Mobile */
  /* Handle previous page button click */
  function previousAlbumReleasesPageMobile(e) {
    e.preventDefault();

    //If the current page is greater than 1, set pageNum equal to the current page - 1
    const pageNum =
      albumReleasesPagination.page > 1
        ? albumReleasesPagination.page - 1
        : albumReleasesPagination.page;

    //If pageNum divided by 3 has a remainder equal to 0, decrement min and max pages by 3
    if (pageNum % 3 === 0) {
      setAlbumReleasesMinPagesMobile(albumReleasesMinPagesMobile - 3);
      setAlbumReleasesMaxPagesMobile(albumReleasesMaxPagesMobile - 3);
    }

    //Call Discogs API Master Release endpoint
    //Set albumReleasesData
    //Set albumReleasesPagination
    discogsAPIMasterReleaseVersions(albumData.master_id, pageNum)
      .then((res) => res.json())
      .then((result) => {
        setAlbumReleasesData(result.versions);
        setAlbumReleasesPagination(result.pagination);
      });

    //Scroll to the top of the AlbumReleases component after refreshing results
    window.scroll(0, 1200);
  }

  /* Handle next page button click */
  function nextAlbumReleasesPageMobile(e) {
    e.preventDefault();

    //If the current page is less than the total pages, set pageNum equal to the current page + 1
    const pageNum =
      albumReleasesPagination.page < albumReleasesPagination.pages
        ? albumReleasesPagination.page + 1
        : albumReleasesPagination.page;

    //If pageNum is greater than the value of albumReleasesMaxPagesMobile, increment min and max pages by 3
    if (pageNum > albumReleasesMaxPagesMobile) {
      setAlbumReleasesMinPagesMobile(albumReleasesMinPagesMobile + 3);
      setAlbumReleasesMaxPagesMobile(albumReleasesMaxPagesMobile + 3);
    }

    //Call Discogs API Master Release endpoint
    //Set albumReleasesData
    //Set albumReleasesPagination
    discogsAPIMasterReleaseVersions(albumData.master_id, pageNum)
      .then((res) => res.json())
      .then((result) => {
        setAlbumReleasesData(result.versions);
        setAlbumReleasesPagination(result.pagination);
      });

    //Scroll to the top of the AlbumReleases component after refreshing results
    window.scroll(0, 1200);
  }

  /** AlbumReleasesPagination Component Callback Functions -- Desktop & Mobile */
  /* Handle current page click */
  function currentAlbumReleasesPage(e) {
    e.preventDefault();

    //Call Discogs API Master Release Versions endpoint
    //Set albumReleasesData
    //Set albumReleasesPagination
    discogsAPIMasterReleaseVersions(albumData.master_id, e.target.id)
      .then((res) => res.json())
      .then((result) => {
        setAlbumReleasesData(result.versions);
        setAlbumReleasesPagination(result.pagination);
      });

    //Scroll to the top of the AlbumReleases component after refreshing results
    window.scroll(0, 1200);
  }

  /* Handle first page button click */
  function firstAlbumReleasesPage(e) {
    e.preventDefault();

    //Set min and max pages to initial values
    setAlbumReleasesMinPages(0);
    setAlbumReleasesMaxPages(5);

    //Call Discogs API Master Release Versions endpoint
    //Set albumReleasesData
    //Set albumReleasesPagination
    discogsAPIMasterReleaseVersions(albumData.master_id, 1)
      .then((res) => res.json())
      .then((result) => {
        setAlbumReleasesData(result.versions);
        setAlbumReleasesPagination(result.pagination);
      });

    //Scroll to the top of the AlbumReleases component after refreshing results
    window.scroll(0, 1200);
  }

  /* Handle previous page button click */
  function previousAlbumReleasesPage(e) {
    e.preventDefault();

    //If the current page is greater than 1, set pageNum equal to the current page - 1
    const pageNum =
      albumReleasesPagination.page > 1
        ? albumReleasesPagination.page - 1
        : albumReleasesPagination.page;

    //If pageNum divided by 5 has a remainder equal to 0, decrement min and max pages by 5
    if (pageNum % 5 === 0) {
      setAlbumReleasesMinPages(albumReleasesMinPages - 5);
      setAlbumReleasesMaxPages(albumReleasesMaxPages - 5);
    }

    //Call Discogs API Master Release endpoint
    //Set albumReleasesData
    //Set albumReleasesPagination
    discogsAPIMasterReleaseVersions(albumData.master_id, pageNum)
      .then((res) => res.json())
      .then((result) => {
        setAlbumReleasesData(result.versions);
        setAlbumReleasesPagination(result.pagination);
      });

    //Scroll to the top of the AlbumReleases component after refreshing results
    window.scroll(0, 1200);
  }

  /* Handle next page button click */
  function nextAlbumReleasesPage(e) {
    e.preventDefault();

    //If the current page is less than the total pages, set pageNum equal to the current page + 1
    const pageNum =
      albumReleasesPagination.page < albumReleasesPagination.pages
        ? albumReleasesPagination.page + 1
        : albumReleasesPagination.page;

    //If pageNum is greater than the value of albumReleasesMaxPages, increment min and max pages by 5
    if (pageNum > albumReleasesMaxPages) {
      setAlbumReleasesMinPages(albumReleasesMinPages + 5);
      setAlbumReleasesMaxPages(albumReleasesMaxPages + 5);
    }

    //Call Discogs API Master Release endpoint
    //Set albumReleasesData
    //Set albumReleasesPagination
    discogsAPIMasterReleaseVersions(albumData.master_id, pageNum)
      .then((res) => res.json())
      .then((result) => {
        setAlbumReleasesData(result.versions);
        setAlbumReleasesPagination(result.pagination);
      });

    //Scroll to the top of the AlbumReleases component after refreshing results
    window.scroll(0, 1200);
  }

  /* Handle last page button click */
  function lastAlbumReleasesPage(e) {
    e.preventDefault();

    //Set min page to total albumVersions pages - 5 and max page to the value of the total albumVersions pages
    setAlbumReleasesMinPages(albumReleasesPagination.pages - 5);
    setAlbumReleasesMaxPages(albumReleasesPagination.pages);

    //Call Discogs API Master Release endpoint
    //Set albumReleasesData
    //Set albumReleasesPagination
    discogsAPIMasterReleaseVersions(
      albumData.master_id,
      albumReleasesPagination.pages
    )
      .then((res) => res.json())
      .then((result) => {
        setAlbumReleasesData(result.versions);
        setAlbumReleasesPagination(result.pagination);
      });

    //Scroll to the top of the AlbumReleases component after refreshing results
    window.scroll(0, 1200);
  }

  /** AlbumRelease Component Callback Functions */
  /* Add release to user's collection */
  function addReleaseToCollection(e) {
    e.preventDefault();

    /* Build object to upload release data to GraphQL API */
    const inputData = {
      releaseType: "Release",
      albumId: albumReleaseData.id,
      masterId: albumReleaseData.master_id,
      albumTitle: albumReleaseData.title,
      artistName: albumReleaseData.artists[0].name,
      label: albumReleaseData.labels[0].name,
      releaseYear: albumReleaseData.year,
      albumImage: albumReleaseData.images[0].uri,
    };

    /* Upload release data to GraphQL API  */
    API.graphql(graphqlOperation(createCollectionRelease, { input: inputData }))
      .catch((error) => {
        console.log(error);
      })
      /* Fetch releases from user's collection */
      .then(() => {
        API.graphql(graphqlOperation(listCollectionReleases))
          .then((data) => {
            setUserCollectionReleases(data.data.listCollectionReleases.items);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  /* Add release to user's wishlist */
  function addReleaseToWishList(e) {
    e.preventDefault();

    /* Build object to upload release data to GraphQL API */
    const inputData = {
      releaseType: "Release",
      albumId: albumReleaseData.id,
      masterId: albumReleaseData.master_id,
      albumTitle: albumReleaseData.title,
      artistName: albumReleaseData.artists[0].name,
      label: albumReleaseData.labels[0].name,
      releaseYear: albumReleaseData.year,
      albumImage: albumReleaseData.images[0].uri,
    };

    /* Upload release data to GraphQL API  */
    API.graphql(graphqlOperation(createWishListRelease, { input: inputData }))
      .catch((error) => {
        console.log(error);
      })
      /* Fetch releases from user's wishlist */
      .then(() => {
        API.graphql(graphqlOperation(listWishListReleases))
          .then((data) => {
            setUserWishListReleases(data.data.listWishListReleases.items);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  /* Delete release from user's collection */
  function deleteReleaseFromCollection(e) {
    e.preventDefault();

    /* Build object to delete release data from GraphQL API */
    const inputData = {
      id: e.target.id,
    };

    /* Delete release data from GraphQL API */
    API.graphql(graphqlOperation(deleteCollectionRelease, { input: inputData }))
      .catch((error) => {
        console.log(error);
      })
      /* Fetch releases from user's collection */
      .then(() => {
        API.graphql(graphqlOperation(listCollectionReleases))
          .then((data) => {
            setUserCollectionReleases(data.data.listCollectionReleases.items);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  /* Delete release from user's wishlist */
  function deleteReleaseFromWishList(e) {
    e.preventDefault();

    /* Build object to delete release data from GraphQL API */
    const inputData = {
      id: e.target.id,
    };

    /* Delete release data from GraphQL API */
    API.graphql(graphqlOperation(deleteWishListRelease, { input: inputData }))
      .catch((error) => {
        console.log(error);
      })
      /* Fetch releases from user's wishlist */
      .then(() => {
        API.graphql(graphqlOperation(listWishListReleases))
          .then((data) => {
            setUserWishListReleases(data.data.listWishListReleases.items);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  /** Randomizer Component Callback Functions */
  /*Select a random album from a user's collection */
  function selectRandomAlbum(e) {
    e.preventDefault();

    //Cleanup state
    setRandomize(true);
    setRandomAlbum({});

    //Scroll to the middle of the browser window
    window.scroll(0, 1200);

    //Combine user's albums and releases into new array
    const userCollection = userCollectionAlbums.concat(userCollectionReleases);

    //Select a random album from user's collection after 2 seconds
    setTimeout(() => {
      setRandomAlbum(
        userCollection[Math.floor(Math.random() * userCollection.length)]
      );

      //Set randomize to false
      setRandomize(false);
    }, 2000);
  }

  /* #endregion Callback Functions */

  /* #region Props Objects */
  /** Collection component props */
  const collectionProps = {
    userCollectionAlbums,
    userCollectionReleases,
    albumClick,
    viewAlbumRelease,
    deleteAlbumFromCollection,
    deleteReleaseFromCollection,
  };

  /** WishList component props */
  const wishListProps = {
    userWishListAlbums,
    userWishListReleases,
    albumClick,
    viewAlbumRelease,
    deleteAlbumFromWishList,
    deleteReleaseFromWishList,
  };

  /** Search Component Props */
  const searchProps = {
    search,
    onSearchFormChange,
    searchSubmit,
    searchDataLoading,
  };

  /** SearchResults component props */
  const searchResultsProps = { searchData, albumClick, searchDataLoading };

  /** SearchResultsPagination component props */
  const searchResultsPaginationProps = {
    searchResultsPagination,
    searchResultsMinPages,
    searchResultsMaxPages,
    searchResultsMinPagesMobile,
    searchResultsMaxPagesMobile,
    currentSearchResultsPage,
    firstSearchResultsPage,
    previousSearchResultsPage,
    nextSearchResultsPage,
    lastSearchResultsPage,
    previousSearchResultsPageMobile,
    nextSearchResultsPageMobile,
  };

  /** Album component props */
  const albumProps = {
    albumData,
    albumMasterData,
    addAlbumToCollection,
    addAlbumToWishList,
    deleteAlbumFromCollection,
    deleteAlbumFromWishList,
    userCollectionAlbums,
    userWishListAlbums,
  };

  /** AlbumReleasesHeader and AlbumReleases component props */
  const albumReleasesProps = {
    albumReleasesData,
    viewAlbumReleases,
    hideAlbumReleases,
    viewAlbumRelease,
  };

  /** AlbumReleasesHeader and AlbumReleasesPagination component props */
  const albumReleasesPaginationProps = {
    albumReleasesPagination,
    albumReleasesMinPages,
    albumReleasesMaxPages,
    albumReleasesMinPagesMobile,
    albumReleasesMaxPagesMobile,
    currentAlbumReleasesPage,
    firstAlbumReleasesPage,
    previousAlbumReleasesPage,
    nextAlbumReleasesPage,
    lastAlbumReleasesPage,
    previousAlbumReleasesPageMobile,
    nextAlbumReleasesPageMobile,
  };

  /** AlbumRelease component props */
  const albumReleaseProps = {
    albumReleaseData,
    addReleaseToCollection,
    addReleaseToWishList,
    deleteReleaseFromCollection,
    deleteReleaseFromWishList,
    userCollectionReleases,
    userWishListReleases,
  };

  /** Randomizer component props */
  const randomizerProps = {
    selectRandomAlbum,
    randomAlbum,
    randomize,
    albumClick,
  };
  /* #endregion Props Objects*/

  return (
    <React.Fragment>
      <div className="page-container">
        <div className="content-wrap">
          <Header logOut={props.logOut} />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route
              exact
              path="/collection"
              render={(props) => (
                <Collection collectionProps={collectionProps} />
              )}
            />
            <Route
              exact
              path="/wishlist"
              render={(props) => <WishList wishListProps={wishListProps} />}
            />
            <Route
              exact
              path="/randomizer"
              render={(props) => (
                <Randomizer randomizerProps={randomizerProps} />
              )}
            />
            <Route
              exact
              path="/search"
              render={(props) => (
                <Search
                  searchProps={searchProps}
                  searchResultsProps={searchResultsProps}
                  searchResultsPaginationProps={searchResultsPaginationProps}
                />
              )}
            />
            <Route
              exact
              path="/album"
              render={(props) => (
                <Album
                  albumProps={albumProps}
                  albumReleasesProps={albumReleasesProps}
                  albumReleasesPaginationProps={albumReleasesPaginationProps}
                />
              )}
            />
            <Route
              exact
              path="/albumrelease"
              render={(props) => (
                <AlbumRelease albumReleaseProps={albumReleaseProps} />
              )}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default ProtectedComponents;
