import Nav from "react-bootstrap/Nav";

function NavbarComponent() {
  return (
    <Nav
      fill
      variant="tabs"
      defaultActiveKey="/home"
      bg="dark"
      data-bs-theme="dark"
      id="navbarComponent"
      className="mb-5"
    >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="/hot">
          Hot
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href="/iced">
          Iced
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavbarComponent;
