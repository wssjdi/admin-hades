import React from 'react';
import { Row, Col } from 'antd';
import Util from "../../utils/utils";
import axios from "../../axios";
import './index.less';


export default class Header extends React.Component{


  componentWillMount(){
    this.setState({
      userName:'wssjdi@163.com'
    });

    setInterval(()=>{
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      });
    },1000);

    this.getWeatherAPIData();
  }

  // componentWillUnmount(){
  //   this.remove(setInterval);
  // }

  getWeatherAPIData(){
    let city = "苏州";
    axios.jsonp({
      url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city) +'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res)=>{
      if(res.status === 'success'){
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl:data.dayPictureUrl,
          weather:data.weather
        });

      }
    });
  }


  render(){
  
    const menutype = this.props.menuType;

    return (
      <div className="header">
        <Row className="header-top">
          {
            menutype ? 
            <Col span="6">
              <div className="logo">
                <img src="/assets/logo.svg" alt="admin-hades"/>
                <h1>Admin Hades</h1>
              </div>
            </Col> : ''
          }
          <Col span={menutype ? 18 : 24}>
            <span>欢迎您,{this.state.userName}</span>
            <a href="#">登出</a>
          </Col>
        </Row>
        { menutype ? '' :
          <Row className="breadcrumb">
            <Col span="4" className="breadcrumb-title">
              首页
            </Col>
            <Col span="20" className="weather-date">
              <span className="date-detail">{this.state.sysTime}</span>
              <span className="weather-img">
                <img src={this.state.dayPictureUrl} alt="时刻关注天气变化"/>
              </span>
              <span className="weather-detail">
                {this.state.weather}
              </span>
            </Col>

          </Row>
        }
      </div>
    );
  }
}