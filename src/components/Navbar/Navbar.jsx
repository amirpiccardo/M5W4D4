import "./style.css"
import {menuLinks} from "../../data/NavLinks"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext, useState } from "react";
import { ThemeContext } from "../../Context/themeContext";
import { FaRegMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { Row, Form } from "react-bootstrap";
import { books } from "../AllTheBooks/AllTheBooks";

const CustomNavbar = ({searchTerm, setSearchTerm}) => {

  const {theme, toggleTheme} = useContext(ThemeContext);

      
      const handleInputChange = (event) => {
        setSearchTerm(event.target.value); 
      };
  return (
<Navbar expand="lg">
<Container>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto w-100">
      <div className="d-flex w-100 align-items-center">
      {menuLinks.map((link, i) => (
            <Nav.Link href={link.href} key={i}>
              {link.text}
            </Nav.Link>

          ))
          }
          <Row className="ms-auto me-4">
        <Form.Control
                type="text"
                placeholder="Cerca per titolo..."
                className=" mr-sm-2"
                value={searchTerm} 
                onChange={handleInputChange}

              />
      </Row>
          <div className="theme" onClick={() => toggleTheme()} >
            {
              theme === 'ligth' ? <FaRegMoon style={{fontSize:"1.5rem"}} /> : <FaRegSun style={{fontSize:"1.5rem"}}/>
            }
          </div>
      </div>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}
export default CustomNavbar