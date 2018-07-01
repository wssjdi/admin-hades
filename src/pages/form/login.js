import React from 'react';
import {Card,Form,Icon,Input,Button,message, Checkbox} from 'antd';
import './index.less';


const FormItem = Form.Item;

class FormLogin extends React.Component {

  handleSubmit = ()=>{
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err,values)=>{
      if(!err){
        message.success(`当前表单验证通过,用户名:${userInfo.userName},密码:${userInfo.passWord}`);
      }
    });
  }

  render (){
    //antd 提供的封装表达值获取工具
    const { getFieldDecorator} = this.props.form;

    return (
      <div>
        <Card title="登录行内表单">
          <Form layout="inline">
            <FormItem>
              <Input prefix={<Icon type="user" />} placeholder="请输入用户名"/>
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码"/>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
        
        <Card title="登录水平表单">
          <Form style={{width:300}}>
            <FormItem>
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
            <FormItem>
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
            <FormItem>
              {
                getFieldDecorator('rememberMe',{
                  valuePropName:'checked',
                  initialValue:true,                  
                  rules:[],
                })(<Checkbox  style={{float:'left'}} >记住密码</Checkbox>)
              }
              <a href="#"  style={{float:'right'}} >忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" style={{float:'right'}} onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(FormLogin);