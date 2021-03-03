import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function SearchResultsPagination (props) {

    console.log(props.searchResultsPagination);

    /**Global variables*/
    const activePage = props.searchResultsPagination.page
    //Empty array to store each page as a number
    const pages = []

    /**Format pages and push onto pages array*/
    for(let i = 1; i <= props.searchResultsPagination.pages; i++){    
        pages.push(
            <Pagination.Item key={i} id={i} className={(i === activePage ? 'active' : null)} onClick={props.handleCurrentSearchResultsPage}>
                {i}
            </Pagination.Item>
        )
    };

    if(props.searchResultsPagination.pages > 1){
        return(
        <React.Fragment>
            <Pagination className='mt-3 justify-content-md-center'>
                <Pagination.First className={props.searchResultsPagination.page === 1 ? 'disabled' : ''} onClick={props.handleFirstSearchResultsPage}>First</Pagination.First>
                <Pagination.Prev className={props.searchResultsPagination.page === 1 ? 'disabled' : ''} onClick={props.handlePreviousSearchResultsPage}>Previous</Pagination.Prev>
                {pages.map((page) => (page.props.id < props.searchResultsMaxPages + 1 && page.props.id > props.searchResultsMinPages) ? page : null)}
                <Pagination.Next className={props.searchResultsPagination.page === props.searchResultsPagination.pages ? 'disabled' : ''} onClick={props.handleNextSearchResultsPage}>Next</Pagination.Next>
                <Pagination.Last className={props.searchResultsPagination.page === props.searchResultsPagination.pages ? 'disabled' : ''} onClick={props.handleLastSearchResultsPage}>Last</Pagination.Last>
            </Pagination>
        </React.Fragment>
        )
    };

    return(null);
};


export default SearchResultsPagination;
