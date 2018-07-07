import React from 'react';
import {Input,Form,Select,Checkbox,Button,DatePicker} from 'antd';
import Utils from '../../utils/utils';


const FormItem = Form.Item;

class BaseForm extends React.Component {

  handleFilterSubmit = ()=>{
    let fieldsValue = this.props.form.getFieldsValue();
    this.props.filterSubmit(fieldsValue);
  }

  reset = () =>{
    this.props.form.resetFields();
  }


  initFormList = () => {
    const {getFieldDecorator} = this.props.form;
    const formList = this.props.formList;
    const formItemList = [];
    if (formList && formList.length > 0) {
      formList.forEach((item,i) => {
        let label = item.label;
        let field = item.field;
        let initialValue = item.initialValue || '';
        let placeholder = item.placeholder ;
        let width = item.width;
        
        if(item.type === '时间查询'){
          const STARTTIME = <FormItem label="开始时间" key={field}>
            {
              getFieldDecorator('start_Time',{
                initialValue:initialValue,
              })(
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>
              )
            }
          </FormItem>;
          formItemList.push(STARTTIME);
          const ENDTIME = <FormItem label="~" colon={false} key={field}>
            {
              getFieldDecorator('end_Time',{
                initialValue:initialValue,
              })(
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>
              )
            }
          </FormItem>;
          formItemList.push(ENDTIME);
        }
        else if(item.type === 'INPUT'){
          const INPUT = <FormItem label={label} key={field}>
            {
              getFieldDecorator([field],{
                initialValue:initialValue
              })(
                <Input type="text" placeholder={placeholder}/>
              )
            }
          </FormItem>;
          formItemList.push(INPUT);
        }
        else if(item.type === 'SELECT'){
          const SELECT = <FormItem label={label} key={field}>
            {
              getFieldDecorator([field],{
                initialValue:initialValue
              })(
                <Select
                  style={{width:width}}  
                  placeholder={placeholder}
                > 
                  { Utils.getOptionList(item.list) }
                </Select>
              )
            }
          </FormItem>;
          formItemList.push(SELECT);
        }
        else if(item.type === 'CHECKBOX'){
          const CHECKBOX = <FormItem label={label} key={field}>
            {
              getFieldDecorator([field],{
                valuePropName:'checked',
                initialValue:initialValue
              })(
                <Checkbox
                > 
                  { label }
                </Checkbox>
              )
            }
          </FormItem>;
          formItemList.push(CHECKBOX);
        }        
      });
    }
    return formItemList;
  }


  render (){
    return (
      <Form  layout="inline">
        {this.initFormList()}
        <FormItem>
            <Button type="primary" style={{margin:'0 20px'}} onClick={this.handleFilterSubmit}>查询</Button>
            <Button onClick={this.reset}>重置</Button>
            <Button>导出</Button>
        </FormItem>
      </Form>
    );
  }

};
//生成表单
export default Form.create()(BaseForm);