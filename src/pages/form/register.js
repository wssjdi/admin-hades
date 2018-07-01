import React from 'react';
import {Card,Form,Icon,Input,Button,message,Checkbox,Switch,Select,DatePicker,Radio,TimePicker, InputNumber, Upload} from 'antd';
import moment from "moment";
import './index.less';



const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class RegisterForm extends React.Component {

  state = {

  }

  handleSubmit = ()=>{
    let userInfo = this.props.form.getFieldsValue();
    console.info(userInfo);
    this.props.form.validateFields((err,values)=>{
      debugger;
      if(!err){
        message.success(`当前表单验证通过,用户名:${userInfo.userName},密码:${userInfo.passWord}`);
      }
    });
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg:imageUrl,
        loading: false,
      }));
    }
  }

  handleConfirmReadMe = (rule, value, callback) => {
    if (!value) {
        callback('请仔细阅读服务协议！')
    }
    // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
    callback()
}


  render(){
    
    //antd 提供的封装表达值获取工具
    const { getFieldDecorator} = this.props.form;

    //生命响应式布局
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
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('userName',{
                  initialValue:'',
                  rules:[{
                    required:true,
                    message:'请输入用户名'
                  },{
                    min:5,max:11,
                    message:'用户名长度不在范围之内'
                  },{
                    pattern:/^\w+$/g,
                    message:'用户名有非法字符'
                  }]
                })(<Input prefix={<Icon type="user" />} placeholder="请输入用户名"/>)
              }              
            </FormItem>
            <FormItem label="密码"  {...formItemLayout}>
              {
                getFieldDecorator('passWord',{
                  initialValue:'',
                  rules:[{
                    required:true,
                    message:'请输入密码'
                  },{
                    min:8,max:18,
                    message:'密码长度不在范围之内'
                  }]
                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码"/>)
              }
            </FormItem>
            
            <FormItem label="性别"  {...formItemLayout}>
              {
                getFieldDecorator('sex',{
                  initialValue:'0',
                  rules:[{
                    required:true,
                    message:'请选择性别'
                  }]
                })(<RadioGroup>
                    <Radio value="0">女</Radio>
                    <Radio value="1">男</Radio>
                  </RadioGroup>)
              }
            </FormItem>
            
            <FormItem label="年龄"  {...formItemLayout}>
              {
                getFieldDecorator('age',{
                  initialValue:'18',
                  rules:[{
                    required:true,
                    message:'请输入年龄'
                  }]
                })(<InputNumber>
                  </InputNumber>)
              }
            </FormItem>            
            
            <FormItem label="当前状态"  {...formItemLayout}>
              {
                getFieldDecorator('state',{
                  initialValue:'1',
                  rules:[{
                    required:true,
                    message:'请选择当前状态'
                  }]
                })(<Select>
                    <Option value="0">咸鱼一条</Option>
                    <Option value="1">风华浪子</Option>
                    <Option value="2">北大才子</Option>
                    <Option value="3">百度FE</Option>
                    <Option value="4">阿里程序员</Option>
                    <Option value="5">创业者</Option>
                    <Option value="6">淘宝卖家</Option>
                    <Option value="7">滴滴司机</Option>
                    <Option value="8">壕</Option>
                  </Select>)
              }
            </FormItem>

            
            
            <FormItem label="爱好"  {...formItemLayout}>
              {
                getFieldDecorator('interest',{
                  initialValue:['2','5','7'],
                  rules:[{
                    required:true,
                    message:'请选择爱好'
                  }]
                })(<Select mode="multiple">
                    <Option value="0">跑步</Option>
                    <Option value="1">打篮球</Option>
                    <Option value="2">游泳</Option>
                    <Option value="3">健身</Option>
                    <Option value="4">读书</Option>
                    <Option value="5">爬山</Option>
                    <Option value="6">踢足球</Option>
                    <Option value="7">桌球</Option>
                    <Option value="8">麦霸</Option>
                    <Option value="9">吃鸡</Option>
                  </Select>)
              }
            </FormItem>            
            
            <FormItem label="已婚"  {...formItemLayout}>
              {
                getFieldDecorator('isMarried',{
                  valuePropName:'checked',
                  initialValue:true,
                  rules:[{
                    required:true,
                    message:'请选择婚姻状态'
                  }]
                })(<Switch>
                  </Switch>)
              }
            </FormItem>            
            
            <FormItem label="生日"  {...formItemLayout}>
              {
                getFieldDecorator('birthday',{
                  initialValue:moment('1990-01-01','YYYY-MM-DD'),
                  rules:[{
                    required:true,
                    message:'请选择生日'
                  }]
                })(<DatePicker showTime={false} format="YYYY-MM-DD"> 
                  </DatePicker>)
              }
            </FormItem>
            
            <FormItem label="联系地址"  {...formItemLayout}>
              {
                getFieldDecorator('address',{
                  initialValue:'苏州市星海街378号',
                  rules:[{
                    required:true,
                    message:'请填写联系地址'
                  }]
                })(<TextArea autosize={{minRows:4,maxRows:6}}> 
                  </TextArea>)
              }
            </FormItem>            
            
            <FormItem label="闹钟"  {...formItemLayout}>
              {
                getFieldDecorator('time',{
                  initialValue:moment('07:30:00','HH:mm:ss'),
                  rules:[{
                    required:true,
                    message:'请选择闹钟'
                  }]
                })(<TimePicker showTime={true} format="HH:mm:ss"> 
                  </TimePicker>)
              }
            </FormItem>
            
            <FormItem label="头像"  {...formItemLayout}>
              {
                getFieldDecorator('userImg',{
                  initialValue:'',
                  rules:[{
                    required:true,
                    message:'请上传头像'
                  }]
                })(<Upload listType="picture-card" 
                          showUploadList={false}
                          action="//jsonplaceholder.typicode.com/posts/"
                          beforeUpload={beforeUpload}
                          onChange={this.handleChange}
                  > 
                  {this.state.userImg ? <img src={this.state.userImg} alt="我的头像" /> : <Icon type = "plus"/>}
                  </Upload>)
              }
            </FormItem>

            
            <FormItem  {...offsetLayout}>
              {
                getFieldDecorator('readMe',{
                  valuePropName:'checked',
                  initialValue:true,
                  rules:[{
                    required:true,
                    message:'请阅读服务协议'
                  },{
                    validator: this.handleConfirmReadMe,
                  }]
                })(<Checkbox>我已阅读<a href="#">服务协议</a>
                  </Checkbox>)
              }
            </FormItem>

            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }

}

export default Form.create()(RegisterForm);