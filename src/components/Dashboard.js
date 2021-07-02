import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import collection from "../assets/collection.jpg";
import wishList from "../assets/wish-list.jpg";
import search from "../assets/search.jpg";
import randomizer from "../assets/randomizer.jpg";

function Dashboard() {
  return (
    <Container>
      <Row className="row">
        <Col className="dashboard-col">
          <Link to="/collection">
            <Image
              src={collection}
              className="img-fluid dashboard-image"
              alt="Collection text on a picture of headphones leaning against a stack of vinyl albums"
            />
          </Link>
        </Col>
        <Col className="dashboard-col">
          <Link to="/wishlist">
            <Image
              src={wishList}
              className="img-fluid dashboard-image"
              alt="Wish List text on a picture of a woman holding a vinyl record"
            />
          </Link>
        </Col>
      </Row>
      <Row className="row">
        <Col className="dashboard-col">
          <Link to="/search">
            <Image
              src={search}
              className="img-fluid dashboard-image"
              alt="Search text on a picture of a person searching through vinyl albums"
            />
          </Link>
        </Col>
        <Col className="dashboard-col">
          <Image
            src={randomizer}
            className="img-fluid dashboard-image"
            alt="Randomizer text on a picture of stacked of vinyl albums"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
