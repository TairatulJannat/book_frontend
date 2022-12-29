import React, { Component, Fragment } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {  NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from './login'



export default class Header extends Component{
    render(){
        return(
          <Fragment>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Book Managemant</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/">Book List</NavLink>
          </Nav>
           
        </Container>
            
      </Navbar>
      
            <Routes>
              <Route exact path="/login" element={<Login />} />
              {/* <Route path="/login" exact component={Login} /> */}
            </Routes>
          </Fragment> 
         
       

        )
    }
}