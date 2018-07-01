import React from 'react';
import {Card,Table, Modal, Button,message, Badge} from 'antd';
import Axios from "../../axios";
import './index.less';
import Utils from '../../utils/utils';


export default class HighTable extends React.Component {

  state ={dataSource:[]};

  params = {page:1};

  componentWillMount(){
    this.request();
  }

  request = ()=>{
    let _this = this;
    Axios.ajax({
      url:'/table/list',
      method:'get',
      isShowLoading:true,
      data:{
        params:{
          page:this.params.page,
        }
      }}).then((res)=>{
        if(res.code === 0){
          //给每一行数据添加Key          
          res.result.list.map((item,index)=>{
            item.key=index;
          })
          this.setState({
            dataSource:res.result.list,
            pagination:Utils.pagination(res,(current)=>{
              //翻页
              _this.params.page = current;
              this.request();
            }),
            selectedRowKeys:[],
            selectedRows:null
          });
        }
      });
  }

  onRowClick = (record,index)=>{
    let selectKey = [index];
    Modal.info({
      title:'当前选中',
      content:`用户名：${record.userName};当前状态：${record.state}`
    });
    this.setState({
      selectedRowKeys:selectKey,
      selectedItem:record,
    });
  }
  
  handleDelete = ()=>{
    let {selectedRows} = {...this.state};
    let ids = [];
    selectedRows.map((item)=>{
      ids.push(item.id);
    });
    Modal.confirm({
      title:'提示信息',
      content:`确定要删除这些数据吗?${ids.join(',')}`,
      onOk:()=>{
        this.request();
        message.success('删除成功!');
      }
    });

  }

  handleSortChange=(pagination,filters,sorter)=>{
    this.setState({
      sortOrder:sorter.order,
    });
  }

  handleClickDelete=(item)=>{
    let id = item.id;
    Modal.confirm({
      title:'确认消息',
      content:`确认要删除信息${id}吗?`,
    });
  }

  
  render(){

    const columns = [{
      title:'ID',
      dataIndex:'id',
      width:80,
      sorter:(a,b)=>{
        return a.id - b.id;
      },
      sortOrder:this.state.sortOrder,
    },{
      title:'用户名',
      dataIndex:'userName',
      width:80,
    },{
      title:'用户名',
      dataIndex:'userName',
      width:80,
    },{
      title:'性别',
      dataIndex:'sex',
      render(sex){
        return sex === 1 ? '男' : '女';
      },
      width:80,
    },{
      title:'状态',
      dataIndex:'state',
      render(state){
        let config = {
          "0":<Badge status="success" text="咸鱼一条" />,
          "1":<Badge status="error" text="风华浪子" />,
          "2":<Badge status="default" text="北大才子" />,
          "3":<Badge status="warn" text="百度FE" />,
          "4":<Badge status="processing" text="阿里程序员" />,
          "5":<Badge count={66} text="创业者" />,
          "6":<Badge count={98}  text="淘宝卖家" />,
          "7":<Badge count={88}  text="滴滴司机" />,
          "8":<Badge count={99}  text="壕" />
        }
        return config[state];
      },
      width:80,
    },{
      title:'爱好',
      dataIndex:'interest',
      render(interest){
        let config = {          
          "0":"跑步",
          "1":"打篮球",
          "2":"游泳",
          "3":"健身",
          "4":"读书",
          "5":"爬山",
          "6":"踢足球",
          "7":"桌球",
          "8":"麦霸",
          "9":"吃鸡"
        }
        return config[interest];
      },
      width:80,
    },{
      title:'生日',
      dataIndex:'birthday',
      width:80,
    },{
      title:'地址',
      dataIndex:'address',
      width:120,
    },{
      title:'闹钟',
      dataIndex:'time',
      width:80,
    },{
      title:'操作',
      width:80,
      render:(text,item)=>{
        debugger;
        return <Button size="small" onClick={(item)=>{this.handleClickDelete(item)}}>删除</Button>
      }
    }]



    
    const columns2 = [{
      title:'ID',
      dataIndex:'id',
      width:80,
      fixed:'left',
    },{
      title:'用户名',
      dataIndex:'userName',
      width:80,
      fixed:'left',
    },{
      title:'性别',
      dataIndex:'sex',
      render(sex){
        return sex === 1 ? '男' : '女';
      },
      width:120,
    },{
      title:'状态',
      dataIndex:'state',
      render(state){
        let config = {
          "0":"咸鱼一条",
          "1":"风华浪子",
          "2":"北大才子",
          "3":"百度FE",
          "4":"阿里程序员",
          "5":"创业者",
          "6":"淘宝卖家",
          "7":"滴滴司机",
          "8":"壕"
        }
        return config[state];
      },
      width:120,
    },{
      title:'爱好',
      dataIndex:'interest',
      render(interest){
        let config = {          
          "0":"跑步",
          "1":"打篮球",
          "2":"游泳",
          "3":"健身",
          "4":"读书",
          "5":"爬山",
          "6":"踢足球",
          "7":"桌球",
          "8":"麦霸",
          "9":"吃鸡"
        }
        return config[interest];
      },
      width:120,
    },{
      title:'生日',
      dataIndex:'birthday',
      width:120,
    },{
      title:'地址',
      dataIndex:'address',
      width:120,
    },{
      title:'生日',
      dataIndex:'birthday',
      width:120,
    },{
      title:'地址',
      dataIndex:'address',
      width:120,
    },{
      title:'生日',
      dataIndex:'birthday',
      width:120,
    },{
      title:'地址',
      dataIndex:'address',
      width:120,
    },{
      title:'生日',
      dataIndex:'birthday',
      width:120,
    },{
      title:'地址',
      dataIndex:'address',
      width:120,
    },{
      title:'生日',
      dataIndex:'birthday',
      width:120,
    },{
      title:'地址',
      dataIndex:'address',
      width:120,
    },{
      title:'闹钟',
      dataIndex:'time',
      width:120,
      fixed:'right',
    }]

    const {selectedRowKeys} ={ ...this.state};
    //制定单选或者多选,以及当前选中的项
    const rowSelection = {
      type:'radio',
      selectedRowKeys
    }

    const rowCheckSelection = {
      type:'checkbox',
      selectedRowKeys,
      onChange:(selectedRowKeys,selectedRows)=>{
        //将ID保存起来方便调用接口做一些操作
        let ids = [];
        selectedRows.map((item)=>{
          ids.push(item.id);
        });
        
        this.setState({
          selectedRowKeys,
          selectedRows,
        });
      }

    }

    return (
      <div>
        <Card title="动态表格-表头固定">
          <Table columns={columns} 
                  bordered={true} 
                  dataSource={this.state.dataSource}
                  rowSelection={rowSelection}
                  pagination={false}
                  scroll={{y:240}}
                  onRow={(record,index)=>{
                    return {
                      onClick:()=>{
                        this.onRowClick(record,index);
                      }
                    };
                  }}/>
        </Card>
        <Card title="动态表格-左右固定">
          <div style={{marginBottom:10}}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table columns={columns2} 
                  bordered={true} 
                  dataSource={this.state.dataSource}
                  rowSelection={rowCheckSelection}                  
                  scroll={{x:1725}}
                  onRow={(record,index)=>{
                    // 实现点击行内容选中,再次点击取消选中的功能;
                    return {
                      onClick:()=>{
                        let {selectedRowKeys,selectedRows} = {...this.state};
                        if(!selectedRows){
                          selectedRows = [];
                        }
                        if(selectedRowKeys.includes(record.key)){
                          selectedRowKeys.splice(selectedRowKeys.findIndex(item => item === record.key), 1);
                          selectedRows.splice(selectedRows.findIndex(item => item.key === record.key), 1);
                        }else{
                          selectedRowKeys.push(record.key);
                          selectedRows.push(record);
                        }
                        this.setState({selectedRowKeys,selectedRows});
                      }
                    };
                  }}/>
        </Card>
        
        <Card title="动态表格-排序">
          <Table columns={columns} 
                  bordered={true} 
                  dataSource={this.state.dataSource}
                  onChange={
                      this.handleSortChange
                  }
                  pagination={
                    this.state.pagination
                  }/>
        </Card>
      </div>
    )
  }

}