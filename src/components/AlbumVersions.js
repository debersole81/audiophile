import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

/**Notes
 * Each teable row will need to have an onClick and id attribute
 * id attribute will be equal to albumVersionsData.id
 * onClick attribute will fire a callback in protected components
 * Callback will call the discogsAPIrelease helper func
 * Response from callback will set albumData and rerender album component (via history.push)
 */


function AlbumVersions(props) {

    console.log(props);

    // /**Destructure props*/
    // const { albumData } = props.albumProps;
    // const { handleViewAlbumVersions } = props.albumVersionsProps;
    // const { albumVersionsData } = props.albumVersionsProps;

    // console.log(albumVersionsData);


    return (
        <Container>
            <Row className='row'>
                <Col className='col'>
                    <h5>Album Versions</h5>
                </Col>
                <Col className='col'>
                    {/* <Button id={albumData.master_id} onClick={handleViewAlbumVersions}>View Album Versions</Button> */}
                </Col>
            </Row>
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
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default AlbumVersions;