import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  return (
    <Navbar color="light" expand="md" light>
      <NavbarBrand tag={Link} to="/">
        React Tech Jam
      </NavbarBrand>
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/dashboard">
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/movies">
              All Movies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/add-movie">
              Add Movie
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
