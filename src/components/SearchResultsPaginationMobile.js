import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination'

function SearchResultsPaginationMobile (props) {
    
    console.log('Render: SearchResultsPaginationMobile Component')
    console.log(props);
    
    return(
        <h1>Mobile pagination</h1>
    );
};

export default SearchResultsPaginationMobile;