import { Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";

function IndividualArtCard({ cup }) {
  const { title, description, image, id } = cup;
  const location = useLocation();

  return (
    <Col xs={12} sm={6} md={4} className="my-3">
      <Card style={{ width: "18rem" }} className="m-1 h-100">
        <Card.Img variant="top" src={image} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="small">{description}</Card.Subtitle>
        </Card.Body>
        <Card.Footer className="fst-italic text-muted mt-2">
          <Button variant="outline-info" href={`${location.pathname}/${id}`}>
            More Info
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default IndividualArtCard;
