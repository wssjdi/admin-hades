import React from 'react';
import {Form,Button,Select,DatePicker} from 'antd';
import './index.less';


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
        <FormItem label="订单时间">
          {
            getFieldDecorator('start_Time')(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>
            )
          }
        </FormItem>
        <FormItem label="~">
          {
            getFieldDecorator('end_Time')(
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>
            )
          }
        </FormItem>
        <FormItem label="订单状态">
          {
            getFieldDecorator('status')(
              <Select placeholder="全部"  style={{width:80}}>
                <Option value="">全部</Option>
                <Option value="1">进行中</Option>
                <Option value="2">结束行程</Option>
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
export default Form.create()(FilterForm);