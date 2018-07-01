import React from 'react';
import {Card,Button,notification} from 'antd'
import './index.less'


export default class Notices extends React.Component {

  openNotification = (type,placement)=>{
    if (placement) {
      notification.config({
        placement:placement,
      })
    }
    notification[type]({
      message:'发工资了！',
      description:'上个月考勤22天,迟到18天,实发工资250元整,请注意查收！'
    });
  }

  render(){
    return (
      <div>
        <Card title="通知提醒" className="card-notices-wrap">
          <Button type="primary" onClick={()=> this.openNotification('success')}>Success提醒</Button>
          <Button type="primary" onClick={()=> this.openNotification('info')}>Info提醒</Button>
          <Button type="primary" onClick={()=> this.openNotification('warn')}>Wran提醒</Button>
          <Button type="primary" onClick={()=> this.openNotification('error')}>Error提醒</Button>
        </Card>
        
        <Card title="通知提醒的位置" className="card-notices-wrap">
          <Button type="primary" onClick={()=> this.openNotification('success','topLeft')}>topLeft提醒</Button>
          <Button type="primary" onClick={()=> this.openNotification('info','topRight')}>topRight提醒</Button>
          <Button type="primary" onClick={()=> this.openNotification('warn','bottomLeft')}>bottomLeft提醒</Button>
          <Button type="primary" onClick={()=> this.openNotification('error','bottomRight')}>bottomRight提醒</Button>
        </Card>
      </div>
    )
  }
}