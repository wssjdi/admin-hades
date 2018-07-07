import React from 'react';
import { Card, Button, Table, Form, Modal, message} from 'antd'
import Axios from '../../axios'
import Utils from '../../utils/utils'
import {columns,formItemLayout} from './columns';
import  FilterForm from './FilterForm';
import "./index.less";

const FormItem = Form.Item;

export default class Order extends React.Component{
    state  = {
        orderInfo:{},
        orderConfirmVisble:false
    }
    params = {
        page: 1
    }
    componentDidMount(){
        this.request()
    }
    request = ()=>{
        let _this = this;
        Axios.ajax({
        url:'/order/list',
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

    // 订单结束确认
    handleConfirm = ()=>{
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请选择一条订单进行结束'
            })
            return;
        }
        Axios.ajax({
            url:'/order/ebike_info',
            method:'get',
            isShowLoading:true,
            data:{
                params:{
                    orderId: item.id
                }
            }
        }).then((res)=>{
            if(res.code ===0 || res.code === '0' ){
                this.setState({
                    orderInfo:res.result,
                    orderConfirmVisble: true
                })
            }
        })
    }

    // 结束订单
    handleFinishOrder = ()=>{
        let item = this.state.selectedItem;
        Axios.ajax({
            url: '/order/finish_order',
            method:'get',
            isShowLoading:true,
            data: {
                params: {
                    orderId: item.id
                }
            }
        }).then((res) => {
            if (res.code === 0 || res.code === '0' ) {
                message.success('订单结束成功')
                this.setState({
                    orderConfirmVisble: false
                })
                this.requestList();
            }
        })
    }
    onRowClick = (record, index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }

    openOrderDetail = ()=>{
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: '信息',
                content: '请先选择一条订单'
            })
            return;
        }
        window.open(`/#/common/order/detail/${item.id}`,'_blank')
    }
    render(){
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        return (
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary" style={{marginLeft:10}} onClick={this.handleConfirm}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={this.state.pagination}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            };
                        }}
                    />
                </div>
                <Modal
                    title="结束订单"
                    visible={this.state.orderConfirmVisble}
                    onCancel={()=>{
                        this.setState({
                            orderConfirmVisble:false
                        })
                    }}
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form layout="horizontal">
                        <FormItem label="车辆编号" {...formItemLayout}>
                            {this.state.orderInfo.bike_sn}
                        </FormItem>
                        <FormItem label="剩余电量" {...formItemLayout}>
                            {this.state.orderInfo.battery + '%'}
                        </FormItem>
                        <FormItem label="行程开始时间" {...formItemLayout}>
                            {this.state.orderInfo.start_time}
                        </FormItem>
                        <FormItem label="当前位置" {...formItemLayout}>
                            {this.state.orderInfo.location}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}