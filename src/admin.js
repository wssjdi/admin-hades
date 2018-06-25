import React from 'react';
import {Row,Col} from 'antd';
import MenuLeft from './components/MenuLeft';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/home";
import './style/common.less'

export default class Admin extends React.Component{
  
  render(){
    return (
      <Row className="container">
          <Col span="4"  className="nav-left">
            <MenuLeft />
          </Col>
          <Col span="20"  className="main">
            <Header />     
            <Row  className="content">
              {this.props.children}
            </Row>
            <Footer />
          </Col>
      </Row>
    );
  }
}