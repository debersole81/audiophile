import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

/**Notes
 * When an album in the collection is clicked, use the handleAlbumClick callback in ProtectedComponents to render the album
 */

function Collection(props) {

    /* #region Destructure Props */
    const { userCollectionAlbums, userCollectionReleases } = props.collectionProps;
    /* #endregion Destructure Props */

    /* #region Join and Sort User Albums and Releases */
    /** Join user albums and releases, assign output to userCollection */
    const userCollection = userCollectionAlbums.concat(userCollectionReleases);

    /**Sort userCollection by artist name and then by album name */
    //Define compare function to pass to array.sort method
    function compare(a, b) {
        //Declare variables for artistName fields
        const firstArtistName = a.artistName.toUpperCase();
        const secondArtistName = b.artistName.toUpperCase();
        //Declare variables for albumTitle fields
        const firstAlbumTitle = a.albumTitle.toUpperCase();
        const secondAlbumTitle = b.albumTitle.toUpperCase();

        // If artistNames are equal, sort by albumTitle
        if (firstArtistName === secondArtistName) {
            return (firstAlbumTitle > secondAlbumTitle) ? 1 : (firstAlbumTitle < secondAlbumTitle) ? -1 : 0;
            //If artistNames are not equal, sort first by artistName and then repeat loop to sort albumTitles
        } else {
            return (firstArtistName < secondArtistName) ? -1 : 1;
        }
    };
    //Declare a new variable to hold the sorted userCollection array
    const sortedUserCollection = userCollection.sort(compare);
    console.log(sortedUserCollection);
    /* #endregion Join and Sort User Albums and Releases */


    if (Array.isArray(sortedUserCollection) && sortedUserCollection.length) {
        return (
            <Container>
                <Row>
                    {sortedUserCollection.map((albums) =>
                        <Col key={albums.albumId} className='col user-libary-col'>
                            <Card className='user-library-card'>
                                <div className='overflow'>
                                    <Card.Img className='user-library-card-img overflow' variant='top' src={albums.albumImage} alt='Album Cover Art' />
                                </div>
                                <Card.Body>
                                    <Card.Title className='text-truncate'>{albums.albumTitle}</Card.Title>
                                    <Card.Subtitle className='mb-2 text-truncate text-muted'>{albums.artistName}</Card.Subtitle>
                                    {/* <Card.Text>
                                        {albums.label}<br />
                                        {albums.releaseYear}<br />
                                    </Card.Text> */}
                                    {/* <Col>
                                        <Button className='mt-2' variant='secondary' size='sm' block>View</Button>
                                    </Col>
                                    <Col>
                                        <Button className='mt-1' variant='secondary' size='sm' block>Remove</Button>
                                    </Col> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }

    return (null);
    //Search for albums text + button
};

export default Collection;