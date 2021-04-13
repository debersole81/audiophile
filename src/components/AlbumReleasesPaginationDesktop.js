import React from 'react';
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

function AlbumReleasesPaginationDesktop(props) {

    console.log('Render: AlbumReleasesPaginationDesktop Component');

    /** Destructure props */
    const { albumReleasesPagination } = props.albumReleasesPaginationProps;
    const { albumReleasesMinPages } = props.albumReleasesPaginationProps;
    const { albumReleasesMaxPages } = props.albumReleasesPaginationProps;
    const { handleCurrentAlbumReleasesPage } = props.albumReleasesPaginationProps;
    const { handleFirstAlbumReleasesPage } = props.albumReleasesPaginationProps;
    const { handlePreviousAlbumReleasesPage } = props.albumReleasesPaginationProps;
    const { handleNextAlbumReleasesPage } = props.albumReleasesPaginationProps;
    const { handleLastAlbumReleasesPage } = props.albumReleasesPaginationProps;

    /** Build pages array */
    //Variable to hold active page
    const activePage = albumReleasesPagination.page;

    //Empty array to store formatted page numbers
    const pages = [];

    //Loop over pages and apply formatting
    for (let i = 1; i <= albumReleasesPagination.pages; i++) {
        //Push page numbers onto pages array
        pages.push(
            <Pagination.Item key={i} id={i} className={(i === activePage ? 'active' : null)} onClick={handleCurrentAlbumReleasesPage}>
                {i}
            </Pagination.Item>
        );
    };

    if (albumReleasesPagination.pages > 1) {
        return (
            <Row className='row'>
                <Col className='col'>
                    <Pagination className='flex-wrap justify-content-center'>
                        <Pagination.First className={albumReleasesPagination.page === 1 ? 'disabled' : ''} onClick={handleFirstAlbumReleasesPage} />
                        <Pagination.Prev className={albumReleasesPagination.page === 1 ? 'disabled' : ''} onClick={handlePreviousAlbumReleasesPage} />
                        {pages.map((page) => (page.props.id < albumReleasesMaxPages + 1 && page.props.id > albumReleasesMinPages) ? page : null)}
                        <Pagination.Next className={albumReleasesPagination.page === albumReleasesPagination.pages ? 'disabled' : ''} onClick={handleNextAlbumReleasesPage} />
                        <Pagination.Last className={albumReleasesPagination.page === albumReleasesPagination.pages ? 'disabled' : ''} onClick={handleLastAlbumReleasesPage} />
                    </Pagination>
                </Col>
            </Row>
        );
    };

    return (null);
};

export default AlbumReleasesPaginationDesktop;