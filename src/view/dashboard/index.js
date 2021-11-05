import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';


import Purchase from './components/purchase';


const Dashboard = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='main-content' >
      <Purchase />
    </div>
  );
}

export default Dashboard;