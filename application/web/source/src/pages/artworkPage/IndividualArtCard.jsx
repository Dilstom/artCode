import Card from "react-bootstrap/Card";

function IndividualArtCard({ artwork }) {
  const { title, artist_title, image_id } = artwork;

  return (
    <Card style={{ width: "18rem" }}>
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
  );
}

export default IndividualArtCard;
