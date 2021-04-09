import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination'

function SearchResultsPaginationMobile(props) {

    console.log('Render: SearchResultsPaginationMobile Component')

    /** Destructure props */
    const { searchResultsPagination } = props.searchResultsPaginationProps;
    const { searchResultsMinPagesMobile } = props.searchResultsPaginationProps;
    const { searchResultsMaxPagesMobile } = props.searchResultsPaginationProps;
    const { handleCurrentSearchResultsPage } = props.searchResultsPaginationProps;
    const { handlePreviousSearchResultsPageMobile } = props.searchResultsPaginationProps;
    const { handleNextSearchResultsPageMobile } = props.searchResultsPaginationProps;

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
                            <Pagination.Prev className={searchResultsPagination.page === 1 ? 'disabled' : ''} onClick={handlePreviousSearchResultsPageMobile} />
                            {pages.map((page) => (page.props.id < searchResultsMaxPagesMobile + 1 && page.props.id > searchResultsMinPagesMobile) ? page : null)}
                            <Pagination.Next className={searchResultsPagination.page === searchResultsPagination.pages ? 'disabled' : ''} onClick={handleNextSearchResultsPageMobile} />
                        </Pagination>
                    </Col>
                </Row>
            </Container>
        );
    };

    return(null);
};

export default SearchResultsPaginationMobile;