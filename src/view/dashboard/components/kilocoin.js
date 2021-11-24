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
        <section style={{ backgroundImage: `linear-gradient(180deg, rgba(9, 18, 44, 0.89), rgba(9, 18, 44, 0.89)), url(${BlackBrike})` }} id="kilocoin">
          <h1 className="title text-white">
            <img src={SMG} />
            KILO COIN
          </h1>
          <Row>
            <Col md={5} className="text-center">
              <img src={KGCoin} />
            </Col>
            <Col md={7}>
              <h3 className="text-white">
              As we see Kryptogangsters as the start of something much bigger than a regular NFT mint it speaks for itself that we combine it with a crypto currency. In this case we have chosen to launch the KryptoGangsters ecosystem with our ERC20 built Kilo token. Every holder of our NFTs will receive a 5k $Kilo airdrop.
              </h3><br/><br/>
              <h3 className="text-white">
              $Kilo will be used for voting, payouts & ecosystem in general.
              </h3><br/><br/>
              <h3 className="text-white"><span className="text-red">Name: </span>Kilo</h3>
              <h3 className="text-white"><span className="text-red">Symbol: </span>KG</h3>
              <h3 className="text-white"><span className="text-red">Decimals: </span>3</h3>
              <h3 className="text-white"><span className="text-red">Address: </span></h3><br/><br/>
              <h3 className="text-white"><span className="text-red">Tax: </span>10% total</h3>
              <h3 className="text-white">4% Holder Reward</h3>
              <h3 className="text-white">2% Burn</h3>
              <h3 className="text-white">2% Charity</h3>
              <h3 className="text-white">2% Marketing</h3>
              <h3 className="text-white">Total Supply <span className="text-red">250,000,000 pre-minted</span></h3>
              <div className="text-center">
                <a className="default-btn" href="https://t.me/KryptoGangsters" target="_blink">
                  JOIN THE PRIVATE SALE
                </a>
              </div>
            </Col>
          </Row>
        </section>
      </KilocoinStyle>
    </>
  );
}

export default Kilocoin;