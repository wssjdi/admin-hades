import React from 'react';
import './index.less'

export default class NoMatch extends React.Component{


  render(){

    return (
        <div className="nomatch-warp">
          404 Not Found The "<code>{this.props.location.pathname}</code>" Page ! 
        </div>
    )
  }
}