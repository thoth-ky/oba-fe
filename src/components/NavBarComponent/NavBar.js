import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar({ isAuthenticated }) {
  const AuthNav = () => (
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/signin">SignIn</Nav.Link>
      <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
    </Nav>
  );

  const NormalNav = () => (
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/signout">SignOut</Nav.Link>
    </Nav>
  );
  return (
    <div style={{ justifyContent: 'space-evenly', width: '100%' }}>
      <Navbar
        className="bg-dark"
        expand="sm"
        fixed="sticky"
        variant="dark"
        style={{ display: 'grid', justifyContent: 'center', width: '100%' }}
      >
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ fontSize: 'larger' }}
        >
          <img
            alt=""
            src="public/image.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Offline Business Analyzer
        </Navbar.Brand>


        { isAuthenticated ? <NormalNav /> : <AuthNav />}
      </Navbar>
    </div>
  );
}

export { NavigationBar };
