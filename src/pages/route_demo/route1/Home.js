import React from 'react';
import {HashRouter,Route,Link,Switch} from "react-router-dom";
import Main from './Main';
import About from './About';
import Topic from './Topic';

/*混合路由方式*/

export default class Home extends React.Component{
  render(){
    return (
      <HashRouter> 
        <div>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/about">关于</Link></li>
            <li><Link to="/topics">主题列表</Link></li>
          </ul>
          <hr/>
          {/* exact=true 标识精准匹配*/}
          {/* <Route exact={true} path="/" component={Main}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topic}/> */}
          {/* Switch 只加载匹配的第一个路由,不会加载多个路由组件*/}
          <Switch>
            <Route exact={true} path="/" component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topic}/>
          </Switch>
        </div>  
      </HashRouter>
    )
  }
}