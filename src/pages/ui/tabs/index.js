import React from 'react';
import {Card,Tabs,message, Icon} from 'antd'
import './index.less'

const TablePane = Tabs.TabPane;



export default class ITabs extends React.Component {

  newTabIndex = 0;

  handleCallBack= (key)=>{    
    message.success("当前已经切换到了Tab"+key);
  }

  handleOnChange=(key)=>{
    message.success("当前已经切换到了Tab"+key);
    this.setState({activeKey:key});
  }

  handleOnEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: `New Tab ${this.newTabIndex}`, content: `我是Tab ${activeKey}`, key: activeKey ,icon:'plus'});
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    debugger;
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  componentWillMount(){
    const panes = [
      {
        title:'Tab7',
        content:'我是Tab7',
        key:'7',
        icon:'plus'
      },
      {
        title:'Tab8',
        content:'我是Tab8',
        key:'8',
        icon:'edit'
      },
      {
        title:'Tab9',
        content:'我是Tab9',
        key:'9',
        icon:'delete'
      },
    ]

    this.setState({
      panes,
      activeKey:'7',
    });

  }

  render(){
    return (
      <div>
        <Card title="Tab页签" className="card-tabs-wrap">
          <Tabs defaultActiveKey = "1" onChange={this.handleCallBack}>
            <TablePane tab="Tab1" key="1">
              我是TAB1
            </TablePane>
            <TablePane tab="Tab2" key="2">
              我是TAB2
            </TablePane>
            <TablePane tab="Tab3" key="3">
              我是TAB3
            </TablePane>
          </Tabs>
        </Card>
        <Card title="带图标的页签" className="card-tabs-wrap">
          <Tabs defaultActiveKey = "4" onChange={this.handleCallBack}>
            <TablePane tab={<span><Icon type="plus"/>Tab 4</span>} key="4">
              我是TAB4
            </TablePane>
            <TablePane tab={<span><Icon type="edit"/>Tab 5</span>} key="5">
              我是TAB5
            </TablePane>
            <TablePane tab={<span><Icon type="delete"/>Tab 6</span>} 
              key="6"
              disabled={true}>
              我是TAB6
            </TablePane>
          </Tabs>
        </Card>
        <Card title="动态新增页签" className="card-tabs-wrap">
          <Tabs activeKey ={this.state.activeKey} 
            onChange={this.handleOnChange} 
            onEdit={this.handleOnEdit}
            type="editable-card">
            {
              this.state.panes.map(
                (pane)=>{
                  return (<TablePane tab={<span><Icon type={pane.icon}/>{pane.title}</span>} key={pane.key}>
                  {pane.content}
                </TablePane>)
                }
              )
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}