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

    return (
        <Row>
            <Col>
                <Table>
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
                            <td><Image src={album.thumb} alt='Album Cover Image'/></td>
                            <td>{album.title}</td>
                            <td>{album.major_formats[0]}</td>
                            <td>{album.label}</td>
                            <td>{album.catno}</td>
                            <td>{album.country}</td>
                            <td>{album.released}</td>
                        </tbody>
                    )}
                </Table>
                <AlbumVersionsPagination />
            </Col>
        </Row>
    );
};

export default AlbumVersions;