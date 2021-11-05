import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';


import Purchase from './components/purchase';
import Gangsters from './components/gangsters';
import Kilocoin from './components/kilocoin';


const Dashboard = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='main-content' >
      <Purchase />
      <Gangsters />
      <Kilocoin/>
    </div>
  );
}

export default Dashboard;