import React from "react";
import Utama from "./Components/utama";
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'; 

class App extends React.Component{
  render(){
    return(
        <div>
          <Navbar bg="light" variant={"light"} expand="xxl">
          <Navbar.Brand className="mx-3">
            <img
              alt=""
              src="/logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
            />
            Pembayaran SPP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <Nav.Link as={Link} to={"/"}>Dashboard</Nav.Link>
          <Nav.Link as={Link} to={"/datakelas"}>Data Kelas</Nav.Link>
          <Nav.Link as={Link} to={"/datasiswa"}>Data Siswa</Nav.Link>
          <Nav.Link as={Link} to={"/dataspp"}>Data SPP</Nav.Link>
          <Nav.Link as={Link} to={"/datapetugas"}>Data Petugas</Nav.Link> 
          <Nav.Link as={Link} to={"/datapembayaran"}>Data Pembayaran</Nav.Link> 

          </Nav>
          </Navbar.Collapse>
          </Navbar> 
          <br/> 
          <p align="center"><Utama/></p>
        </div>
    );
  }
}

export default App; 