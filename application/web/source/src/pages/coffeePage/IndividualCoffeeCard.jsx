import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function IndividualArtCard({ cup }) {
  const { title, description, ingredients, image } = cup;

  return (
    <Col xs={12} sm={6} md={4} className="my-3">
      <Card style={{ width: "18rem" }} className="m-1 h-100">
        <Card.Img variant="top" src={image} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="small">{description}</Card.Subtitle>
          <Card.Footer className="fst-italic text-muted mt-2">
            {ingredients.map((ingredient) => {
              return ingredient + " ";
            })}
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default IndividualArtCard;
