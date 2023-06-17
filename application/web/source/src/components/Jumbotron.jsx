import { Button } from "react-bootstrap";
import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron py-5">
      <h1 className="display-4">Art Institute of Chicago</h1>
      <p className="lead"></p>
      <Button href="/artworks" variant="dark">
        Explore the Artworks
      </Button>
    </div>
  );
};

export default Jumbotron;
