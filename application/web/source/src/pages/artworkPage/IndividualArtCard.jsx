import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function IndividualArtCard({ artwork }) {
  const { title, artist_title, image_id, alt_image_ids, medium_display } =
    artwork;
  console.log("artwork: ", artwork);

  return (
    <Col xs={12} sm={6} md={4} className="my-3">
      <Card style={{ width: "18rem" }} className="m-1 h-100">
        <Card.Img
          variant="top"
          src={`https://www.artic.edu/iiif/2/${
            alt_image_ids.length > 0 ? alt_image_ids[0] : image_id
          }/full/200,/0/default.jpg`}
        />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{artist_title}</Card.Subtitle>
          <Card.Text className="fst-italic">{medium_display}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default IndividualArtCard;
