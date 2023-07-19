import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const baseUrl = process.env.REACT_APP_BASE_URL;

function IndividualArtCard({ artwork }) {
  const { title, description, ingredients, image, id } = artwork;
  console.log("artwork: ", artwork);

  return (
    <Col xs={12} sm={6} md={4} className="my-3">
      <Card style={{ width: "18rem" }} className="m-1 h-100">
        <Card.Img variant="top" src={image} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{description}</Card.Subtitle>
          {/* <Card.Text className="fst-italic">{medium_display}</Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default IndividualArtCard;
