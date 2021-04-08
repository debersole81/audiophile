import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

function SearchResultsPaginationDesktop(props) {

    console.log('Render: SearchResultsPagination Component');
    console.log(props);

    /** Destructure props */
    const { searchResultsPagination } = props.searchResultsPaginationProps;
    const { searchResultsMinPages } = props.searchResultsPaginationProps;
    const { searchResultsMaxPages } = props.searchResultsPaginationProps;
    const { handleCurrentSearchResultsPage } = props.searchResultsPaginationProps;
    const { handleFirstSearchResultsPage } = props.searchResultsPaginationProps;
    const { handlePreviousSearchResultsPage } = props.searchResultsPaginationProps;
    const { handleNextSearchResultsPage } = props.searchResultsPaginationProps;
    const { handleLastSearchResultsPage } = props.searchResultsPaginationProps;

    /** Build pages array */
    //Variable to hold active page
    const activePage = searchResultsPagination.page

    //Empty array to store formatted page numbers
    const pages = []

    //Loop over pages and apply formatting
    for (let i = 1; i <= searchResultsPagination.pages; i++) {
        //Push page numbers onto pages array
        pages.push(
            <Pagination.Item key={i} id={i} className={(i === activePage ? 'active' : null)} onClick={handleCurrentSearchResultsPage}>
                {i}
            </Pagination.Item>
        )
    };

    if (searchResultsPagination.pages > 1) {
        return (
            <Container>
                <Row className='row'>
                    <Col className='col'>
                        <Pagination className='mt-3 flex-wrap justify-content-center'>
                            <Pagination.First className={searchResultsPagination.page === 1 ? 'disabled' : ''} onClick={handleFirstSearchResultsPage} />
                            <Pagination.Prev className={searchResultsPagination.page === 1 ? 'disabled' : ''} onClick={handlePreviousSearchResultsPage} />
                            {pages.map((page) => (page.props.id < searchResultsMaxPages + 1 && page.props.id > searchResultsMinPages) ? page : null)}
                            <Pagination.Next className={searchResultsPagination.page === searchResultsPagination.pages ? 'disabled' : ''} onClick={handleNextSearchResultsPage} />
                            <Pagination.Last className={searchResultsPagination.page === searchResultsPagination.pages ? 'disabled' : ''} onClick={handleLastSearchResultsPage} />
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        )
    };

    return (null);
};


export default SearchResultsPaginationDesktop;
