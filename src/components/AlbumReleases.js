import React, { useEffect } from 'react';
import '../App.css';
import AlbumReleasesPaginationWrapper from '../components/AlbumReleasesPaginationWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

/**Notes
 * Each teable row will need to have an onClick and id attribute
 * id attribute will be equal to albumReleasesData.id
 * onClick attribute will fire a callback in protected components
 * Callback will call the discogsAPIrelease helper func
 * Response from callback will set albumData and rerender album component (via history.push)
 * Set overflow vals on table to create vertical scrolling feature
 */




function AlbumReleases(props) {

    console.log('Render: AlbumReleases Component')
    console.log(props);

    /**Destructure props*/
    const { albumReleasesData } = props.albumReleasesProps;
    const { handleViewAlbumRelease } = props.albumReleasesProps;

    console.log(albumReleasesData);

    /**Scroll to the bottom of the window on component mount*/
    useEffect(() => {
        window.scroll(0, 1200)
    }, []);


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
                                <td><Button variant='dark' size='sm' id={album.id} onClick={handleViewAlbumRelease}>VIEW</Button></td>
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