
import Utils from '../../utils/utils';

export const columns =  [
  { 
    title:'订单编号',
    dataIndex:'order_sn',
  },
  { 
    title:'车辆编号',
    dataIndex:'bike_sn',
  },
  { 
    title:'用户名',
    dataIndex:'user_name',
  },
  { 
    title:'手机号',
    dataIndex:'mobile',
  },
  { 
    title:'里程',
    dataIndex:'distance',
  },
  { 
    title:'行驶时长',
    dataIndex:'total_time',
  },
  { 
    title:'订单状态',
    dataIndex:'status',
  },
  { 
    title:'开始时间',
    dataIndex:'start_time',
    render(time){
      return Utils.formateDate(time);
    }
  },
  { 
    title:'结束时间',
    dataIndex:'end_time',
    render(time){
      return Utils.formateDate(time);
    }
  },
  { 
    title:'订单金额',
    dataIndex:'total_fee',
  },
  { 
    title:'实付及金额',
    dataIndex:'user_pay',
  }
];

export const formItemLayout = {
  labelCol:{
    xs:24,
    sm:5
  },
  wrapperCol:{
    xs:24,
    sm:19
  }
};
export const offsetLayout = {
      wrapperCol:{
        xs:24,
        sm:{
          span:12,
          offset:4
        }
      }
    }
export default {columns,formItemLayout,offsetLayout};