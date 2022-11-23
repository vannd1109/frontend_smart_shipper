import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsSearch } from "react-icons/bs";
import "./styles.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="d-flex p-3" fixed="top">
      <Container className="d-flex gap-4">
        <NavLink to="/" className="text-decoration-none text-black">
          GHTM
        </NavLink>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Bạn cần tìm gì..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">
            <BsSearch />
          </Button>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 gap-4" navbarScroll defaultActiveKey="/">
            <NavLink to="/" className="text-decoration-none text-black">
              Trang chủ
            </NavLink>
            <NavLink to="/cua-hang" className="text-decoration-none text-black">
              Cửa hàng
            </NavLink>
            <NavLink to="/do-an" className="text-decoration-none text-black">
              Đồ ăn
            </NavLink>
            <NavLink
              to="/dang-nhap"
              className="text-decoration-none text-black"
            >
              Đăng nhập
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
