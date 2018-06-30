import React from 'react';
import { Card , Button, Radio, Icon } from 'antd'
import './index.less'

export default class Buttons extends React.Component {

  state = {
    loading:true,
    size:'default',
  }

  handleCloseLoading = ()=>{
    this.setState({
      loading:false,
    });

  }

  handleChangeSize = (e)=>{
    
    this.setState({
      size:e.target.value,
    });

  }

  render(){

    return (
      <div>
        <Card title="基础按钮" className="card-button-wrap">
          <Button type="primary">确认</Button>
          <Button type="danger">编辑</Button>
          <Button type="dashed">查询</Button>
          <Button type="dashed">导出</Button>
          <Button type="disabled">禁用</Button>
          <Button>默认</Button>
        </Card>
        <Card title="图形按钮" className="card-button-wrap">
          <Button icon="plus" type="primary">创建</Button>
          <Button icon="edit" >编辑</Button>
          <Button icon="delete" type="danger">删除</Button>
          <Button icon="download" type="disabled">下载</Button>
          <Button shape="circle" icon="search" type="dashed"></Button>
          <Button icon="search" >查询</Button>
        </Card>
        <Card title="Loading按钮" className="card-button-wrap">
          <Button icon="plus" type="primary" loading={this.state.loading}>创建</Button>
          <Button icon="edit" loading={this.state.loading}>编辑</Button>
          <Button icon="delete" type="danger" loading={this.state.loading}>删除</Button>
          <Button icon="download" type="disabled" loading={this.state.loading}>下载</Button>
          <Button shape="circle" icon="search" type="dashed" loading={this.state.loading}></Button>
          <Button icon="search" loading={this.state.loading} >查询</Button>          
          <Button onClick={this.handleCloseLoading}>关闭Loading</Button>
        </Card>
        
        <Card title="大小按钮" className="card-button-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChangeSize}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>确认</Button>
          <Button type="danger" size={this.state.size}>编辑</Button>
          <Button type="dashed" size={this.state.size}>查询</Button>
          <Button type="dashed" size={this.state.size}>导出</Button>
          <Button type="disabled" size={this.state.size}>禁用</Button>
          <Button size={this.state.size}>默认</Button>
        </Card>
        
        <Card title="按钮组">
          <Button.Group>
            <Button type="primary">
              <Icon type="left"></Icon>
              首页
            </Button>
            <Button>1</Button>
            <Button>2</Button>
            <Button type="primary">尾页
              <Icon type="right"></Icon>
            </Button>
          </Button.Group>
        </Card>
      </div>
    );
  }
}