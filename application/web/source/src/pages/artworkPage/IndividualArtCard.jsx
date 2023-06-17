import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function IndividualArtCard({ artwork }) {
  const { title, artist_title, image_id } = artwork;

  return (
    <Col xs={12} sm={6} md={4} className="my-3">
      <Card style={{ width: "18rem" }} className="m-1 h-100">
        <Card.Img
          variant="top"
          src={`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`}
        />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Subtitle>{artist_title}</Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default IndividualArtCard;
