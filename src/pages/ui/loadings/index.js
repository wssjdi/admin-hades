import React from 'react';
import {Card,Spin,Icon, Alert} from 'antd'
import './index.less'


export default class Loadings extends React.Component {
  
  render(){

    const icon = <Icon type="loading" style={{fontSize:24}}/>

    return (
      <div>        
        <Card title="Spin的用法" className="card-loadings-wrap">
          <Spin size = "small"/>
          <Spin />
          <Spin size = "large"/>
          <Spin indicator={icon} />
        </Card>
        <Card title="内容遮盖" className="card-loadings-wrap">
          <Alert 
            message="Antd Alert"
            description="这是一个Alert内容！"
            type="warning"
            />
          <Spin>            
            <Alert 
              message="Antd Alert"
              description="这是一个Loading Alert内容！"
              type="warning"
              />
          </Spin>
          <Spin tip="努力加载中...">            
            <Alert 
              message="Antd Alert"
              description="这是一个Loading Alert内容！"
              type="warning"
              />
          </Spin>
          <Spin tip="努力加载中..." indicator={icon}>            
            <Alert 
              message="Antd Alert"
              description="这是一个Loading Alert内容！"
              type="warning"
              />
          </Spin>
        </Card>
      </div>
    )
  }


}
