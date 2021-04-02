import React from 'react';
import '../App.css';
import Pagination from 'react-bootstrap/Pagination';

function SearchResultsPagination(props) {

    console.log('Render: SearchResultsPagination Component');

    /**Build pages array*/
    //Variable to hold active page
    const activePage = props.searchResultsPagination.page

    //Empty array to store formatted page numbers
    const pages = []

    //Loop over pages and apply formatting
    for (let i = 1; i <= props.searchResultsPagination.pages; i++) {
        //Push page numbers onto pages array
        pages.push(
            <Pagination.Item key={i} id={i} className={(i === activePage ? 'active' : null)} onClick={props.handleCurrentSearchResultsPage}>
                {i}
            </Pagination.Item>
        )
    };

    if (props.searchResultsPagination.pages > 1) {
        return (
            <React.Fragment>
                <Pagination className='mt-3 flex-wrap justify-content-center'>
                    <Pagination.First className={props.searchResultsPagination.page === 1 ? 'disabled' : ''} onClick={props.handleFirstSearchResultsPage}>First</Pagination.First>
                    <Pagination.Prev className={props.searchResultsPagination.page === 1 ? 'disabled' : ''} onClick={props.handlePreviousSearchResultsPage}>Previous</Pagination.Prev>
                    {pages.map((page) => (page.props.id < props.searchResultsMaxPages + 1 && page.props.id > props.searchResultsMinPages) ? page : null)}
                    <Pagination.Next className={props.searchResultsPagination.page === props.searchResultsPagination.pages ? 'disabled' : ''} onClick={props.handleNextSearchResultsPage}>Next</Pagination.Next>
                    <Pagination.Last className={props.searchResultsPagination.page === props.searchResultsPagination.pages ? 'disabled' : ''} onClick={props.handleLastSearchResultsPage}>Last</Pagination.Last>
                </Pagination>
            </React.Fragment>
        )
    };

    return (null);
};


export default SearchResultsPagination;
