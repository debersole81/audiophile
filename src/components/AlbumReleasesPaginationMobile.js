import React from 'react';
import "../App.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

function AlbumReleasesPaginationMobile(props) {

    /* #region Props Destructure */
    const { albumReleasesPagination,
        albumReleasesMinPagesMobile,
        albumReleasesMaxPagesMobile,
        currentAlbumReleasesPage,
        previousAlbumReleasesPageMobile,
        nextAlbumReleasesPageMobile
    } = props.albumReleasesPaginationProps;
    /* #endregion Props Destructure */

    /* #region Page Number Formatting and Prep for Rendering */
    /** Build pages array */
    //Variable to hold active page
    const activePage = albumReleasesPagination.page;

    //Empty array to store formatted page numbers
    const pages = [];

    //Loop over pages and apply formatting
    for (let i = 1; i <= albumReleasesPagination.pages; i++) {
        //Push page numbers onto pages array
        pages.push(
            <Pagination.Item key={i} id={i} className={(i === activePage ? 'active' : null)} onClick={currentAlbumReleasesPage}>
                {i}
            </Pagination.Item>
        );
    };
    /* #endregion Page Number Formatting and Prep for Rendering */

    if (albumReleasesPagination.pages > 1) {
        return (
            <Row className='row'>
                <Col className='col'>
                    <Pagination className='flex-wrap justify-content-center'>
                        <Pagination.Prev className={albumReleasesPagination.page === 1 ? 'disabled' : ''} onClick={previousAlbumReleasesPageMobile} />
                        {pages.map((page) => (page.props.id < albumReleasesMaxPagesMobile + 1 && page.props.id > albumReleasesMinPagesMobile) ? page : null)}
                        <Pagination.Next className={albumReleasesPagination.page === albumReleasesPagination.pages ? 'disabled' : ''} onClick={nextAlbumReleasesPageMobile} />
                    </Pagination>
                </Col>
            </Row>
        );
    };

    return (null);
};

export default AlbumReleasesPaginationMobile;