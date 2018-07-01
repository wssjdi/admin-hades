import React from 'react';
import {Card,Table} from 'antd';
import './index.less';



export default class BasicTable extends React.Component {

  state ={}

  componentWillMount(){
    const dataSource = [{
      id:'1',
      userName:'wssjdi',
      sex:'1',
      state:'6',
      interest:['2','5','7'],
      birthday:'1990-12-31',
      address:'苏州市星海街378号',
      time:'06:30:00'
    },{
      id:'2',
      userName:'wssjdj',
      sex:'1',
      state:'6',
      interest:['2','5','7'],
      birthday:'1990-12-31',
      address:'苏州市星海街379号',
      time:'07:30:00'
    },{
      id:'3',
      userName:'wssjdk',
      sex:'1',
      state:'6',
      interest:['2','5','7'],
      birthday:'1990-12-31',
      address:'苏州市星海街380号',
      time:'08:30:00'
    },{
      id:'4',
      userName:'wssjdl',
      sex:'1',
      state:'6',
      interest:['2','5','7'],
      birthday:'1990-12-31',
      address:'苏州市星海街381号',
      time:'09:30:00'
    }]

    dataSource.map((item,index)=>{
      item.key=index;
    })

    this.setState({
      dataSource
    })

  }

  render(){

    const columns = [{
      title:'ID',
      dataIndex:'id'
    },{
      title:'用户名',
      dataIndex:'userName'
    },{
      title:'性别',
      dataIndex:'sex'
    },{
      title:'状态',
      dataIndex:'state'
    },{
      title:'爱好',
      dataIndex:'interest'
    },{
      title:'生日',
      dataIndex:'birthday'
    },{
      title:'地址',
      dataIndex:'address'
    },{
      title:'闹钟',
      dataIndex:'time'
    }]

    return (
      <div>
        <Card title="基础静态表格">
          <Table columns={columns} bordered={true} dataSource={this.state.dataSource} pagination={false}/>
        </Card>
      </div>
    )
  }

}