import React from "react";
import "../App.css";
import audioPhileAlbumLogoFull from "../assets/audiophile-album-logo-full.svg";
import masterReleaseLogo from "../assets/master-release-logo.svg";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

/**Notes
 * Display the image of the AudioPhile LP logo
 * Logo will spin when the randomizer button is clicked
 * While spinning, an album is selected from the user's collection (Amplify or Dynamo DB)
 * After spinning,
 * The album image will replace the logo
 * A 'view album details' button will render. onClick will call handleAlbumClick callback in ProtectedComponents)
 * The randomize button will remain but beneath the view album details button
 * If randomize is clicked again, the AudioPhile logo reappears, begins to spin while a new album is selected and the whole process repeats.
 */

function Randomizer(props) {
  /* #region Destructure Props */
  const { selectRandomAlbum, randomAlbum, randomize, albumClick } =
    props.randomizerProps;
  /* #endregion Destructure Props */

  console.log(randomAlbum);

  //If randomize is true, return spinning album logo without the button
  if (randomize) {
    return (
      <React.Fragment>
        <Jumbotron className="randomize-jumbotron">
          <Row className="row">
            <Col className="col">
              <h1>Randomizer</h1>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col">
              <p className="lead text-muted">
                Can't decide what album to listen to? The AudioPhile randomizer
                can help!
              </p>
              <p className="lead text-muted">
                Press the randomize button below to select an album from your
                collection.
              </p>
            </Col>
          </Row>
        </Jumbotron>
        <Container>
          <Row className="row">
            <Col className="col randomize">
              <Image
                className="randomize-album-logo"
                src={audioPhileAlbumLogoFull}
                alt="AudioPhile album logo"
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  //After randomize has finished, return the selected album and a button that re-randomizes
  if (
    Object.keys(randomAlbum).length > 0 &&
    randomAlbum.constructor === Object
  ) {
    return (
      <React.Fragment>
        <Jumbotron className="randomize-jumbotron">
          <Row className="row">
            <Col className="col">
              <h1>Randomizer</h1>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col">
              <p className="lead text-muted">
                Can't decide what album to listen to? The AudioPhile randomizer
                can help!
              </p>
              <p className="lead text-muted">
                Press the randomize button below to select an album from your
                collection.
              </p>
            </Col>
          </Row>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <Card className="randomize-album-card">
                <div className="overflow">
                  <Card.Img
                    className="randomize-album-img"
                    variant="top"
                    src={randomAlbum.albumImage}
                    alt="Album Cover Art."
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {randomAlbum.albumTitle}
                  </Card.Title>
                  <Card.Subtitle className="mb-4 text-truncate text-muted">
                    {randomAlbum.artistName}
                  </Card.Subtitle>
                  <Row className="row">
                    {randomAlbum.albumId === randomAlbum.mainReleaseId ? (
                      <Col className="col" xs={4} s={4} md={4} lg={4} xl={4}>
                        <Image
                          className="randomize-album-master-logo"
                          src={masterReleaseLogo}
                          alt="Album Master Release Logo"
                        />
                      </Col>
                    ) : null}
                    {randomAlbum.albumId === randomAlbum.mainRealeaseId ? (
                      <Col className="col">
                        <Button
                          id={randomAlbum.masterId}
                          variant="outline-dark"
                          size="sm"
                          onClick={albumClick}
                        >
                          View
                        </Button>
                      </Col>
                    ) : (
                      <Col className="col">
                        <Button
                          id={randomAlbum.masterId}
                          variant="outline-dark"
                          size="sm"
                          className="randomize-album-view-btn"
                          onClick={albumClick}
                          block
                        >
                          View
                        </Button>
                      </Col>
                    )}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="row">
            <Col className="col randomize-btn">
              <Button variant="dark" size="sm" onClick={selectRandomAlbum}>
                Randomize Again
              </Button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  //Return static album logo and randomize button by default
  return (
    <React.Fragment>
      <Jumbotron className="randomize-jumbotron">
        <Row className="row">
          <Col className="col">
            <h1>Randomizer</h1>
          </Col>
        </Row>
        <Row className="row">
          <Col className="col">
            <p className="lead text-muted">
              Can't decide what album to listen to? The AudioPhile randomizer
              can help!
            </p>
            <p className="lead text-muted">
              Press the randomize button below to select an album from your
              collection.
            </p>
          </Col>
        </Row>
      </Jumbotron>
      <Container>
        <Row className="row">
          <Col className="col randomize">
            <Image
              className="randomize-album-logo-static"
              src={audioPhileAlbumLogoFull}
              alt="AudioPhile album logo"
            />
          </Col>
        </Row>
        <Row className="row">
          <Col className="col randomize-btn">
            <Button variant="dark" size="sm" onClick={selectRandomAlbum}>
              Randomize
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Randomizer;
