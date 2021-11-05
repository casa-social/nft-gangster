import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {
  Navbar,
  Container,
  Button,
  Collapse,
  NavItem,
  Nav,
} from 'reactstrap';
import { toast } from 'react-toastify';
import { CHAIN_ID } from '../constants/constants';
import { getUserBusdBalance } from '../interface/web3Interface';

import { FaTwitter, FaTelegram, FaList } from "react-icons/fa";
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { HeaderStyle } from './style';
import LogoImage from '../assets/images/logo-white.png';
import VideoImage from "../assets/videos/video-bg.jpg";
import Video1 from "../assets/videos/video1.mp4";

const Header = () => {
  const dispatch = useDispatch();
  const {userAddress} = useSelector((state) => {
    return {
      userAddress: state.userAddress,

    }
  })
  
  const [isOpen, setIsOpen] = useState(false);
  const [showAddress, setShowAddress] = useState("Connect Wallet");
  const toggle = () => setIsOpen(!isOpen);

  const connectWallet = async () => { 
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
          },
          chainId: 1
        }
      }
    };
    const web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions // required
    });
    
    const provider = await web3Modal.connect();
    dispatch({ type: "set", provider: provider });
    const web3 = new Web3(provider);
    dispatch({ type: "set", web3: web3 });
    await web3Modal.toggleModal();
    
    const newWeb3 = new Web3(provider);
    const accounts = await newWeb3.eth.getAccounts();
    dispatch({ type: "set", userAddress: accounts[0] });
    setShowAddress(accounts[0].substr(0, 4) + "..." + accounts[0].substr(accounts[0].length - 3, accounts[0].length));
  }

  useEffect(() => {
    if (userAddress !== '') {
      setShowAddress(userAddress.substr(0, 4) + "..." + userAddress.substr(userAddress.length - 3))
    }
  }, [userAddress]);

  return (
    <HeaderStyle>
      <div className="main-header">
        <Container className="text-center">
          <Navbar light expand="md">
            <NavLink to="/" className="logo"><img src={LogoImage} /></NavLink> 
          </Navbar>
          <Navbar light expand="md">
            <FaList onClick={toggle} icon="faWallet" className="text-white toggler"/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar className="link">
                <NavItem>
                  <a className="nav-link" >NFT</a>
                </NavItem>
                <NavItem>
                  <a className="nav-link" >KILOCOIN</a>
                </NavItem>
                <NavItem>
                  <a className="nav-link">WHITEPAPER</a>
                </NavItem>
                <NavItem>
                  <a className="nav-link">DISCORD</a>
                </NavItem>
                <NavItem>
                  <a className="nav-link">TELEGRAM</a>
                </NavItem>
                <NavItem>
                  <Button onClick={connectWallet}>
                      {showAddress}
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
      <div className="video" style={{backgroundImage: `url(${VideoImage})`}}>
        <video src={Video1} autoPlay loop muted />
        <Container className="title">
          <div className="container is--hero">
            <div className="hero_wrap">
              <h1 className="text-white">Welcome to<br />KryptoGangsters</h1>
              <p className="text-white">10,000 unique NFT gangsters want you to join the family<br /></p>
            </div>
          </div>
        </Container>
      </div>
    </HeaderStyle>
  );
}

export default Header;