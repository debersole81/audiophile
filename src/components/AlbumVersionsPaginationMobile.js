import React from 'react';
import "../App.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

function AlbumVersionsPaginationMobile(props) {

    console.log('Render: AlbumVersionPaginationMobile Component');

    /** Destructure props */
    const { albumVersionsPagination } = props.albumVersionsPaginationProps;
    const { albumVersionsMinPages } = props.albumVersionsPaginationProps;
    const { albumVersionsMaxPages } = props.albumVersionsPaginationProps;
    const { handleCurrentAlbumVersionsPage } = props.albumVersionsPaginationProps;
    const { handleFirstAlbumVersionsPage } = props.albumVersionsPaginationProps;
    const { handlePreviousAlbumVersionsPage } = props.albumVersionsPaginationProps;
    const { handleNextAlbumVersionsPage } = props.albumVersionsPaginationProps;
    const { handleLastAlbumVersionsPage } = props.albumVersionsPaginationProps;

    /** Build pages array */
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

    if (albumVersionsPagination.pages > 1) {
        return (
            <Row className='row'>
                <Col className='col'>
                    <Pagination className='flex-wrap justify-content-center'>
                        <Pagination.First className={albumVersionsPagination.page === 1 ? 'disabled' : ''} onClick={handleFirstAlbumVersionsPage} />
                        <Pagination.Prev className={albumVersionsPagination.page === 1 ? 'disabled' : ''} onClick={handlePreviousAlbumVersionsPage} />
                        {pages.map((page) => (page.props.id < albumVersionsMaxPages + 1 && page.props.id > albumVersionsMinPages) ? page : null)}
                        <Pagination.Next className={albumVersionsPagination.page === albumVersionsPagination.pages ? 'disabled' : ''} onClick={handleNextAlbumVersionsPage} />
                        <Pagination.Last className={albumVersionsPagination.page === albumVersionsPagination.pages ? 'disabled' : ''} onClick={handleLastAlbumVersionsPage} />
                    </Pagination>
                </Col>
            </Row>
        );
    };

    return (null);};

export default AlbumVersionsPaginationMobile;