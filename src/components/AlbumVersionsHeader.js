import React from 'react';
import '../App.css';
import AlbumVersions from '../components/AlbumVersions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function AlbumVersionsHeader(props) {

    console.log(props);

    /**Destructuring props*/
    const { albumData } = props.albumProps;
    const { handleAlbumVersions } = props.albumVersionsProps;
    const { albumVersionsData } = props.albumVersionsProps;

    console.log(albumData);
    console.log(albumVersionsData);

    //pass handleAlbumVersions and albumVersionsData to the AlbumVersions component

    // if (albumVersionsData) {
        return (
            <Container>
                <Row>
                    <Col>
                        <h5>Album Versions</h5>
                    </Col>
                    <Col>
                        <Button>SEE MORE VERSIONS</Button>
                    </Col>
                </Row>
                {/* <AlbumVersions /> */}
            </Container>
        );
    // };

    // return (
    //     <Container>
    //         <Row>
    //             <Col>
    //                 <h5>Album Versions</h5>
    //             </Col>
    //             <Col>
    //                 <Button>View</Button>
    //             </Col>
    //         </Row>
    //     </Container>
    // );
};

export default AlbumVersionsHeader;
