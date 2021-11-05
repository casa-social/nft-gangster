import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import { FooterStyle } from './style';
import Banner2 from '../assets/images/banner2.png'
import LogoImage from '../assets/images/logo-white.png';

const Footer = () => {
  return (
    <FooterStyle>
      <footer style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 42, 42, 0.79), rgba(255, 42, 42, 0.79)), url(${Banner2})` }}> 
        <Container>
          <Row>
            <Col md={4} className="text-center">
              <img src={LogoImage} />
            </Col>
            <Col md={4} className="text-white">
              <h4>Quick links</h4>
              <ul>
                <li>
                  <a>Discord</a>
                </li>
                <li>
                  <a>Instagram</a>
                </li>
                <li>
                  <a>telegram</a>
                </li>
                <li>
                  <a>Twitter</a>
                </li>
                <li>
                  <a>Opensea</a>
                </li>
              </ul>
            </Col>
            <Col md={4} className="text-white">
              <h4>Jump to</h4>
              <ul>
                <li>
                  <a>NFT</a>
                </li>
                <li>
                  <a>Kilo Coin</a>
                </li>
                <li>
                  <a>Roadmap</a>
                </li>
              </ul>
            </Col>
          </Row>
          <p className="text-center text-white">Copyright © 2021 Krypto Gangsters. All rights reserved.</p>
        </Container>
      </footer>
    </FooterStyle>
  );
}

export default Footer;