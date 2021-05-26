import React, { useEffect } from 'react';
import '../App.css';
import AlbumReleasesPaginationWrapper from '../components/AlbumReleasesPaginationWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

function AlbumReleases(props) {

    /* #region Props Destructure */
    const { albumReleasesData, viewAlbumRelease } = props.albumReleasesProps;
    /* #endregion Props Destructure */

    /* #region Auto Scroll */
    /**Scroll to the bottom of the window on component mount*/
    // useEffect(() => {
    //figure out a way to return this only if the view releases or one of the pagination links are clicked.
    //     window.scroll(0, 1200)
    // }, []);
    /* #endregion Auto Scroll */

    return (
        <Row>
            <Col>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Cover Image</th>
                            <th>Title</th>
                            <th>Format</th>
                            <th>Label</th>
                            <th>Cat #</th>
                            <th>Release Country</th>
                            <th>Release Year</th>
                        </tr>
                    </thead>
                    {albumReleasesData.map((album, index) =>
                        <tbody key={index}>
                            <tr>
                                <td><Image className='album-releases-img' src={album.thumb} alt='Album Cover Image' /></td>
                                <td>{album.title}</td>
                                <td>{album.major_formats[0]}</td>
                                <td>{album.label}</td>
                                <td>{album.catno}</td>
                                <td>{album.country}</td>
                                <td>{album.released}</td>
                                <td><Button variant='dark' size='sm' id={album.id} onClick={viewAlbumRelease}>View</Button></td>
                            </tr>
                        </tbody>
                    )}
                </Table>
                <AlbumReleasesPaginationWrapper albumReleasesPaginationProps={props.albumReleasesPaginationProps} />
            </Col>
        </Row>
    );
};

export default AlbumReleases;