import React from "react";
import "../App.css";
import AlbumReleases from "../components/AlbumReleases";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function AlbumReleasesHeader(props) {
  /* #region Props Destructure */
  const { albumReleasesData, viewAlbumReleases, hideAlbumReleases } =
    props.albumReleasesProps;
  /* #endregion Props Destructure */

  if (
    Object.keys(albumReleasesData).length === 0 &&
    albumReleasesData.constructor === Object
  ) {
    return (
      <Container>
        <Row className="row album-releases-header-row">
          <Col
            className="col album-releases-header-h5-col"
            xs={12}
            s={12}
            lg={6}
          >
            <h5 className="album-releases-header-thead">Album Releases</h5>
          </Col>
          <Col
            className="col album-releases-header-button-col"
            xs={12}
            s={12}
            lg={6}
          >
            <Button
              size="sm"
              variant="outline-light"
              className="album-releases-header-button"
              onClick={viewAlbumReleases}
            >
              Show Releases
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="row album-releases-header-row">
        <Col className="col album-releases-header-h5-col" xs={12} s={12} lg={6}>
          <h5 className="album-releases-header-thead">Album Releases</h5>
        </Col>
        <Col
          className="col album-releases-header-button-col"
          xs={12}
          s={12}
          lg={6}
        >
          <Button
            size="sm"
            variant="outline-light"
            className="album-releases-header-button"
            onClick={hideAlbumReleases}
          >
            Hide Releases
          </Button>
        </Col>
      </Row>
      <AlbumReleases
        albumReleasesProps={props.albumReleasesProps}
        albumReleasesPaginationProps={props.albumReleasesPaginationProps}
      />
    </Container>
  );
}

export default AlbumReleasesHeader;
