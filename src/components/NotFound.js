import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styling/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404</h1>

      <h3 className="not-found-message">
        The Page you are looking for is Not Found ...
      </h3>

      <Link to="/">
        <Button variant="outline-primary" className="home-button">
          Go back to Home Page
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
