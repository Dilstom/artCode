import { getHotCoffeeById, getIcedCoffeeById } from "../../services/apiCalls";
import { useEffect, useState } from "react";
import { Col, Image, Row, Container, Card, Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";

function CoffeePageById() {
  const [coffee, setCoffee] = useState();
  const [componentKey, setComponentKey] = useState(0);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = location.pathname.includes("/hot")
          ? await getHotCoffeeById(id)
          : await getIcedCoffeeById(id);
        setCoffee(result);
        console.log(result);
        setComponentKey((prevKey) => prevKey + 1);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [location.pathname]);

  return (
    <Container>
      <div key={componentKey}>
        {componentKey > 0 ? (
          <Row>
            <Col md={6}>
              <Image src={coffee.image} fluid />
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>{coffee.title}</Card.Title>
                  <Card.Text>{coffee.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="fst-italic text-muted mt-2">
                  {coffee.ingredients.map((ingredient) => {
                    return ingredient + " ";
                  })}
                </Card.Footer>
              </Card>
              <Button variant="outline-info" href="/" className="mt-5">
                Home
              </Button>
            </Col>
          </Row>
        ) : (
          <div className="spinner-border" role="status">
            {/* <span class="sr-only">Loading...</span> */}
          </div>
        )}
      </div>
    </Container>
  );
}

export default CoffeePageById;
