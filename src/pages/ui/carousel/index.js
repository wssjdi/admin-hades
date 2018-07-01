import React from 'react';
import {Card,Carousel} from 'antd'
import './index.less'



export default class ICarousel extends React.Component {


  render(){
    return (
      <div className="card-carousel-wrap">
      <Card title="文字背景轮播">
        <Carousel effect="fade" autoplay={true}>
          <div><h3>Antd Carousel 1</h3></div>
          <div><h3>Antd Carousel 2</h3></div>
          <div><h3>Antd Carousel 3</h3></div>
          <div><h3>Antd Carousel 4</h3></div>
        </Carousel>
      </Card>
      <Card title="图片轮播" className="card-img-carousel">
        <Carousel effect="fade" autoplay={true}>
          <div>
            <img src="/carousel/carousel-1.jpg" alt=''/>
          </div>
          <div>
            <img src="/carousel/carousel-2.jpg" alt=''/>
          </div>
          <div>
            <img src="/carousel/carousel-3.jpg" alt=''/>
          </div>
        </Carousel>
      </Card>
      </div>
    );
  }
  
}
