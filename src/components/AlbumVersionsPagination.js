import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

function AlbumVersionsPagination() {

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