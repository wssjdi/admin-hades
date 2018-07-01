import React from 'react';
import {Card,Row,Col, Modal} from 'antd'
import './index.less'



export default class Gallery extends React.Component {

  state = {
    visible:false,
  }

  handleImgOnClick = (imgItem)=>{
    this.setState({
      visible:true,
      currentImg:`/gallery/${imgItem}`,
    });
  }

  render (){

    const imgs = [
      ['1.png','2.png','3.png','4.png','5.png'],
      ['6.png','7.png','8.png','9.png','10.png'],
      ['11.png','12.png','13.png','14.png','15.png'],
      ['16.png','17.png','18.png','19.png','20.png'],
      ['21.png','22.png','23.png','24.png','25.png']
    ]

    const imgList = imgs.map((list)=> 
      list.map(
        (item) => 
        <Card style={{marginBottom:15}}
          cover={<img src={'/gallery/'+item} alt='' onClick={()=> this.handleImgOnClick(item)}/>}>
          <Card.Meta 
            title="Antd Card Meta"
            description="Gallery Based On Antd Card Meta">
          </Card.Meta>
        </Card>
      ));


    return (
      <div className="card-gallery-wrap">
        <Row gutter={20}>
          <Col md={4}>
            {imgList[0]}
          </Col>
          <Col md={4}>
            {imgList[1]}
          </Col>
          <Col md={4}>
            {imgList[2]}
          </Col>
          <Col md={4}>
            {imgList[3]}
          </Col>
          <Col md={4}>
            {imgList[4]}
          </Col>
        </Row>
        <Modal title="我的图片"
          visible={this.state.visible} width={600} height={'auto'}
          onCancel={() => 
            this.setState({
              visible:false,
            })
          }
          footer={null}
          >
          <img src={this.state.currentImg} alt="" style={{width:'100%'}}/>
        </Modal>
      </div>
    );
  }
}