import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import collection from '../assets/collection.jpg';
import wishList from '../assets/wish-list.jpg';
import search from '../assets/search.jpg';
import randomizer from '../assets/randomizer.jpg';

function Dashboard() {

    return (
        <Container>
            <Row className='row'>
                <Col className='dashboard-col'>
                    <Image src={collection} className='img-fluid dashboard-image' />
                </Col>
                <Col className='dashboard-col'>
                    <Image src={wishList} className='img-fluid dashboard-image' />
                </Col>
            </Row>
            <Row className='row'>
                <Col className='dashboard-col'>
                    <Image src={search} className='img-fluid dashboard-image' />
                </Col>
                <Col className='dashboard-col'>
                    <Image src={randomizer} className='img-fluid dashboard-image' />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;