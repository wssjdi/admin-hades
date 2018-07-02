import React from 'react';
import {Card,Form,Button,Select, Table, Modal,message} from 'antd';
import './index.less';
import ButtonGroup from 'antd/lib/button/button-group';
import Axios from '../../axios';
import Utils from '../../utils/utils';
import utils from '../../utils/utils';

const FormItem = Form.Item;
const Option = Select.Option;

class FilterForm extends React.Component {
  render(){

    const {getFieldDecorator} = this.props.form;

    return (
      <Form layout="inline">
        <FormItem label="城市">
          {
            getFieldDecorator('city_id')(
              <Select placeholder="全部" style={{width:80}}>
                <Option value="">全部</Option>
                <Option value="1">北京</Option>
                <Option value="2">天津</Option>
                <Option value="3">深圳</Option>
                <Option value="4">上海</Option>
                <Option value="5">广州</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="用车模式">
          {
            getFieldDecorator('mode')(
              <Select placeholder="全部"  style={{width:120}}>
                <Option value="">全部</Option>
                <Option value="1">指定地点</Option>
                <Option value="2">限制区域</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="营运模式">
          {
            getFieldDecorator('op_mode')(
              <Select placeholder="全部"  style={{width:80}}>
                <Option value="">全部</Option>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="授权状态">
          {
            getFieldDecorator('auth_status')(
              <Select placeholder="全部"  style={{width:120}}>
                <Option value="">全部</Option>
                <Option value="1">已授权</Option>
                <Option value="2">未授权</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem>
            <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
            <Button>重置</Button>
            <Button>导出</Button>
        </FormItem>
      </Form>
    )
  }
}
;
//生成表单
FilterForm = Form.create()(FilterForm);

class OpenCityForm extends React.Component {
  render(){

    const {getFieldDecorator} = this.props.form;
    
    //声明响应式布局
    const formItemLayout = {
      labelCol:{
        xs:24,
        sm:4
      },
      wrapperCol:{
        xs:24,
        sm:12
      }
    }

    const offsetLayout = {
      wrapperCol:{
        xs:24,
        sm:{
          span:12,
          offset:4
        }
      }
    }


    return (
      <Form layout="horizontal">
        <FormItem label="城市" {...formItemLayout}>
          {
            getFieldDecorator('city_id')(
              <Select placeholder="全部" style={{width:80}}>
                <Option value="">全部</Option>
                <Option value="1">北京</Option>
                <Option value="2">天津</Option>
                <Option value="3">深圳</Option>
                <Option value="4">上海</Option>
                <Option value="5">广州</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="用车模式" {...formItemLayout}>
          {
            getFieldDecorator('mode')(
              <Select placeholder="全部"  style={{width:120}}>
                <Option value="">全部</Option>
                <Option value="1">指定地点</Option>
                <Option value="2">限制区域</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="营运模式" {...formItemLayout}>
          {
            getFieldDecorator('op_mode')(
              <Select placeholder="全部"  style={{width:80}}>
                <Option value="">全部</Option>
                <Option value="1">自营</Option>
                <Option value="2">加盟</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem label="授权状态" {...formItemLayout}>
          {
            getFieldDecorator('auth_status')(
              <Select placeholder="全部"  style={{width:120}}>
                <Option value="">全部</Option>
                <Option value="1">已授权</Option>
                <Option value="2">未授权</Option>
              </Select>
            )
          }
        </FormItem>
      </Form>
    )
  }
}
;
//生成表单
OpenCityForm = Form.create()(OpenCityForm);

export default class City extends React.Component {

  state = {}
   
  params = {
    page:1,
  }

  componentDidMount(){
    this.request();
  }

  request = ()=>{
    let _this = this;
    Axios.ajax({
      url:'/open_city',
      method:'get',
      isShowLoading:true,
      data:{
        params:{
          page:this.params.page,
        }
      }}).then((res)=>{
        if(res.code === 0 || res.code === '0'){
          //给每一行数据添加Key          
          res.result.item_list.map((item,index)=>{
            item.key=index;
          })
          this.setState({
            dataSource:res.result.item_list,
            pagination:Utils.pagination(res,(current)=>{
              //翻页
              _this.params.page = current;
              this.request();
            }),
          });
        }
      });
  }

  handleOpenCity = ()=>{
    this.setState({
      isShowOpenCity:true,
    });
  }

  handlesubmit = ()=>{
    let cityInfo = this.cityForm.props.form.getFieldsValue();
    console.info(cityInfo);
    
    Axios.ajax({
      url:'/city/open',
      method:'get',
      isShowLoading:true,
      data:{
        params:cityInfo,
      }}).then((res)=>{
        if(res.code === 0 || res.code === '0'){
          message.success("开通成功!");
          this.setState({
            isShowOpenCity:false,
          });
          this.request();
        }
      });

  }

  render(){

    const columns = [
      { 
        title:'城市ID',
        dataIndex:'id',
      },
      { 
        title:'城市名称',
        dataIndex:'name',
      },
      { 
        title:'用车模式',
        dataIndex:'mode',
        render(mode){
          return mode === 1 ? '指定地点' : '限制区域';
        }
      },
      { 
        title:'营运模式',
        dataIndex:'op_mode',
        render(op_mode){
          return op_mode === 1 ? '自营' : '加盟';
        }
      },
      { 
        title:'授权状态',
        dataIndex:'franchisee_name',
      },
      { 
        title:'城市管理员',
        dataIndex:'city_admins',
        render(admins){
          return admins.map((admin)=>{
            return admin.user_name;
          }).join('|');

        }
      },
      { 
        title:'城市开通时间',
        dataIndex:'open_time',
      },
      { 
        title:'操作时间',
        dataIndex:'update_time',
        render(time){
          return utils.formateDate(time);
        }
      }
    ]



    return (
      <div>
        <Card>
          <FilterForm />
        </Card>        
        <Card>
          <ButtonGroup>
            <Button type = "primary" onClick={this.handleOpenCity}>新增</Button>
            <Button>修改</Button>
            <Button>查看</Button>
            <Button>删除</Button>
          </ButtonGroup>
        </Card>
        <div>
          <Table columns={columns} 
            bordered={true} 
            dataSource={this.state.dataSource} 
            pagination={true}/>
        </div>
        <Modal title="开通城市"
          visible={this.state.isShowOpenCity}
          onCancel={()=>{
            this.setState({
              isShowOpenCity:false,
            });
          }}
          onOk={this.handlesubmit}>
          <OpenCityForm wrappedComponentRef={(form) => this.cityForm = form}/>
        </Modal>
      </div>
    )
  }
}