import React from 'react';
import {Card,Table, Modal, Button,message} from 'antd';
import Axios from "../../axios";
import './index.less';
import Utils from '../../utils/utils';



export default class DynamicTable extends React.Component {

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

  render(){

    const columns = [{
      title:'ID',
      dataIndex:'id'
    },{
      title:'用户名',
      dataIndex:'userName'
    },{
      title:'性别',
      dataIndex:'sex',
      render(sex){
        return sex === 1 ? '男' : '女';
      }
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
      }
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
      }
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
        <Card title="动态表格-绑定单选框">
          <Table columns={columns} 
                  bordered={true} 
                  dataSource={this.state.dataSource}
                  rowSelection={rowSelection}
                  onRow={(record,index)=>{
                    return {
                      onClick:()=>{
                        this.onRowClick(record,index);
                      }
                    };
                  }}/>
        </Card>
        <Card title="动态表格-绑定复选框">
          <div style={{marginBottom:10}}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table columns={columns} 
                  bordered={true} 
                  dataSource={this.state.dataSource}
                  rowSelection={rowCheckSelection}
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
        
        <Card title="动态表格-分页">
          <Table columns={columns} 
                  bordered={true} 
                  dataSource={this.state.dataSource}
                  pagination={
                    this.state.pagination
                  }/>
        </Card>
      </div>
    )
  }

}