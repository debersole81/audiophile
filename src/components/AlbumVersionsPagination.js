import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

function AlbumVersionsPagination(props) {

    console.log('Render: AlbumVersionsPagination Component');

    /**Destructure props*/
    const { albumVersionsPagination } = props.albumVersionsPaginationProps;
    const { handleCurrentAlbumVersionsPage } = props.albumVersionsPaginationProps;
    const { handleFirstAlbumVersionsPage } = props.albumVersionsPaginationProps;
    const { handlePreviousAlbumVersionsPage } = props.albumVersionsPaginationProps;
    const { handleNextAlbumVersionsPage } = props.albumVersionsPaginationProps;
    const { handleLastAlbumVersionsPage } = props.albumVersionsPaginationProps;

    console.log(albumVersionsPagination);

    /**Build pages array*/
    //Variable to hold active page
    const activePage = albumVersionsPagination.page;

    //Empty array to store formatted page numbers
    const pages = [];

    //Loop over pages and apply formatting
    for (let i = 1; i <= albumVersionsPagination.pages; i++) {
        //Push page numbers onto pages array
        pages.push(
            <Pagination.Item key={i} id={i} className={(i === activePage ? 'active' : null)} onClick={handleCurrentAlbumVersionsPage}>
                {i}
            </Pagination.Item>
        );
    };

    console.log(pages);

    if (albumVersionsPagination.pages > 1) {
        return (
            <Row className='row'>
                <Col className='col'>
                    <Pagination>
                        <Pagination.First className={albumVersionsPagination.page === 1 ? 'disabled' : ''} onClick={handleFirstAlbumVersionsPage}>First</Pagination.First>
                        <Pagination.Prev className={albumVersionsPagination.page === 1 ? 'disabled' : ''} onClick={handlePreviousAlbumVersionsPage}>Previous</Pagination.Prev>
                        <Pagination.Item>1</Pagination.Item>
                        <Pagination.Next>Next</Pagination.Next>
                        <Pagination.Last>Last</Pagination.Last>
                    </Pagination>
                </Col>
            </Row>
        );
    };

    return (null);
};

export default AlbumVersionsPagination;