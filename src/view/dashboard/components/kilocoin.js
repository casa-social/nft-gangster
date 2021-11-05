import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { KilocoinStyle } from '../../../style';

import BlackBrike from '../../../assets/images/black-brike.jpg';
import SMG from '../../../assets/images/SMG.png';
import KGCoin from '../../../assets/images/KG-coin.png';

const Kilocoin = () => {
  return (
    <>
      <KilocoinStyle>
        <section style={{ backgroundImage: `linear-gradient(180deg, rgba(9, 18, 44, 0.89), rgba(9, 18, 44, 0.89)), url(${BlackBrike})` }}>
          <h1 className="title text-white">
            <img src={SMG} />
            KILO COIN
          </h1>
          <Row>
            <Col md={5}>
              <img src={KGCoin} />
            </Col>
            <Col md={7}>
              <h3 className="text-white">
              As we see Kryptogangsters as the start of something much bigger than a regular NFT drop it speaks for itself that we combine it with a crypto currency. In this case we have chosen to launch the KryptoGangsters ecosystem with our Binance smartchain built Kilo token.
              </h3><br/><br/>
              <h3 className="text-white"><span className="text-red">Name: </span>Kilo</h3>
              <h3 className="text-white"><span className="text-red">Symbol: </span>KG</h3>
              <h3 className="text-white"><span className="text-red">Decimals: </span>3</h3>
              <h3 className="text-white"><span className="text-red">Address: </span>0xA4FA1185C12ef7AF0221D91494d36abBaeFb3262</h3><br/><br/>
              <h3 className="text-white">Smart chain BEP20 Token</h3>
              <h3 className="text-white">Total Supply <span className="text-red">250,000,000 pre-minted</span></h3>
              <div className="text-center">
                <Button className="default-btn">
                  JOIN THE PRIVATE SALE
                </Button>
              </div>
            </Col>
          </Row>
        </section>
      </KilocoinStyle>
    </>
  );
}

export default Kilocoin;