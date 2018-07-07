import React from 'react';
import {Row} from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/common.less'

export default class Common extends React.Component{
  
  render(){
    return (
      <div className="common-page">
        <Row className="simple-page">
          <Header menuType="second"/>
        </Row>
        <Row className="content">
          {this.props.children}
        </Row>
        <Row>
          <Footer />
        </Row>
      </div>
    );
  }
}