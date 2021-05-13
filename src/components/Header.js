import React from "react";
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import audioPhileLogoText from '../assets/audiophile-logo-text-white.svg';
import { useViewPort } from '../custom-hooks/useViewPort';

function Header(props) {

    /* #region Destructure Props */
    const { logOut } = props;
    /* #endregion Destructure Props */

    /* #region Set Mobile Breakpoint with Custom Hook
    /** Destructure width variable from useViewPort hook */
    const { width } = useViewPort();

    /** Declare variable for minimum breakpoint value */
    const breakpoint = 345;
    /* #endregion Set Mobile Breakpoint with Custom Hook */

    return (
        <Navbar collapseOnSelect sticky='top' bg='dark' variant='dark' className='p-4 mb-5' expand='lg'>
            {(width > breakpoint) ?
                <Navbar.Brand href='/'>
                    <img
                        src={audioPhileLogoText}
                        height={30}
                        width={225}
                        className='d-inline-block align-top'
                        alt='AudioPhile logo'
                    />
                </Navbar.Brand> :
                <Navbar.Brand href='#home'>
                    <img
                        src={audioPhileLogoText}
                        height={30}
                        width={160}
                        className='d-inline-block align-top'
                        alt='AudioPhile logo'
                    />
                </Navbar.Brand>}
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <LinkContainer exact to='/'>
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to='/collection'>
                        <Nav.Link>Collection</Nav.Link>
                    </LinkContainer>
                    <LinkContainer exact to='/wishlist'>
                        <Nav.Link>Wish List</Nav.Link>
                    </LinkContainer>
                    {/* <LinkContainer exact to="/randomizer">
                        <Nav.Link>Randomizer</Nav.Link>
                    </LinkContainer> */}
                    <LinkContainer className='mr-3' exact to="/search">
                        <Nav.Link>Search</Nav.Link>
                    </LinkContainer>
                    <Button variant='outline-light' size='sm' className='header-btn' onClick={logOut}>Logout</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;