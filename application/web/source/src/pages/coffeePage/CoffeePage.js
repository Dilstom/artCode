import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getHotCoffee, getIcedCoffee } from "../../services/apiCalls";
import IndividualArtCard from "./IndividualCoffeeCard";
import { Row } from "react-bootstrap";

export default function CoffeePage() {
  const [coffee, setCoffee] = useState(null);
  const [componentKey, setComponentKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result =
          location.pathname === "/hot"
            ? await getHotCoffee()
            : await getIcedCoffee();
        setCoffee(result);
        setComponentKey((prevKey) => prevKey + 1);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [location.pathname]);

  const getCoffeeTitle = () => (location.pathname === "/hot" ? "Hot" : "Iced");

  return (
    <>
      <h1> {getCoffeeTitle()} Coffee Gallery</h1>
      <div key={componentKey}>
        {componentKey > 0 ? (
          <Row>
            {coffee?.map((cup) => (
              <IndividualArtCard key={cup.id} cup={cup} />
            ))}
          </Row>
        ) : (
          <div className="spinner-border" role="status">
            {/* <span class="sr-only">Loading...</span> */}
          </div>
        )}
      </div>
    </>
  );
}
