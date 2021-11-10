import React from "react";
import { Container, Navbar } from "react-bootstrap";

interface NavMainProps {
  title: string;
}

export const NavMain: React.FC<NavMainProps> = ({ title }) => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container data-testid={"navmain-container"}>
        <Navbar.Brand data-testid={"navmain-title"} href="#home">
          {title}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
