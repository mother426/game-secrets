import React from "react";
import { Link } from "react-router-dom";
import './App.css';

function Detail () {

  return (
    <>{state.currentPost ? (
      <Container fluid>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Player Question:</h1>
              <p>{state.currentPost.body}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    ) : (
      
    )}</>
  );
};

export default Detail;
