import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

function Header(props) {

    /**Change handlers*/

    /**Render the dashboard.*/
    const handleViewDashTrue = () => {
        props.viewDashTrue();
    };

    /**Hide the dashboard*/
    const handleViewDashFalse = () => {
        props.viewDashFalse();
    };

    return (
        <Navbar bg='dark' variant='dark' className='p-4 mb-2'>
            <Navbar.Brand href='#home'>AudioFile</Navbar.Brand>        
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <LinkContainer exact to='/dashboard' onClick={handleViewDashTrue}>
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to ='/dashboard/collection' onClick={handleViewDashFalse}>
                        <Nav.Link>Collection</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to='/dashboard/wishlist' onClick={handleViewDashFalse}>
                        <Nav.Link>Wish List</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/dashboard/randomizer" onClick={handleViewDashFalse}>
                        <Nav.Link>Randomizer</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to="/dashboard/search" onClick={handleViewDashFalse}>
                        <Nav.Link>Search</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;