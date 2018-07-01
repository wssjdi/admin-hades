import React from 'react';
import {Card,Button,Modal} from 'antd'
import './index.less'

export default class Modals extends React.Component {

  state = {
    showModal1:false,
    showModal2:false,
    showModal3:false,
    showModal4:false,
  }

  handleOpenModal = (type)=>{
    this.setState({
      [type]:true,
    });
  }

  handleOpenConfirm = (type)=>{
    Modal[type]({
      title:'好了?',
      content:'是不是就这样就好了?',
      onOk(){
        console.log("Ok");
      },
      onCancel(){
        console.log('Cancle');
      }
    })
  }


  render(){

    return (
      <div>        
        <Card title="基础模态框" className="card-modal-wrap">
          <Button type="primary" onClick={()=>this.handleOpenModal('showModal1')}>默认模态框</Button>
          <Button type="primary" onClick={()=>this.handleOpenModal('showModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={()=>this.handleOpenModal('showModal3')}>修改模态框样式</Button>
          <Button type="primary" onClick={()=>this.handleOpenModal('showModal4')}>水平垂直居中</Button>
        </Card>
        <Card title="信息确认框" className="card-modal-wrap">
          <Button type="primary" onClick={()=>this.handleOpenConfirm('confirm')}>Confirm</Button>
          <Button type="primary" onClick={()=>this.handleOpenConfirm('info')}>Info</Button>
          <Button type="primary" onClick={()=>this.handleOpenConfirm('success')}>Success</Button>
          <Button type="primary" onClick={()=>this.handleOpenConfirm('warning')}>Warning</Button>
          <Button type="primary" onClick={()=>this.handleOpenConfirm('error')}>Error</Button>
        </Card>
        <Modal title="Antd Modal"
               visible={this.state.showModal1}
               onCancel={()=>{
                 this.setState({
                   showModal1:false,
                 });
               }}
          >最基础的Modal</Modal>
          <Modal title="Antd Modal" okText="OK" cancelText="NO"
                 visible={this.state.showModal2}
                 onCancel={()=>{
                   this.setState({
                     showModal2:false,
                   });
                 }}
            >自定义页脚的Modal</Modal>
            <Modal title="Antd Modal" okText="好的" cancelText="不要"
                   visible={this.state.showModal3}
                   style={{top:20}}
                   onCancel={()=>{
                     this.setState({
                       showModal3:false,
                     });
                   }}
              >修改模态框样式</Modal>
              <Modal title="Antd Modal" okText="好的" cancelText="不要"
                     visible={this.state.showModal4}
                     wrapClassName="vertical-center-modal"
                     onCancel={()=>{
                       this.setState({
                         showModal4:false,
                       });
                     }}
                >水平垂直居中</Modal>
      </div>
    );
  }
}