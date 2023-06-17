import React, { useEffect, useState } from "react";
import { getAllArtworks } from "../../services/apiCalls";
import IndividualArtCard from "./IndividualArtCard";
import { Row } from "react-bootstrap";

export default function ArtworkPage() {
  const [artworks, setArtworks] = useState(null);
  const [componentKey, setComponentKey] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllArtworks();
        setArtworks(result.data);
        setComponentKey((prevKey) => prevKey + 1);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Gallery</h1>
      <div key={componentKey}>
        <Row>
          {artworks?.map((artwork) => (
            <IndividualArtCard key={artwork.id} artwork={artwork} />
          ))}
        </Row>
      </div>
    </>
  );
}
