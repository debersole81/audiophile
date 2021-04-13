import React from 'react';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

function AlbumReleaseTracks(props) {

    console.log('Render: AlbumReleaseTracks Component');
    console.log(props);

    /** Destructuring props */
    const { albumReleaseData } = props.albumReleaseProps;

    return (
        <h1>AlbumReleaseTracks</h1>
    );
};

export default AlbumReleaseTracks;