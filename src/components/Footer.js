import { Container, Row, Col } from "react-bootstrap";

import bsw3 from '../assets/img/buildspace_w3 copy.png';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={bsw3} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
