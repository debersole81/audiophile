import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import masterReleaseLogo from "../assets/master-release-logo.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";

function WishList(props) {
  /* #region Global Variables */
  /** useHistory hook variable. */
  const history = useHistory();
  /* #endregion Global Variables */

  /* #region Destructure Props */
  const {
    userWishListAlbums,
    userWishListReleases,
    albumClick,
    viewAlbumRelease,
    deleteAlbumFromWishList,
    deleteReleaseFromWishList,
  } = props.wishListProps;
  /* #endregion Destructure Props */

  /* #region Join and Sort User Albums and Releases */
  /** Join user albums and releases, assign output to userCollection */
  const userWishList = userWishListAlbums.concat(userWishListReleases);

  /**Sort userWishList by artist name and then by album name */
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
      return firstAlbumTitle > secondAlbumTitle
        ? 1
        : firstAlbumTitle < secondAlbumTitle
        ? -1
        : 0;
      //If artistNames are not equal, sort first by artistName and then repeat loop to sort albumTitles
    } else {
      return firstArtistName < secondArtistName ? -1 : 1;
    }
  }
  //Declare a new variable to hold the sorted userCollection array
  const sortedUserWishList = userWishList.sort(compare);
  /* #endregion Join and Sort User Albums and Releases */

  if (Array.isArray(sortedUserWishList) && sortedUserWishList.length) {
    return (
      <React.Fragment>
        <Jumbotron fluid className="user-library-jumbotron">
          <Row className="row">
            <Col className="col">
              <h1>Wish List</h1>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col">
              <p className="lead text-muted">
                Your next album awaits, right here in your wish list.
              </p>
            </Col>
          </Row>
        </Jumbotron>
        <Container>
          <Row>
            {sortedUserWishList.map((albums) => (
              <Col key={albums.albumId} className="col user-libary-col">
                <Card className="user-library-card">
                  <div className="overflow">
                    <Card.Img
                      className="user-library-card-img overflow"
                      variant="top"
                      src={albums.albumImage}
                      alt="Album Cover Art"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-truncate">
                      {albums.albumTitle}
                    </Card.Title>
                    <Card.Subtitle className="mb-4 text-truncate text-muted">
                      {albums.artistName}
                    </Card.Subtitle>
                    <Row className="row">
                      {albums.albumId === albums.mainReleaseId ? (
                        <Col className="col" xs={4} s={4} md={4} lg={4} xl={4}>
                          <Image
                            className="user-library-album-master-logo"
                            src={masterReleaseLogo}
                            alt="Album Master Release Logo"
                          />
                        </Col>
                      ) : (
                        <Col
                          className="col"
                          xs={4}
                          s={4}
                          md={4}
                          lg={4}
                          xl={4}
                        ></Col>
                      )}
                      {albums.albumId === albums.mainReleaseId ? (
                        <Col className="col" xs={8} s={8} md={8} lg={8} xl={8}>
                          <ButtonGroup className="user-library-btn-group">
                            <Button
                              id={albums.id}
                              variant="outline-dark"
                              size="sm"
                              onClick={deleteAlbumFromWishList}
                              block
                            >
                              Remove
                            </Button>
                          </ButtonGroup>
                          <ButtonGroup className="user-library-btn-group">
                            <Button
                              id={albums.masterId}
                              className="pl-3 pr-3"
                              variant="outline-dark"
                              size="sm"
                              onClick={albumClick}
                              block
                            >
                              View
                            </Button>
                          </ButtonGroup>
                        </Col>
                      ) : (
                        <Col className="col" xs={8} s={8} md={8} lg={8} xl={8}>
                          <ButtonGroup className="user-library-btn-group">
                            <Button
                              id={albums.id}
                              variant="outline-dark"
                              size="sm"
                              onClick={deleteReleaseFromWishList}
                              block
                            >
                              Remove
                            </Button>
                          </ButtonGroup>
                          <ButtonGroup className="user-library-btn-group">
                            <Button
                              id={albums.albumId}
                              className="pl-3 pr-3"
                              variant="outline-dark"
                              size="sm"
                              onClick={viewAlbumRelease}
                              block
                            >
                              View
                            </Button>
                          </ButtonGroup>
                        </Col>
                      )}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Jumbotron className="user-library-jumbotron">
        <Row className="row">
          <Col className="col">
            <h1>Wish List</h1>
          </Col>
        </Row>
      </Jumbotron>
      <Container className="user-library-empty">
        <Row className="row">
          <Col className="col">
            <h1>Search for albums to add to your wish list.</h1>
            <Button
              variant="outline-dark"
              className="col-6 mx-auto"
              size="sm"
              onClick={() => history.push("/search")}
              block
            >
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default WishList;
