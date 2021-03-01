import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard(props) {
    console.log('Render: Dashboard Component');

    return (
        <div>
            <Link to='/collection'> Collection </Link> <br />
            <Link to='/wishlist'> Wish List </Link> <br />
            <Link to='/randomizer'> Randomizer </Link> <br />
            <Link to='/search'> Search </Link>
        </div>
    );

};

export default Dashboard;