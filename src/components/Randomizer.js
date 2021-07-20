import React from "react";
import "../App.css";
import audioPhileAlbumLogoFull from "../assets/audiophile-album-logo-full.svg";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

  /**This structure should allow me to remove the class altering syntax in ProtectedComponents */
  //Build a return statement that returns the static album logo and a button if randomize is false

  //If randomize is true, return spinning album logo without the button
  if (randomize) {
    return (
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
        <Row className="row">
          <Col className="col randomize-btn">
            <Button variant="dark" size="sm" onClick={selectRandomAlbum}>
              Randomize
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  //After randomize has finished, return the selected album and a button that re-randomizes
  return (
    <div>
      <h1>Randomizer</h1>
      <img src={randomAlbum.albumImage} />
      <button onClick={selectRandomAlbum}>Randomize</button>
    </div>
  );
}

export default Randomizer;
