import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Footer() {
    return (
        <Navbar bg='dark' variant='dark' className='footer'>
            <Row className='row'>
                <Col className='col footer-col'>
                    <p className='footer-p'>©2021 AudioPhile Projects Limited</p>
                </Col>
            </Row>
        </Navbar>
    );
};

export default Footer;