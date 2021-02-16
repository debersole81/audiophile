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
        <Navbar>
            <Navbar.Brand href='#home'>AudioFile</Navbar.Brand>        
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <LinkContainer to='/dashboard' onClick={handleViewDashTrue}>
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to ='/dashboard/collection' onClick={handleViewDashFalse}>
                        <Nav.Link>Collection</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/dashboard/wishlist' onClick={handleViewDashFalse}>
                        <Nav.Link>Wish List</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/dashboard/randomizer" onClick={handleViewDashFalse}>
                        <Nav.Link>Randomizer</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/dashboard/search" onClick={handleViewDashFalse}>
                        <Nav.Link>Search</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;