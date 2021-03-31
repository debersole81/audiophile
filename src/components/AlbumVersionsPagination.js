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

    /**Build pages array*/
    //Variable to hold active page
    const activePage = albumVersionsPagination.activePage;

    //Empty array to store formatted page numbers
    const pages = [];

    console.log(albumVersionsPagination);

    return (
        <Row className='row'>
            <Col className='col'>
                <Pagination>
                    <Pagination.First>First</Pagination.First>
                    <Pagination.Prev>Previous</Pagination.Prev>
                    <Pagination.Item>1</Pagination.Item>
                    <Pagination.Next>Next</Pagination.Next>
                    <Pagination.Last>Last</Pagination.Last>
                </Pagination>
            </Col>
        </Row>
    );
};

export default AlbumVersionsPagination;