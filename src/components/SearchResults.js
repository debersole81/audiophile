import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Loading from "./Loading";

function SearchResults(props) {
  /* #region Props destructure */
  const { searchData, albumClick, searchDataLoading } =
    props.searchResultsProps;
  /* #endregion Props destructure */

  //Return loading component if search data is still loading
  if (searchDataLoading) {
    return (
      <Container className='search-results-loading'>
        <Loading width={215} />
      </Container>
    );
  }

  //Return search results when search data has finished loading
  if (Array.isArray(searchData) && searchData.length && !searchDataLoading) {
    return (
      <Container>
        <Row>
          {searchData.map((results) => (
            <Col
              key={results.id}
              className="col search-results-col"
              md={6}
              lg={4}
            >
              <Card className="search-results-card">
                <div className="overflow">
                  <Card.Img
                    className="search-results-card-img overflow"
                    variant="top"
                    src={results.cover_image}
                    alt="Album Cover Art"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-truncate">
                    {results.title.split(" - ")[1]}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-truncate text-muted">
                    {results.title.split(" - ")[0]}
                  </Card.Subtitle>
                  <Card.Text className="text-truncate">
                    {results.label[0]}
                    <br />
                    {results.year}
                    <br />
                  </Card.Text>
                  <Button
                    variant="outline-dark"
                    size="sm"
                    id={results.master_id}
                    onClick={albumClick}
                    block
                  >
                    View
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  //Return null if search hasn't been initiated
  return null;
}

export default SearchResults;
