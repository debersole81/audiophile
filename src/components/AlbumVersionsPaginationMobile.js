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


    return (
        <h1>Mobile Pagination</h1>
    );
};

export default AlbumVersionsPaginationMobile;