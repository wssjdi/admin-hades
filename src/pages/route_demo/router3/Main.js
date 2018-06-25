import React from 'react';
import {Link} from "react-router-dom";

export default class Main extends React.Component{

  render(){
    return (
      <div>
        Main Pages<br/>
        <Link to="/main/012">嵌套路由012</Link><br/>
        <Link to="/main/123">嵌套路由123</Link><br/>
        <Link to="/main/456">嵌套路由456</Link><br/>
        <Link to="/main/789">嵌套路由789</Link><br/>
        <hr/>
        {this.props.children}
      </div>
    );
  }
}