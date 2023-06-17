import React, { useEffect, useState } from "react";
import { getAllArtworks } from "../../services/apiCalls";
import IndividualArtCard from "./IndividualArtCard";

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
    <div key={componentKey}>
      {artworks?.map((artwork) => (
        <div key={artwork.id}>
          <IndividualArtCard artwork={artwork} />
        </div>
      ))}
    </div>
  );
}
