import React from 'react';
import { Menu } from "antd";
import MenuConfig from '../../config/menuConfig';
import './index.less';

const SubMenu = Menu.SubMenu;

export default class MenuLeft extends React.Component{

  componentWillMount(){
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    });
  }

  /**
   * 之所以要写成匿名函数，是为了自动绑定this关键字，
   * 否则就需要手动bind(this)
   */
  renderMenu = (data)=>{
    return data.map((item)=>{
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key} >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item> ;
    });
  }

  render(){
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo.svg" alt="admin-hades"/>
          <h1>Admin Hades</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>  
      </div>
    );
  }
}