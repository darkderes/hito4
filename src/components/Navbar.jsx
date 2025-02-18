import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  FaPizzaSlice,
  FaSignInAlt,
  FaUserPlus,
  FaUser,
  FaSignOutAlt,
  FaShoppingCart,
} from "react-icons/fa";

const NavbarApp = () => {
  const total = 25000;
  const token = true;
  return (
    <Navbar
      className="bg-body-tertiary text-white "
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">Pizzeria Mamma Mia!</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" className="nav-link-border">
            <FaPizzaSlice /> Home
          </Nav.Link>
          {!token ? (
            <>
              <Nav.Link href="#login" className="nav-link-border">
                <FaSignInAlt /> Login
              </Nav.Link>
              <Nav.Link href="#register" className="nav-link-border">
                <FaUserPlus /> Register
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="#profile" className="nav-link-border">
                <FaUser /> Profile
              </Nav.Link>
              <Nav.Link href="#logout" className="nav-link-border">
                <FaSignOutAlt /> Logout
              </Nav.Link>
            </>
          )}
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <Nav.Link
            href="#cart"
            className="nav-link-border-cart nav-link-custom"
          >
            <FaShoppingCart /> $ {total.toLocaleString()}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
