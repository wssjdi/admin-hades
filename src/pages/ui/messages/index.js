import React from 'react';
import {Card,Button,message} from 'antd'
import './index.less'


export default class Messages extends React.Component {

  openMessage =(type)=>{
    message[type]("你的操作已经接收到！");
  }

  render(){

    return (      
      <div>
        <Card title="全局提示Message" className="card-message-wrap">
          <Button type="primary" onClick={()=> this.openMessage('success')}>Success提醒</Button>
          <Button type="primary" onClick={()=> this.openMessage('info')}>Info提醒</Button>
          <Button type="primary" onClick={()=> this.openMessage('warn')}>Wran提醒</Button>
          <Button type="primary" onClick={()=> this.openMessage('error')}>Error提醒</Button>
          <Button type="primary" onClick={()=> this.openMessage('loading')}>loading提醒</Button>
        </Card>
      </div>
    )
  }
}