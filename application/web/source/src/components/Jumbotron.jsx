import { Button } from "react-bootstrap";
import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron py-5">
      <h1 className="display-4">The Most Popular Coffee Drinks</h1>
      <p className="lead"></p>
      <Button href="/hot" variant="dark">
        Hot Coffee
      </Button>
      <Button href="/iced" variant="light">
        Iced Coffee
      </Button>
    </div>
  );
};

export default Jumbotron;
