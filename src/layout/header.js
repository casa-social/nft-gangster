import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Web3 from 'web3';
import {
  Navbar,
  NavbarBrand,
  Spinner,
  Container,
  Button,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  Row
} from 'reactstrap';
import { toast } from 'react-toastify';
import { CHAIN_ID } from '../constants/constants';
import { getUserBusdBalance } from '../interface/web3Interface';

import { FaTwitter, FaTelegram } from "react-icons/fa";
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { HeaderStyle } from './style';
import LogoImage from '../assets/images/logo-white.png';
import VideoImage from "../assets/videos/video-bg.jpg";
import Video1 from "../assets/videos/video1.mp4";
import Video2 from "../assets/videos/video2.webm";

const {ethereum} = window;
const web3 = new Web3(ethereum);

const Header = () => {
  const dispatch = useDispatch();
  const {userAddress} = useSelector((state) => {
    return {
      userAddress: state.userAddress
    }
  })
  const [isOpen, setIsOpen] = useState(false);
  const [showAddress, setShowAddress] = useState("connect");
  const [processingConnect, setProcessingConnect] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  const connectWallet = async () => { 
    setProcessingConnect(true)
    
    ethereum.request({method: 'eth_requestAccounts'})
    .then(async result => {
      const defaultAccounts = await web3.eth.getAccounts();
      const userBusdBalance = await getUserBusdBalance(defaultAccounts[0]);
      dispatch({ type: "set", userAddress: defaultAccounts[0] });
      dispatch({ type: "set", userBusdBalance: userBusdBalance });
      setProcessingConnect(false)
    })
    .catch((err) => {
      setProcessingConnect(false);
      return;
    });
  }

  useEffect(async () => {
    const chainId = await web3.eth.getChainId();
    if (chainId !== CHAIN_ID) {
      toast.warning("please check the network!. this is working on only BSC network.");
    }
    const defaultAccounts = await web3.eth.getAccounts();
    if (defaultAccounts.length > 0) {
      const userBusdBalance = await getUserBusdBalance(defaultAccounts[0]);
      dispatch({ type: "set", userBusdBalance: userBusdBalance });
      dispatch({ type: "set", userAddress:defaultAccounts[0] });
    }
  }, []);

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
            <NavbarToggler onClick={toggle} className="text-white"/>
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
                  <Button className="nav-link" onClick={connectWallet}>Connect Wallet</Button>
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