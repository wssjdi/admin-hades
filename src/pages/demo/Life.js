import React from "react";
import {Button ,Input } from "antd";
import Child from "./Child";
import "./index.less";

export default class Life extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count:0
    };
  }

  handleAdd=()=>{
    this.setState({
      count:this.state.count + 1
    });
  }

  handleClick(){
    this.setState({
      count:this.state.count + 1
    });
  }

  render(){
    return <div className="content">
      <p>React生命周期介绍</p>
      <Input />
      <Button onClick={this.handleAdd}>按钮一</Button>
      <Button onClick={this.handleClick.bind(this)}>按钮二</Button>
      <p>{this.state.count}</p>
      <Child name={this.state.count} />
    </div>
  }
}