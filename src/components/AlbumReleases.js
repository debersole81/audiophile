import React, { useEffect } from 'react';
import '../App.css';
import AlbumVersionsPaginationWrapper from '../components/AlbumVersionsPaginationWrapper';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

/**Notes
 * Each teable row will need to have an onClick and id attribute
 * id attribute will be equal to albumVersionsData.id
 * onClick attribute will fire a callback in protected components
 * Callback will call the discogsAPIrelease helper func
 * Response from callback will set albumData and rerender album component (via history.push)
 * Set overflow vals on table to create vertical scrolling feature
 */




function AlbumReleases (props) {

    console.log('Render: AlbumVersions Component')
    console.log(props);

    /**Destructure props*/
    const { albumVersionsData } = props.albumVersionsProps;

    console.log(albumVersionsData);

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
                    {albumVersionsData.map((album, index) =>
                        <tbody key={index}>
                            <tr>
                                <td><Image className='album-versions-img' src={album.thumb} alt='Album Cover Image' /></td>
                                <td>{album.title}</td>
                                <td>{album.major_formats[0]}</td>
                                <td>{album.label}</td>
                                <td>{album.catno}</td>
                                <td>{album.country}</td>
                                <td>{album.released}</td>
                                <td><Button variant='dark' size='sm' id={album.id}>VIEW</Button></td>
                            </tr>
                        </tbody>
                    )}
                </Table>
                <AlbumVersionsPaginationWrapper albumVersionsPaginationProps={props.albumVersionsPaginationProps} />
            </Col>
        </Row>
    );
};

export default AlbumReleases;