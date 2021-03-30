import React from 'react';
import '../App.css';
import AlbumVersionsPagination from '../components/AlbumVersionsPagination';
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




function AlbumVersions(props) {

    console.log('Render: AlbumVersions Component')
    console.log(props);

    /**Destructure props*/
    const { albumVersionsData } = props.albumVersionsProps;

    console.log(albumVersionsData);

    const handleAlbumVersionClick = (e) => {
        console.log(e.target.id);
    };

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
                                <td><Button variant='dark' size='sm' id={album.id} onClick={handleAlbumVersionClick}>VIEW</Button></td>
                            </tr>
                        </tbody>
                    )}
                </Table>
                <AlbumVersionsPagination albumVersionsPaginationProps={props.albumVersionsPaginationProps}/>
            </Col>
        </Row>
    );
};

export default AlbumVersions;